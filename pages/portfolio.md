---
title: Portfolio
permalink: /portfolio/
layout: secondary
---
<script type="text/javascript"> setTimeout(function(){var a=document.createElement("script"); var b=document.getElementsByTagName("script")[0]; a.src=document.location.protocol+"//script.crazyegg.com/pages/scripts/0041/5508.js?"+Math.floor(new Date().getTime()/3600000); a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);</script>

<section class="section-header full-bleed-bg--blue">
  <div class="usa-section usa-content usa-grid">
    <h1 id="portfolio">Portfolio</h1>
    <p>
      Since 2012, America’s Seed Fund powered by NSF has made nearly 3,400 awards to startups and small businesses. Since 2015, NSF-funded small businesses have had 153 exits and have received $9.1 billion in private investment.* We encourage you to explore this list of assorted companies we’ve funded.<br>
      <span class="text-small" style="font-style:italic;">*Data from CB Insights.</span>
    </p>
  </div>
</section>

<section class="full-bleed-bg">
  <div class="usa-section usa-content usa-grid">
    <h2>We fund almost all areas of technology</h2>
    <p class="text-medium">Each year, we fund roughly 400 companies across nearly all technology areas and market sectors (with the exception of clinical trials and schedule I controlled substances). Select a topic area below to read more about the topic, see featured <b>Phase I and Phase II success stories</b>, and <b>find program director information</b>.</p>

    <p>Browse lists of our current Phase I and Phase II awardees, who are still completing the research outlined in their proposals, view a list of awards to combat COVID-19, and see all of the awards we've made over the last 10 years.</p>

    <p>
      <a href="{{ site.baseurl }}/awardees/phase-1/" class="usa-button usa-button-primary">CURRENT PHASE I AWARDEES</a>
      <a href="{{ site.baseurl }}/awardees/phase-2/" class="usa-button usa-button-primary">CURRENT PHASE II AWARDEES</a>
      <a href="{{ site.baseurl }}/covid-awards-phase-1/" class="usa-button usa-button-primary">COVID-19 RELATED AWARDS</a>
      <a href="{{ site.baseurl }}/awardees/history/" class="usa-button usa-button-secondary">VIEW ALL AWARDEES</a>
    </p>

    <div class="topic-grid">{% for topic in site.data.tech-topics %}
      <a href="{{ site.baseurl }}{{ topic.permalink }}">
        <div class="topic-grid__name">{{ topic.topic | split: " (" | first }}</div>
        <div class="topic-grid__abbr">{{ topic.topic_code | upcase }}</div>
      </a>
    {% endfor %}</div>

    <p>Download a <a href="{{ site.baseurl }}/assets/files/applicants/combined-topics-01-2020.pdf">searchable PDF</a> of the full list of technology topic areas that also includes descriptions of the subtopics.</p>
  </div>
</section>

<section class="full-bleed-bg--blue three-column-grid">
  <div class="usa-section usa-content usa-grid">
    <h2>Featured Companies</h2>

    <p>We’re not interested in innovation for innovation’s sake — we back technologies that promote the social good. View a few of our many success stories.</p>

    <div class="three-column-grid__columns">
      <div class="usa-width-one-third">
        <iframe sandbox="allow-same-origin allow-scripts" title="New engine tech allows diesel engines to run on any fuel - ClearFlame Engine Technologies" width="100%" height="150" src="https://www.youtube.com/embed/wuXqAjPGldE?modestbranding=1&showinfo=0&fs=1" frameborder="0" allowfullscreen></iframe>

        <h3 class="three-column-grid__title">New engine tech allows diesel engines to run on any fuel</h3>
        <p>
           <span class="three-column-grid__company"><a href="https://www.clearflameengines.com/">ClearFlame Engine Technologies</a>.</span>
       </p>
      </div>
      <div class="usa-width-one-third">
        <iframe sandbox="allow-same-origin allow-scripts" title="Engineering bacteria to treat skin disease" width="100%" height="150" src="https://www.youtube.com/embed/mKWCoHlInZg?modestbranding=1&showinfo=0&fs=1" frameborder="0" allowfullscreen=""></iframe>

        <h3 class="three-column-grid__title">Engineering bacteria to treat skin disease</h3>
        <p>
          <span class="three-column-grid__company"><a href="https://azitrainc.com/">Azitra</a>.</span>
          <br><a href="#" class="three-column-grid__cta"></a>
          
        </p>
      </div>
      <div class="usa-width-one-third">
        <iframe sandbox="allow-same-origin allow-scripts" title="Shape-shifting robots" width="100%" height="150" src="https://www.youtube.com/embed/RcPFQJorwpc?modestbranding=1&showinfo=0&fs=1" frameborder="0" allowfullscreen=""></iframe>

        <h3 class="three-column-grid__title">Squishy Robotics’ shape-shifting robots provide real-time data in disasters</h3>
        <p>
          <span class="three-column-grid__company"><a href="https://squishy-robotics.com">Squishy Robotics</a>.</span>
        </p>
      </div>
    </div>
  </div>
</section>

<section class="full-bleed-bg--blue">
  <div class="usa-section usa-content usa-grid">
    <h3>More</h3>
    {% include featured-companies.html %}
  </div>
</section>
