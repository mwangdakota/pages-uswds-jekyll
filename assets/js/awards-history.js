---
---

// Year filter
$.fn.dataTable.ext.search.push(
  function (settings, data, dataIndex) {
    // if 'All' return true, else return true if year matches active link year
    const activeYear = $('.awards-history-year-filters .active').text();
    const year = data[4].split('/')[2];
    if (activeYear === 'All') {
      return true;
    } else {
      return activeYear == year;
    }
  }
);

$(document).ready(function () {
  let dt;

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
        award.CompanyUrl
      ];
    })

    return Promise.resolve(awards_history);

  }).then(function (awards_history) {
    var config = Object.assign(dataTablesConfig(), {
      initComplete: function (settings, json) {
        $('.results-loading').hide();
        $('.awards-history-container .dataTables_filter input').attr('title', 'Enter one or more search terms');
        $('.dt-buttons .buttons-csv').attr('title', 'Download as CSV')
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
        { title: "COMPANY URL"}
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
      $('.awards-history-year-filters button').removeClass('active');
      target.addClass('active');
      if (target.text() !== 'All') {
        $('.dt-buttons').show();
        $('.awards-history-grid-view').hide();
      } else {
        $('.dt-buttons').hide();
        $('.awards-history-grid-view').css('display', 'inline-block');
      }
      dt.draw();
    });

  });

});
