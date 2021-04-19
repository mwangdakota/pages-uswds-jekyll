---
title: How It Works - Understand The Basics
permalink: /apply/understand-basics/
layout: secondary-narrow
---
{% include apply-nav.html %}

<div class="gdd-apply">
  <section class="usa-section two-column-content-block full-bleed-bg">
    <div class="two-column-content-block__col">
      <h2>What we look for</h2>
      <p>Here’s what we look for when determining which companies to fund:</p>
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
            Your product is based on unproven technology that needs further testing (and funding for that testing).
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
      <p>We fund research in a multitude of different technology topic areas. From Advanced manufacturing to environmental technologies to semiconductors, we invest in them all. Regardless of the technology area your company current occupies, if your company is a good fit we want to invest.</p>
      <p>To view all the topic areas we invest in, <a href="#">click here and browse our portfolio</a>.</p>
      <p>If you’re interested in seeing the work our current awaredees are doing, view our current <a href="#">phase 1 awardees</a> or current <a href="#">phase II awardees</a>.</p>
    </div>
  </section>

  <h2>Eligibility</h2>

  <ul>
    <li>Your company must be a small business (fewer than 500 employees) located in the United States.</li>
    <li>At least 50% of your company’s equity must be owned by U.S. citizens or permanent residents. NSF does not permit companies that are majority-owned by multiple venture capital firms, private equity firms, or hedge funds, to participate in SBIR and STTR.</li>
    <li>All funded work needs to take place in the United States (including work done by consultants and contractors).</li>
    <li>The project’s principal investigator (tech lead) must be legally employed at least 20 hours a week by the company seeking funding. The PI doesn’t need any advanced degrees.</li>
    <li>The principal investigator needs to commit to at least one month (173 hours) of work on a funded project per six months of project duration.</li>
  </ul>

  <p>For more detailed information, check out the <a href="https://www.sbir.gov/faqs/eligibility-requirements">Eligibility Guide</a>.</p>

  <section class="usa-section full-bleed-bg">
    <h2>Technology topic areas</h2>

    <p>This section can reiterate very clearly how you a company can apply without having one of these areas - these are just a starting point. Review this list of technology topic areas (sectors we fund) to see which best aligns with your company.</p>

    <div class="topic-grid">{% for topic in site.data['tech-topics'] %}
      <a href="{{ site.baseurl }}{{ topic.permalink }}">
        <div class="topic-grid__name">{{ topic.topic }}</div>
        <div class="topic-grid__abbr">{{ topic.topic_code }}</div>
      </a>
    {% endfor %}</div>
  </section>

  <h2>Project examples</h2>

  <div class="project-cards">{% for project in site.data.project_examples %}{% assign url = project.url | replace: 'site.baseurl', site.baseurl %}
    <div class="project-cards__single project-cards__single--bg" {% if project.img %}style="background-image: url('{{ site.baseurl }}{{ project.img }}');"{% endif %}>
      <div class="project-cards__title">
        <h3>{{ project.title }}</h3>
        <p class="project-cards__company">{{ project.company }}</p>
      </div>
      <div class="project-cards__desc">
        <p>{{ project.description }}</p>
        <p><a href="{{ url }}">Learn more</a></p>
      </div>
    </div>
  {% endfor %}</div>

  <p>For more case studies and current companies please visit our <a href="{{ site.baseurl }}/portfolio/">Portfolio</a>.</p>

  <p>Get to know our awardees better — we’ve got <a href="{{ site.baseurl }}/showcase/">video profiles of startups and small businesses that have received NSF funding</a>.</p>

  <section class="usa-section full-bleed-bg">
    <h2>Additional resources</h2>

    <p>In case the user has more questions or needs additional support the following pages can help them:</p>

    <p><b>Events</b>
      <br>Visit our <a href="{{ site.baseurl }}/events/">events page</a> to see our virtual office hours to learn about the application process.</p>

    <p><b>Program basics</b>
      <br>Check out our <a href="https://www.research.gov/common/attachment/Desktop/AcctMgmtSIDVideo3.html">video tutorial</a>.</p>

    <p><b>FAQ</b>
      <br>Have lingering questions? <a href="https://www.nsf.gov/pubs/2021/nsf21060/nsf21060.jsp">Visit our FAQ</a>, which covers the pre-application process to post-award reporting (and everything in between).</p>

    <div class="step-banner">
      <a class="step-banner__content" href="{{ site.baseurl }}/apply/project-pitch/">
        <h2>Step 2: Project pitch</h2>
        <p>After you’ve understood our eligibility guidelines and feel ready to apply, please visit our project pitch guide.</p>
      </a>
    </div>
  </section>
</div>
