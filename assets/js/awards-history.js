---
---
{% assign use_autocomplete = site['awards_history']['autocomplete']['use'] %}
{% assign suggestions = site['awards_history']['autocomplete']['suggestions'] | downcase %}
{% if suggestions == 'all' %}{% assign suggestions = "'all'" %}{% endif %}
function init_awards_history_filters() {
  return {
    year: 'All',
    states: {},
    expandGroup: {}
  };
}

awards_history_group_view = false;

awards_history_filters = init_awards_history_filters();

awards_history_company_names = {};

$.fn.dataTable.ext.search.push(

  // Year filter
  function (settings, data, dataIndex, dataObj) {
    const year = dataObj.award_date.split('-')[0];

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

    return (awards_history_filters.phase1 && dataObj.phase.endsWith('Phase I')) ||
      (awards_history_filters.phase2 && dataObj.phase.endsWith('Phase II'));
  },

  // States filter
  function (settings, data, dataIndex, dataObj) {
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

$(document).ready(function () {
  let dt;

  let groupRowHeaders;

  let download_limit = {{ site['awards_history']['download_limit'] }};

  let awards_history;
  let autocomplete_index;

  awards_history_filters.year = $('.awards-history-year-filters .active').text();

  let substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex;

      // an array that will be populated with substring matches
      matches = [];

      // regex used to determine if a string contains the substring `q`
      substrRegex = new RegExp(q, 'i');

      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      $.each(strs, function(i, str) {
        if (substrRegex.test(str)) {
          matches.push(str);
        }
      });

      cb(matches);
    };
  };

  let getAwardsHistory = async function() {
    //window.AH = await sfService.getAwardsHistory();
    //uh = window.AH[0]
    //kk = Object.keys(uh).filter(k => k.startsWith('Pitchbook'))
    //window.pitch = window.AH.map(a => { let pb = { InstitutionIdentifer: a.InstitutionIdentifer, CompanyUrl: a.CompanyUrl }; for (let k of kk) { pb[k] = a[k] }; return pb; })
    awards_history = (await sfService.getAwardsHistory()).map(function (award) {
      update_company_names(award.InstitutionIdentifer, award.InstitutionName);

      return {
        company_id: award.InstitutionIdentifer,
        company: award.InstitutionName,
        city_state: award.CityName + ', ' + award.StateCode,
        title: award.Title,
        amount: award.AwardAmount,
        award_date: award.AwardDate,
        abstract: award.Abstract,
        id: award.AwardID,
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
        $('.results-loading').hide();
        $('.awards-history-latest-award').text('As of ' + dateFormatter.mmddyyyy(awards_history[0].award_date)).show();
        $('.awards-history-container .dataTables_filter input').attr('title', 'Enter one or more search terms');
        $('.dt-buttons .buttons-csv').attr('class', 'dl-csv usa-button usa-button-primary').attr('title', 'Download filtered data as CSV')
        $('#awards_history_filter').append('<span class="help-icon"></span>');
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
      lengthMenu: [[50, 100, -1], [50, 100, 'All']],
      dom: 'flBrtip',
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
        dataSrc: '',
        startRender: function(rows, group) {
          rows.nodes().each(function(rowNode) {
            if (!awards_history_group_view) {
              rowNode.style.display = '';
            } else {
              rowNode.style.display = awards_history_filters.expandGroup[group] ? '' : 'none';
            }
          });

          const html = '<tr class="dtrg-group dtrg-start" data-name="' + group + '"' +
              historyRowGroupExpanded(group) +
              historyShowOrHideStyle(awards_history_group_view) + '>' +
            '<td class="group-count">' + rows.count() + ' Award' + (rows.count > 1 ? 's' : '') + '</td>' +
            '<td colspan="4" class="group-company-name"><span>' + awards_history_company_names[group] + '</span></td>' +
            '<td><span class="expand-collapse"></span></td>' +
            '</tr>' +
            (groupRowHeaders && awards_history_filters.expandGroup[group] ? groupRowHeaders : '');
          return $(html);
        }
      },
      fnDrawCallback: function() {
        $('.history-download-alert').hide();
      }
    });

    dt = $('#awards_history').DataTable(config);

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
      awards_history_filters.states[evt.target.value] = evt.target.checked;
      dt.draw();
    });

    $('.awards-history-grid-filters #all_states').change(function(evt) {
      $('.awards-history-grid-filters .state-list input[type="checkbox"]').each(function(index, el) {
        el.checked = evt.target.checked;
        awards_history_filters.states[el.value] = evt.target.checked;
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
      dt.draw(false);
    });

  });

});
