---
---
{% assign use_autocomplete = site['awards_history']['autocomplete']['use'] %}
{% assign suggestions = site['awards_history']['autocomplete']['suggestions'] | downcase %}
{% if suggestions == 'all' %}{% assign suggestions = "'all'" %}{% endif %}

awards_history_qsConfig = simpleQueryString.parse(location.search);

awards_history_redraws = 0;

awards_history_group_view = !!awards_history_qsConfig.gv;

awards_history_filters = init_awards_history_filters(awards_history_qsConfig);

awards_history_company_names = {};

function init_awards_history_filters(qsConfig = {}) {
  var filters = {
    phase1: qsConfig.p1 || null,
    phase2: qsConfig.p2 || null,
    keyword: qsConfig.kw || null,
    perPage: qsConfig.pp || null,
    year: qsConfig.yr || 'All',
    states: {},
    expandGroup: {}
  };

  if (qsConfig.st) {
    qsConfig.st.split('-').forEach(function(abbr) {
      filters.states[abbr] = true;
    });
  }

  return filters;
}

function update_awards_history_url_with_filters() {
  if (!awards_history_redraws++) return;

  setTimeout(function() {
    var states = Object.keys(awards_history_filters.states).join('-');
    var allStatesSelected = $('.awards-history-grid-filters #all_states')[0].checked;

    var qs = {
      yr: awards_history_filters.year,
      p1: awards_history_filters.phase1 ? 1 : null,
      p2: awards_history_filters.phase2 ? 1 : null,
      kw: !!awards_history_filters.keyword ? awards_history_filters.keyword : null,
      pp: awards_history_filters.perPage,
      gv: awards_history_group_view ? 1 : null,
      st: !allStatesSelected && states.length ? states : null
    }

    var url = location.origin + location.pathname + '?' + simpleQueryString.stringify(qs);
    history.replaceState({}, '', url);
  });
}

$.fn.dataTable.ext.search.push(

  // Year filter
  function (settings, data, dataIndex, dataObj) {
    const year = dataObj.award_date.split('-')[0];

    // In case the query string specified anything
    if (awards_history_filters.year === 'All') {
      return true;
    } else {
      return awards_history_filters.year === year;
    }
  },

  // Phase 1/II filter
  function (settings, data, dataIndex, dataObj) {
    if (!awards_history_filters.phase1 && !awards_history_filters.phase2) {
      return true;
    }

    // In case the query string specified anything
    if (awards_history_filters.phase1) $('#phase1')[0].checked = true;
    if (awards_history_filters.phase2) $('#phase2')[0].checked = true;

    return (awards_history_filters.phase1 && dataObj.phase.endsWith('Phase I')) ||
      (awards_history_filters.phase2 && dataObj.phase.endsWith('Phase II'));
  },

  // States filter
  function (settings, data, dataIndex, dataObj) {
    // In case the query string specified anything
    for (let abbr of Object.keys(awards_history_filters.states)) {
      $('#state_' + abbr)[0].checked = true;
    }

    if (! $('.awards-history-grid-filters .state-list input[type="checkbox"]:checked').length ) {
      return true;
    }

    let state = dataObj.city_state.slice(-2);

    return !!awards_history_filters.states[state];
  }
);

function closeHistorySearchTooltip() {
  $('.awards-history-container .help-icon').click();
}

function historyRowGroupExpanded(group) {
  if (!awards_history_group_view) return '';

  let bool = awards_history_filters.expandGroup[group] ? 'true' : 'false';

  return ' aria-expanded="' + bool + '" ';
}

function historyShowOrHideStyle(isGroupView) {
  return isGroupView ? " style=\"display:''\" " : ' style="display:none" ';
}

function update_company_names(company_id, company_name) {
  if (!awards_history_company_names[company_id]) {
    awards_history_company_names[company_id] = company_name;
  }
}

async function copyUrl(event) {
  if (!navigator.clipboard) {
    // Clipboard API not available
    return;
  }
  try {
    await navigator.clipboard.writeText(location.href);
    $('#copy-url .success').addClass('show');
    setTimeout(function() {
      $('#copy-url .success').removeClass('show');
    }, 1500);
  } catch (err) {
    console.error('Failed to copy!', err)
  }
}

