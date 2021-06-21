---
---
{% assign show_pitchbook = site['show']['pitchbook'] %}

if (window.sfPitchBook) {
  console.error('window.sfService has been redefined', Date.now());
} else {
  window.sfPitchBook = {

    dataExists: function(data) {
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
        '<strong style="font-size:1.6rem;">Company Description</strong><br>' +
        val(data.PitchbookCompanyDescription) + '<br><br>' +
        {% endif %}

        {% if show_pitchbook['total_raised'] %}
        '<strong style="font-size:1.6rem;">Total Raised (in millions)</strong><br>' +
        val(data.PitchbookTotalRaised, {prefix: '$'}) + '<br><br>' +
        {% endif %}

        {% if show_pitchbook['website'] %}
        '<strong style="font-size:1.6rem;">Website</strong><br>' +
        '<a href="' + val(data.PitchbookWebsite, {protocol: 'http'}) + '" target="_blank">' +
        val(data.PitchbookWebsite) + '</a><br><br>' +
        {% endif %}

        {% if show_pitchbook['year_founded'] %}
        '<strong style="font-size:1.6rem;">Year Founded</strong><br>' +
        val(data.PitchbookYearFounded) + '<br><br>' +
        {% endif %}

        {% if show_pitchbook['employee_count'] %}
        '<strong style="font-size:1.6rem;">Number of Employees</strong><br>' +
        val(data.PitchbookNumberEmployees) + '<br><br>' +
        {% endif %}
        '';
    },

    showData: function(pitch_book_data) {
      return '' +
        '<div class="pitchbook">' +
          '<p class="pitchbook-source" style="text-align:right;font-size:1.4rem;"><em>This information has been provided by</em>' +
          '<img width="150px"style="margin-left:5px;"src="{{ site.baseurl }}/assets/img/pitch-book-logo.png" /></p><br>' +

          (pitch_book_data || '<h3>No data found</h3>') +

          '<span class="pitchbook-disclaimer" style="font-size:1.2rem;"><em>Disclaimer: Company Data presented by NSF: (1) is the property of and proprietary to PitchBook Data, Inc.; (2) may not be copied, reproduced, or distributed; and (3) is not warranted to be accurate, complete nor timely. Neither PitchBook Data nor the National Science Foundation are responsible for any damages or losses arising from any use of such Data.</em></span>' +
        '</div>';
    }
  }
}
