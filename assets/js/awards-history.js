---
---

function init_awards_history_filters() {
  return {
    year: 'All',
    states: {}
  };
}

awards_history_filters = init_awards_history_filters();

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

$(document).ready(function () {
  let dt;

  awards_history_filters.year = $('.awards-history-year-filters .active').text();

  fetch('{{ site.baseurl }}/data/awards-history.json').then(function (response) {
    return response.json();
  }).then(function (data) {

    let awards_history = data.map(function (award) {
      return {
        company: award.InstitutionName,
        city_state: award.CityName + ', ' + award.StateCode,
        title: award.Title,
        amount: award.AwardAmount,
        award_date: award.AwardDate,
        abstract: award.Abstract,
        id: award.AwardID,
        url: award.CompanyUrl,
        phase: award.ProgramElementName
      };
    })

    return Promise.resolve(awards_history);

  }).then(function (awards_history) {
    const config = Object.assign(dataTablesConfig(), {
      initComplete: function (settings, json) {
        $('.results-loading').hide();
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
        { title: 'AWARD AMOUNT', data: 'amount' },
        {
          title: 'AWARD DATE',
          data: 'award_date',
          render: function(data, type, row, meta) {
            return type === 'sort' ? data : dateFormatter.mdyyyy(data);
          }
        },
        { title: 'ABSTRACT', data: 'abstract' },
        { title: 'COMPANY URL', data: 'url' },
        { title: 'PHASE', data: 'phase' }
      ],
      lengthMenu: [[50, 100, -1], [50, 100, "All"]],
      dom: 'flBrtip',
      buttons: [
        {
          extend: 'csv',
          text: 'Download results to CSV',
          filename: 'nsf_seedfund_award_history',
          exportOptions: {
            columns: [6, 0, 1, 2, 3, 4, 5]
          }
        }
      ],
      order: [[5, "desc"]]
    });
    
    dt = $('#awards_history').DataTable(config);

    $('.awards-history-year-filters button').click(function (evt) {
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

  });

});