$(document).ready(function () {
  let dt;

  let groupRowHeaders;

  let download_limit = {{ site['awards_history']['download_limit'] }};

  let awards_history;
  let autocomplete_index;

  $('.awards-history-year-filters button').removeClass('active');
  $('#year_' + awards_history_filters.year).addClass('active');

  let getAwardsHistory = async function() {
    awards_history = (await sfService.getAwardsHistory()).map(function (award) {
      update_company_names(award.InstitutionIdentifier, award.InstitutionName);

      return {
        company_id: award.InstitutionIdentifier,
        company: award.InstitutionName,
        city_state: award.CityName + ', ' + award.StateCode,
        title: award.Title,
        amount: award.AwardAmount.replaceAll(',', ''),
        award_date: award.AwardDate,
        abstract: award.Abstract,
        id: award.AwardNumber,
        url: award.CompanyUrl,
        phase: award.ProgramElementName,
        pi_name: award.PIFirstName + ' ' + award.PILastName,
        pi_phone: award.PIPhoneNumber
      };
    });
  }

  let getAutocompleteIndex = async function() {
    autocomplete_index = await sfService.getAwardsHistoryAutocompleteIndex();
  }

  Promise.all([

    getAwardsHistory(),

    {% if use_autocomplete %}
    getAutocompleteIndex()
    {% endif %}

  ]).then(function() {

    function userAgentStrugglesWithSticky() {
      return navigator.userAgent.indexOf("Firefox") > -1;
    }

    const config = Object.assign(dataTablesConfig(), {
      initComplete: function (settings, json) {
        let latest_award = awards_history.map(a => a.award_date).sort().reverse()[0];
        $('.awards-history-latest-award').text('As of ' + dateFormatter.mmddyyyy(latest_award)).show();
        $('.awards-history-container .dataTables_filter input').attr('title', 'Enter one or more search terms');
        $('.dt-buttons .buttons-csv')
          .attr('class', 'dl-csv usa-button usa-button-primary')
          .attr('title', 'Download results to CSV');
        $('#awards_history_filter').append('<span class="help-icon"></span>');
        let lengthUI = document.getElementById('awards_history_length');
        lengthUI.firstChild.firstChild.nodeValue = "Rows per page";
        lengthUI.firstChild.lastChild.remove();
        $('.flbv-container .awards-history-grid-view').append(
          '<button id="list-view" class="active">List View</button> | ' +
          '<button id="group-view">Group by Awardee</button>'
        );
        $('#copy-url').append(
          '<button class="usa-button usa-button-primary" title="Copy results link" onClick="copyUrl()">' +
          'Copy results link</button>' +
          '<span class="success">Copied!</span>'
        );
        if (awards_history_filters.year !== 'All') {
          $('.dl-csv').show();
          $('.awards-history-grid-view').hide();
        }
        $('.results-loading').hide();
        $('.awards-history-container').show();
        const searchMarkup = $('#awards-history-search-help').html();
        tippy('#awards_history_filter .help-icon', {
          arrow: false,
          content: searchMarkup,
          allowHTML: true,
          placement: 'auto',
          trigger: 'click',
          hideOnClick: 'toggle',
          interactive: true,
          appendTo: function() {
            return document.querySelector('.dataTables_wrapper')
          },
          theme: 'seedfund'
        });

        groupRowHeaders = ['<tr class="awards-history-group-hdrs">'].
          concat(Array.from(this.api().columns(':visible').header()).map(function(col) {
            return '<td>' + col.innerText + '</td>';
          })).
          concat('</tr>').
          join('');

        {% if use_autocomplete %}
        const api = this.api();
        $('.dataTables_filter input[type="search"]', api.table().container()).typeahead({
          items: {{ suggestions }},
          source: autocomplete_index,
          afterSelect: function (value) {
            api.search(value).draw();
          }
        });
        {% endif %}

        if (userAgentStrugglesWithSticky()) {
          const historyGrid = $('.usa-section.usa-content.usa-grid');
          const topMargin = historyGrid.offset().top;
          const spaceBetweenGridAndFooter = parseInt(historyGrid.css('padding-bottom'));
          const gridFilters = $('.awards-history-grid-filters');
          const gridFiltersHeight = gridFilters.height() + topMargin;
          const gridFiltersTop = gridFilters.offset().top - topMargin;
          const footer = document.querySelector(".usa-footer");
          const fixedTopValue = '160px';

          $(window).on('scroll', function() {
            if (window.scrollY > gridFiltersTop) {
              gridFilters[0].style.cssText = 'position:fixed; top:' + fixedTopValue;
              footerTop = footer.getBoundingClientRect().top - spaceBetweenGridAndFooter;

              if (gridFiltersHeight > footerTop) {
                let diff = gridFiltersHeight - footerTop;
                gridFilters[0].style.top = (parseInt(gridFilters[0].style.top) - diff) + 'px';
              } else {
                gridFilters[0].style.top = fixedTopValue;
              }
            } else {
              // cssText is nice here because it replaces the entire inline style,
              // i.e., deleting position and respecting the stylesheet value again
              gridFilters[0].style.cssText = 'top:0';
            }
          });
        }
      },
      data: awards_history,
      columns: [
        {
          title: 'COMPANY',
          data: 'company',
          render: function (data, type, row, meta) {
            if (type === 'display') {
              data = '<a target="_blank" href="{{ site.baseurl }}/awardees/history/details/?company=' + row.url + '">' + row.company + '</a>';
            }
            return data;
          }
        },
        { title: 'LOCATION', data: 'city_state' },
        { title: 'AWARD ID', data: 'id' },
        { title: 'AWARD TITLE', data: 'title' },
        {
          title: 'AWARD AMOUNT',
          data: 'amount',
          render: function(data, type, row, meta) {
            return type === 'sort' ? data : strFormatter.usd_pretty(data);
          }
        },
        {
          title: 'AWARD DATE',
          data: 'award_date',
          render: function(data, type, row, meta) {
            return type === 'sort' ? data : dateFormatter.mmddyyyy(data);
          }
        },
        { title: 'ABSTRACT', data: 'abstract', visible: false },
        { title: 'COMPANY URL', data: 'url', visible: false },
        { title: 'PHASE', data: 'phase', visible: false },
        { title: 'PI', data: 'pi_name', visible: false},
        { title: 'PI PHONE', data: 'pi_phone', visible: false}
      ],
      columnDefs: [
        {'max-width': '20%', 'targets': 2}
      ],
      lengthMenu: [[50, 100, -1], [50, 100, 'All']],
      dom: '<"flbv-container"flB<"awards-history-grid-view"><"#copy-url">>r<"x-scrollable"t>ip',
      buttons: [
        {
          extend: 'csv',
          action: function(e, dt, button, config) {
            let rowCount = dt.rows({search:'applied'}).count();

            if (download_limit < 0) {
              console.warn('config::site.awards_history.download_limit < 0');
              return false;
            }

            if (download_limit > 0 && rowCount > download_limit) {
              $('.history-download-alert').show();
              return false;
            }

            $.fn.dataTable.ext.buttons.csvHtml5.action.call(this, e, dt, button, config);
          },
          text: 'Download results to CSV',
          filename: 'nsf_seedfund_award_history',
          exportOptions: {
            columns: [6, 0, 1, 2, 3, 4, 5, 9, 10]
          }
        }
      ],
      order: [[5, 'desc'], [0, 'asc']],
      orderFixed: {
        post: [[0, 'asc']]
      },
      rowGroup: {
        dataSrc: awards_history_group_view ? 'company_id' : '',
        startRender: function(rows, group) {
          rows.nodes().each(function(rowNode) {
            if (!awards_history_group_view) {
              rowNode.style.display = '';
            } else {
              rowNode.style.display = awards_history_filters.expandGroup[group] ? '' : 'none';
            }
          });

          var row_count = rows.count();

          const html = '<tr class="dtrg-group dtrg-start" data-name="' + group + '"' +
              historyRowGroupExpanded(group) +
              historyShowOrHideStyle(awards_history_group_view) + '>' +
            '<td class="group-count">' + row_count + ' Award' + (row_count > 1 ? 's' : '') + '</td>' +
            '<td colspan="4" class="group-company-name"><span>' + awards_history_company_names[group] + '</span></td>' +
            '<td><span class="expand-collapse"></span></td>' +
            '</tr>' +
            (groupRowHeaders && awards_history_filters.expandGroup[group] ? groupRowHeaders : '');
          return $(html);
        }
      },
      fnDrawCallback: function() {
        $('.history-download-alert').hide();
        update_awards_history_url_with_filters();
      }
    });

    // If the initial queryString contained a keyword search...
    if (awards_history_filters.keyword) {
      config.oSearch = {sSearch: awards_history_filters.keyword};
    }

    // If the initial queryString contained a (per) page length
    if (awards_history_filters.perPage) {
      config.pageLength = Number(awards_history_filters.perPage);
    }

    dt = $('#awards_history').DataTable(config);

    if (awards_history_group_view) {
      dt.rowGroup().dataSrc('company_id').order([0, 'asc']);
      $('#group-view').addClass('active');
      $('#list-view').removeClass('active');
      $('#awards_history thead th').hide();
    }

    $('.dt-buttons').append(
      '<div class="history-download-alert">Only ' + download_limit +
      ' records can be downloaded.  Please refine your search accordingly.</div>'
    );

    $('.awards-history-year-filters button').click(function (evt) {
      if (awards_history_group_view) {
        awards_history_filters.target = $(evt.target);
        awards_history_group_view = false;
        $('#list-view').click();
        setTimeout(function() {
          awards_history_filters.target.click();
        });
        return;
      }
      const target = $(evt.target);
      awards_history_filters.year = target.text();
      $('.awards-history-year-filters button').removeClass('active');
      target.addClass('active');
      if (target.text() !== 'All') {
        $('.dl-csv').show();
        $('.awards-history-grid-view').hide();
      } else {
        $('.dl-csv').hide();
        $('.awards-history-grid-view').css('display', 'inline-block');
      }
      dt.draw();
    });

    $('.awards-history-grid-filters input[id^="phase"]').change(function(evt) {
      awards_history_filters[evt.target.id] = evt.target.checked;
      dt.draw();
    });

    $('.awards-history-grid-filters .state-list input[type="checkbox"]').change(function(evt) {
      if (evt.target.checked) {
        awards_history_filters.states[evt.target.value] = true;
      } else {
        delete awards_history_filters.states[evt.target.value];
      }
      dt.draw();
    });

    $('.awards-history-grid-filters #all_states').change(function(evt) {
      $('.awards-history-grid-filters .state-list input[type="checkbox"]').each(function(index, el) {
        el.checked = evt.target.checked;
        ///awards_history_filters.states[el.value] = evt.target.checked;
        if (evt.target.checked) {
          awards_history_filters.states[el.value] = true;
        } else {
          delete awards_history_filters.states[el.value];
        }
      })
      dt.draw();
    });

    $('.awards-history-grid-filters .clear-filters-btn').click(function() {
      $('.awards-history-grid-filters input[type="checkbox"]').prop('checked', false);
      const keyword_search = $('#awards_history_filter input');
      keyword_search.val('');

      const length_select = $('select[name="awards_history_length"]');
      length_select.val(
        length_select[0].options[0].getAttribute('value')
      )

      awards_history_filters = init_awards_history_filters();

      dt.page.len(parseInt(length_select.val(), 10)).search('').draw();
    });

    $('#awards_history_filter input').on('keyup blur', $.debounce(250, function(evt) {
      awards_history_filters.keyword = evt.target.value;
      update_awards_history_url_with_filters();
    }));

    $('select[name="awards_history_length"]').change(function(evt) {
      awards_history_filters.perPage = evt.target.value;
    });

    $('#list-view, #group-view').click(function(evt) {
      $('.awards-history-grid-view button').removeClass('active');

      let target = $(evt.target);
      target.addClass('active');

      if (target.text() === 'Group by Awardee') {
        awards_history_group_view = true;
        dt.rowGroup().dataSrc('company_id').order([0, 'asc']);
        $('#awards_history thead th').hide();
      } else {
        awards_history_group_view = false;
        dt.rowGroup().dataSrc('').order([5, 'desc']);
        $('#awards_history thead th').css('display', 'table-cell');
      }
      dt.draw(false);
    });

    $('#awards_history tbody').on('click', 'tr.dtrg-start', function(evt) {
      let tr = $(this);
      let name = tr.data('name');
      awards_history_filters.expandGroup[name] = !awards_history_filters.expandGroup[name];
      for (let grp of Object.keys(awards_history_filters.expandGroup)) {
        if (!awards_history_filters.expandGroup[grp]) delete awards_history_filters.expandGroup[grp];
      }
      dt.draw(false);
    });

  });

});
