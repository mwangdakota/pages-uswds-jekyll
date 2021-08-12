---
---
{% assign show_pitchbook = site['show']['pitchbook'] %}

if (window.sfPitchBook) {
  console.error('window.sfService has been redefined', Date.now());
} else {
  window.sfPitchBook = {

    dataExists: function(data) {
      if (!data) return false;

      return !!((data.PitchbookCompanyDescription +
        data.PitchbookYearFounded +
        data.PitchbookNumberEmployees +
        data.PitchbookTotalRaised +
        data.PitchbookWebsite).trim().length
      );
    },

    getData: function(data) {
      function val(v, opt) {
        if (!v) return '';

        return (opt && opt.prefix ? opt.prefix : '') +
          (opt && opt.protocol && !v.match(/^https?\:\/\//) ? 'http://' : '') +
          v +
          (opt && opt.suffix ? opt.suffix : '');
      }

      return '' +
        {% if show_pitchbook['company_description'] %}
        '<strong style="font-size:1.6rem;">Company Description</strong><p>' +
        val(data.PitchbookCompanyDescription) + '</p>' +
        {% endif %}

        {% if show_pitchbook['total_raised'] %}
        '<strong style="font-size:1.6rem;">Total Raised (in millions)</strong><p>' +
        val(data.PitchbookTotalRaised, {prefix: '$'}) + '</p>' +
        {% endif %}

        {% if show_pitchbook['website'] %}
        '<strong style="font-size:1.6rem;">Website</strong><p>' +
        '<a href="' + val(data.PitchbookWebsite, {protocol: 'http'}) + '" target="_blank">' +
        val(data.PitchbookWebsite) + '</a></p>' +
        {% endif %}

        {% if show_pitchbook['year_founded'] %}
        '<strong style="font-size:1.6rem;">Year Founded</strong><p' +
        val(data.PitchbookYearFounded) + '</p>' +
        {% endif %}

        {% if show_pitchbook['employee_count'] %}
        '<strong style="font-size:1.6rem;">Number of Employees</strong><p>' +
        val(data.PitchbookNumberEmployees) + '</p>' +
        {% endif %}
        '';
    },

    showData: function(pitch_book_data) {
      return '' +
        '<div class="pitchbook">' +
          (pitch_book_data || '<h3>No data found</h3>') +
        '</div>';
    }
  }
}
