---
title: Apply
permalink: /apply/
layout: secondary-narrow
timeline:
  - title: anytime before<br> the deadline 
    steps:
      - step-1
      - step-2
      - step-3
      - step-4
  - title: 90 days before<br> the deadline
    description: Call for proposals (solicitation) released {{ site.solicitation_released }}.
    inactive_description: Call for proposals (solicitation) released.
    steps:
      - step-5
  - title: 60 days before<br> the deadline
    steps:
      - step-6
      - step-7
  - title: "Deadline"
    description: "Applications due by 5:00 p.m. in your local time zone."
    inactive_description: "Applications due by 5:00 p.m. in your local time zone."
    note: "Note: Applications due by 5:00 p.m. in your local time zone. Your time zone is based on your company's address as you listed it in your application."
    inactive_note: "Note: Your time zone is based on your company's address as you listed it in your application."
    deadline: true
  - title: 1-3 months after<br> the deadline
    description: Applications undergo panel and merit reviews.
    inactive_description: Applications undergo panel and merit reviews.
    inactive_note:
  - title: 4-6 months after<br> the deadline
    description: We'll notify you whether your proposal is accepted or declined.
    inactive_description: We'll notify you whether your proposal is accepted or declined.
    inactive_note:
  - title: 5-6 months after<br> the deadline
    description: If your proposal is accepted, you'll receive funding of up to $225,000.
    inactive_description: If your proposal is accepted, you'll receive funding of up to $225,000.
    inactive_note:
---
<head>
<script type="text/javascript">
setTimeout(function(){var a=document.createElement("script");
var b=document.getElementsByTagName("script")[0];
a.src=document.location.protocol+"//script.crazyegg.com/pages/scripts/0041/5508.js?"+Math.floor(new Date().getTime()/3600000);
a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);
</script>
</head>
<h1 class="page-title">How to apply</h1>

<p class="text-medium">
Learn about our recommended Phase I application timeline, how to prepare your proposal, and what to expect once you submit.
</p>

<ol class="timeline">
{% assign step_counter = 1 %}
{% for milestone in page.timeline %}
  <li class="timeline-step{% if milestone.deadline %} timeline-step-deadline{% endif %}">
      {% assign milestone_description = milestone.description %}
      {% assign milestone_note = milestone.note %}
    

    <span class="time">{{ milestone.title | liquify }}</span>
    <span class="time-description">
      {{ milestone_description | liquify }}
      {% if milestone_note %}<small>{{ milestone_note }}</small>{% endif %}
    </span>

    {% if milestone.steps %}
    <ol class="usa-accordion">
      {% for step in milestone.steps %}
      {% assign timeline_item_ = site.timeline | where:"slug", step %}
      <li value="{{ step_counter }}" class="step {{ step }}">
        {% include components/accordion-item.html slug=step %}
      </li>
      {% assign step_counter = step_counter | plus: 1 %}
      {% endfor %}
    </ol>
  </li>
{% endfor %}
</ol>
