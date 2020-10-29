---
title: COVID-19 Awards
permalink: /covid-awards/
layout: secondary
---
<section class="usa-section">
<div class="usa-content utility-content usa-grid">
<div class="usa-width-one-whole">

<h1>COVID-19 Awards</h1>

<p class="text-medium" markdown="1">
These awards are related to work concerning COVID-19.
</p>

</div>
</div>
</section>

<section class="usa-section background-white">
    <div class="usa-grid">
    <p class="subhead inline-block accordion-number-of-awardees-header">Awardees</p>
    <p class="subhead inline-block accordion-tech-topic-header">Technology topic areas</p>
</div>
  <div class="usa-grid">
    <div class="usa-accordion awardees-details-accordion">
    {% for topic in site.data.tech-topics %}
      {% assign t_topic = topic.programDirector[0].ttopic %}
      {% assign matching_awards = site.data[page.dataset] | uniq | where:'ttopic', t_topic | sort_insensitive:'awardeeName' %}
      {% if matching_awards.size > 0 %}
        <div class="border-bottom">
          <button class="usa-accordion-button" aria-expanded="false" aria-controls="{{ topic.topic | slugify }}">
            <span class="accordion-number-of-awardees">{{ matching_awards | size }}</span>
            <span class="accordion-tech-topic">{{ topic.topic | default: "" }}</span>
          </button>
          <div id="{{ topic.topic | slugify }}" class="usa-accordion-content">
            <ul class="table monospace">
              <li class="table-row table-header">
                <div class="table-row-item subhead">Company</div>
                <div class="table-row-item subhead">Location</div>
                <div class="table-row-item subhead narrow numeric">Award amount</div>
                <div class="table-row-item subhead narrow numeric">Award date</div>
              </li>
              <div>
              {% for matching in matching_awards %}
                <li class="table-row">
                  <div class="table-row-item" data-header="Company">
                    {% assign awardeeSlug = matching.awardeeName | slugify %}
                    <a href="{{ page.details_url | append: awardeeSlug | relative_url }}" alt="{{ matching.awardeeName }}">
                    <span>{{ matching.awardeeName }}</span>
                    </a>
                  </div>
                  <div class="table-row-item" data-header="Location">{{ matching.awardeeStateCode }}</div>
                  <div class="table-row-item narrow numeric font-mono text-small" data-header="Award amount">{{ matching.fundsObligatedAmt | intcomma_dollar }}</div>
                  <div class="table-row-item narrow numeric font-mono text-small" data-header="Award date">{{ matching.date }}</div>
                </li>
              {% endfor %}
              </div>
            </ul>
          </div>
        </div>
      {% endif %}
    {% endfor %}
    </div>
  </div>
</section>
