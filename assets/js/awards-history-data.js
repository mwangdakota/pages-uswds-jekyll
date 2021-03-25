---
permalink: /data/awards-history.json
---
{% assign awards_history = site.data.awards_history | sort: 'AwardDate' | reverse %}[
  {% for award in awards_history %}{
    "AwardID": "{{ award.AwardID }}",
    "Title": "{{ award.Title | replace: "'", "&#39;" | replace: '"', "&#34;" }}",
    "CalendarYear": "{{ award.CalendarYear }}",
    "FiscalYear": "{{ award.FiscalYear }}",
    "ProgramManager": "{{ award.ProgramManager | replace: "'", "&#39;" | replace: '"', "&#34;" }}",
    "Abstract": "{{ award.Abstract | replace: "'", "&#39;" | replace: '"', "&#34;" | replace: '?\', '-' }}",
    "AwardDate": "{{ award.AwardDate }}",
    "StartDate": "{{ award.StartDate }}",
    "EndDate": "{{ award.EndDate }}",
    "ProgramElementCode": "{{ award.ProgramElementCode }}",
    "ProgramElementName": "{{ award.ProgramElementName | replace: "'", "&#39;" | replace: '"', "&#34;" }}",
    "AwardAmount": "{{ award.AwardAmount | usd_pretty }}",
    "PRCCode": "{{ award.PRCCode }}",
    "TopicId": "{{ award.TopicId }}",
    "TopicName": "{{ award.TopicName | replace: "'", "&#39;" | replace: '"', "&#34;" }}",
    "PIFirstName": "{{ award.PIFirstName | replace: "'", "&#39;" | replace: '"', "&#34;" }}",
    "PILastName": "{{ award.PILastName | replace: "'", "&#39;" | replace: '"', "&#34;" }}",
    "PIMiddle": "{{ award.PIMiddle | replace: "'", "&#39;" | replace: '"', "&#34;" }}",
    "PIPhoneNumber": "{{ award.PIPhoneNumber }}",
    "PIEmail": "{{ award.PIEmail }}",
    "InstitutionIdentifer": "{{ award.InstitutionIdentifer }}",
    "InstitutionName": "{{ award.InstitutionName | replace: "'", "&#39;" | replace: '"', "&#34;" }}",
    "StreetAddress": "{{ award.StreetAddress | replace: "'", "&#39;" | replace: '"', "&#34;" }}",
    "CityName": "{{ award.CityName | replace: "'", "&#39;" | replace: '"', "&#34;" }}",
    "StateCode": "{{ award.StateCode }}",
    "ZipCode": "{{ award.ZipCode }}",
    "PitchbookCompanyDescription": "{{ award.PitchbookCompanyDescription | replace: "'", "&#39;" | replace: '"', "&#34;" }}",
    "PitchbookYearFounded": "{{ award.PitchbookYearFounded }}",
    "PitchbookNumberEmployees": "{{ award.PitchbookNumberEmployees }}",
    "PitchbookTotalRaised": "{{ award.PitchbookTotalRaised }}",
    "PitchbookWebsite": "{{ award.PitchbookWebsite }}",
    "CompanyUrl": "{{ award.InstitutionName | slugify }}"
  }{% if forloop.last == false %},{% endif %}
  {% endfor %}
]
