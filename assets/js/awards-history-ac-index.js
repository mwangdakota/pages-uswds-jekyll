---
permalink: /data/awards-history-ac-index.json
---
[{% for search_token in site.data.awards_history_ac_index %}
  "{{ search_token }}"{% if forloop.last == false %},{% endif %}{% endfor %}
]
