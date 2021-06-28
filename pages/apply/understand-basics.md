---
title: How It Works - The Basics
permalink: /apply/understand-basics/
layout: secondary-narrow
page-class: gdd-apply
---
{% include apply-nav.html %}
<section class="usa-section two-column-content-block full-bleed-bg">
  <div class="two-column-content-block__col">
    <h2>What we look for</h2>
    <p>Here’s what we look for when determining which startups to fund:</p>
    <ul class="two-column-content-block__list">
      <li>
        <img src="{{ site.baseurl }}/assets/img/icons/icon-impact.svg" alt="Impact">
        <span class="two-column-content-block__list-content">
          <h3 class="two-column-content-block__list-title">Impact</h3>
          Your innovation could make a difference to people worldwide or revolutionize an industry.
        </span>
      </li>
      <li>
        <img src="{{ site.baseurl }}/assets/img/icons/icon-innovation.svg" alt="Innovation" class="two-column-content-block__icon-wide">
        <span class="two-column-content-block__list-content">
          <h3 class="two-column-content-block__list-title">Technological Innovation</h3>
          You need research and development funding to create new products, services, and other scalable solutions based on fundamental science or engineering. NSF does not fund straightforward engineering or incremental product development tasks.
        </span>
      </li>
      <li>
        <img src="{{ site.baseurl }}/assets/img/icons/icon-market-pull.svg" alt="Market Pull">
        <span class="two-column-content-block__list-content">
          <h3 class="two-column-content-block__list-title">Market Pull</h3>
          You have evidence that your product or service could meet an important, unmet need for your customers.
        </span>
      </li>
      <li>
        <img src="{{ site.baseurl }}/assets/img/icons/icon-scale.svg" alt="Scale">
        <span class="two-column-content-block__list-content">
          <h3 class="two-column-content-block__list-title">Scale</h3>
          If you successfully bring your product or service to market, it could form the foundation for a scalable business and make a large impact in your target market.
        </span>
      </li>
    </ul>
  </div>
  <div class="two-column-content-block__col">
    <h2>What we fund</h2>
    <p>We help startups navigate the earliest stages of technology translation, investing roughly $200 million annually in approximately 400 startups. Each startup can receive up to $2 million to support translational research and development. From advanced manufacturing to artificial intelligence to biological technologies to environmental technologies, we fund nearly all areas of technology.</p>
    <p><a href="https://seedfund.nsf.gov/awardees/history/" class="usa-button usa-button-secondary">Search awards we've made over the last 10 years </a></p>
    <p>We also encourage you to browse a list of our current <a href="#">Phase 1 awardees</a> or current <a href="#">Phase II awardees</a>.</p>
  </div>
</section>

<section class="usa-section full-bleed-bg--lightblue">
  <h2>Eligibility</h2>

  <ul>
    <li>Your company must be a small business (fewer than 500 employees) located in the United States.</li>
    <li>At least 50% of your company’s equity must be owned by U.S. citizens or permanent residents. NSF does not fund companies that are majority-owned by multiple venture capital firms, private equity firms, or hedge funds, to participate in SBIR and STTR.</li>
    <li>All funded work, including work done by consultants and contractors, needs to take place in the United States.</li>
    <li>The project’s principal investigator (tech lead) must be legally employed at least 20 hours a week by the company seeking funding. The PI doesn’t need any advanced degrees.</li>
    <li>The principal investigator needs to commit to at least one month (173 hours) of work on a funded project per six months of project duration.</li>
  </ul>

  <p>For more detailed information, check out the <a href="https://www.sbir.gov/faqs/eligibility-requirements">Eligibility Guide</a>.</p>
</section>

<section class="usa-section full-bleed-bg">
  <h2>Technology topic areas</h2>

  <p>We fund startups doing work across nearly all technology and market sectors (with the exception of clinical trials and schedule I controlled substances). Review this nonexhaustive list of technology topic areas. We do not require your project to fit perfectly into a topic area. If your company is doing research and development of deep technology with potential commercial and societal impact, chances are we want to fund it.</p>

  <div class="topic-grid">{% for topic in site.data['tech-topics'] %}
    <a href="{{ site.baseurl }}{{ topic.permalink }}">
      <div class="topic-grid__name">{{ topic.topic }}</div>
      <div class="topic-grid__abbr">{{ topic.topic_code }}</div>
    </a>
  {% endfor %}</div>
</section>

<section class="usa-section full-bleed-bg">
  <h2>Additional resources</h2>

  <p>If you have more questions, check out the following resources for potential applicants:</p>

  <p><b>Events</b>
    <br>Visit our <a href="{{ site.baseurl }}/events/">events page</a> to see join our virtual office hours and learn about the application process.</p>

  <p><b>Program basics</b>
    <br>Check out our <a href="https://www.youtube.com/watch?v=ckitTDdcWbU">recorded intro webinar.</a>
  </p>

  <p><b>FAQ</b>
    <br>Have lingering questions? <a href="https://www.nsf.gov/pubs/2021/nsf21060/nsf21060.jsp">Visit our FAQ</a>, which cover the pre-application process to post-award reporting (and everything in between).</p>
   <p><b>Showcase videos</b>
    <p>Get to know our awardees better — we’ve got <a href="{{ site.baseurl }}/showcase/">video profiles of startups and small businesses that have received NSF funding</a>.</p>
  <div class="step-banner">
    <a class="step-banner__content" href="{{ site.baseurl }}/apply/project-pitch/">
      <h2>Step 2: Project Pitch</h2>
      <p>Once you feel like you understand our eligibility guidelines and are ready to apply, please visit our Project Pitch guide.</p>
    </a>
  </div>
