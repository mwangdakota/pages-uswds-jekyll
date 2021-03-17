---
---

function init_awards_history_filters() {
  return {
    year: '{{ site.time | date: "%Y" }}',
    states: {}
  };
}

awards_history_filters = init_awards_history_filters();

$.fn.dataTable.ext.search.push(

  // Year filter
  function (settings, data, dataIndex) {
    const year = data[4].split('/')[2];

    if (awards_history_filters.year === 'All') {
      return true;
    } else {
      return awards_history_filters.year === year;
    }
  },

  // Phase 1/II filter
  function (settings, data, dataIndex) {
    if (!awards_history_filters.phase1 && !awards_history_filters.phase2) {
      return true;
    }

    return (awards_history_filters.phase1 && data[8].endsWith('Phase I')) ||
      (awards_history_filters.phase2 && data[8].endsWith('Phase II'));
  },

  // States filter
  function (settings, data, dataIndex) {
    if (! $('.awards-history-grid-filters .state-list input[type="checkbox"]:checked').length ) {
      return true;
    }

    let state = data[1].slice(-2);
    return !!awards_history_filters.states[state];
  }
);

$(document).ready(function () {
  let dt;

  awards_history_filters.year = $('.awards-history-year-filters .active').text();

  fetch('{{ site.baseurl }}/data/awards-history.json').then(function (response) {
    return response.json();
  }).then(function (data) {

    let awards_history = data.map(function (award) {
      return [
        award.InstitutionName,
        award.CityName + ', ' + award.StateCode,
        award.Title,
        award.AwardAmount,
        award.AwardDate,
        award.Abstract,
        award.AwardID,
        award.CompanyUrl,
        award.ProgramElementName
      ];
    })

    return Promise.resolve(awards_history);

  }).then(function (awards_history) {
    var config = Object.assign(dataTablesConfig(), {
      initComplete: function (settings, json) {
        $('.results-loading').hide();
        $('.awards-history-container .dataTables_filter input').attr('title', 'Enter one or more search terms');
        $('.dt-buttons .buttons-csv').attr('class', 'dl-csv usa-button usa-button-primary').attr('title', 'Download as CSV')
        $('.awards-history-container').show();
      },
      data: awards_history,
      columns: [
        {
          title: "COMPANY",
          render: function (data, type, row, meta) {
            if (type === 'display') {
              data = '<a target="_blank" href="{{ site.baseurl }}/awardees/history/details/?company=' + row[7] + '">' + data + '</a>';
            }
            return data;
          }
        },
        { title: "CITY/STATE" },
        { title: "AWARD TITLE" },
        { title: "AWARD AMOUNT" },
        { title: "AWARD DATE" },
        { title: "ABSTRACT" },
        { title: "AWARD ID" },
        { title: "COMPANY URL"},
        { title: "PHASE" }
      ],
      // dom: 'Blfrtip',
      dom: 'flBrtip',
      buttons: [
        {
          extend: 'csv',
          text: 'Download',
          filename: 'nsf_seedfund_award_history',
          exportOptions: {
            columns: [6, 0, 1, 2, 3, 4, 5]
          }
        }
      ]
    });
    
    dt = $('#awards_history').DataTable(config);

    $('.dataTables_filter label')[0].childNodes[0].nodeValue = "Keyword Search";

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
      console.log('PHASE CHANGED', Date.now())
      awards_history_filters[evt.target.id] = evt.target.checked;
      dt.draw();
    });

    $('.awards-history-grid-filters .state-list input[type="checkbox"]').change(function(evt) {
      console.log('STATE CHANGED', Date.now())
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
