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
        award.AwardID
      ];
    })

    return Promise.resolve(awards_history);

  }).then(function (awards_history) {

    dt = $('#awards_history').DataTable(Object.assign(dataTablesConfig(), {
      initComplete: function (settings, json) {
        $('.results-loading').hide();
        $('.awards-history-container').show();
      },
      data: awards_history,
      columns: [
        {
          title: "COMPANY",
          render: function (data, type, row, meta) {
            if (type === 'display') {
              data = '<a target="_blank" href="{{ site.baseurl }}/awardees/history/details/?award_id=' + row[6] + '">' + data + '</a>';
            }
            return data;
          }
        },
        { title: "CITY/STATE" },
        { title: "AWARD TITLE" },
        { title: "AWARD AMOUNT" },
        { title: "AWARD DATE" },
        { title: "ABSTRACT" },
        { title: "AWARD ID" }
      ]
    }));

    $('.dataTables_filter label')[0].childNodes[0].nodeValue = "Keyword Search";

    $('.awards-history-year-filters button').click(function (evt) {
      const target = $(evt.target);
      $('.awards-history-year-filters button').removeClass('active');
      target.addClass('active');
      if (target.text() !== 'All') {
        $('.awards-history-year-header').text(target.text() + ' Awardees').show();
        $('.awards-history-year-download').show();
        $('.awards-history-grid-view').hide();
      } else {
        $('.awards-history-year-header').hide();
        $('.awards-history-year-download').hide();
        $('.awards-history-grid-view').show();
      }
      dt.draw();
    });

  });

});
