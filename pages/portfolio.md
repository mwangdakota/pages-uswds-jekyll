---
title: Portfolio
permalink: /portfolio/
layout: secondary
css: /assets/css/portfolio.css
scripts: /assets/js/tooltipposition.js 
---
<script type="text/javascript"> setTimeout(function(){var a=document.createElement("script"); var b=document.getElementsByTagName("script")[0]; a.src=document.location.protocol+"//script.crazyegg.com/pages/scripts/0041/5508.js?"+Math.floor(new Date().getTime()/3600000); a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);</script>

<section class="section-header full-bleed-bg--blue">
  <div class="usa-section usa-content usa-grid">
    <h1 id="portfolio">Portfolio</h1>
    <p>
      NSF-funded startups and small businesses saw around 300 exits and more than $20 billion in private investments during fiscal years 2016 to 2022.
      <span class="text-small" style="font-style:italic;">*</span>
    </p>
  </div>
</section>

<section class="full-bleed-bg">
  <div class="usa-section usa-content usa-grid">
    <h2>We fund almost all areas of technology</h2>
    <p class="text-medium">Between fiscal years 2016 and 2020, America’s Seed Fund powered by NSF made 2,200+ awards to startups and small businesses. Each year, we fund roughly 400 companies across nearly all technology areas and market sectors (with the exception of clinical trials and schedule I controlled substances). Select a topic area below to read more about the topic, see featured <b>Phase I and Phase II success stories</b>, and <b>find program director information</b>.</p>
    <p>Browse lists of our active Phase I and Phase II awardees, who are still completing the research outlined in their proposals, view a list of awards to combat COVID-19, and see all of the awards we've made over the last 10 years.</p>
    <p>
      <a href="{{ site.baseurl }}/awardees/phase-1/" class="usa-button usa-button-primary">ACTIVE PHASE I AWARDEES</a>
      <a href="{{ site.baseurl }}/awardees/phase-2/" class="usa-button usa-button-primary">ACTIVE PHASE II AWARDEES</a>
      <a href="{{ site.baseurl }}/covid-awards-phase-1/" class="usa-button usa-button-primary">COVID-19 RELATED AWARDS</a>
      <a href="{{ site.baseurl }}/awardees/history/" class="usa-button usa-button-secondary">VIEW ALL AWARDEES</a>
    </p>
    <div class="topic-grid">{% for topic in site.data.tech-topics %}
      <div class="topic-container">
        <a href="{{ site.baseurl }}{{ topic.permalink }}">
          <div class="topic-grid__name">{{ topic.topic | split: " (" | first }}</div>
          <div class="topic-grid__abbr">{{ topic.topic_code | upcase }}</div>
        </a>
        <div class="topic-grid-sub-hide">
          <strong>{{ topic.topic | split: " (" | first }}: Sub-Topics</strong>
          <ul>
            {% for subtopic in topic.subtopics %}
            <li>{{ subtopic }}</li>
            {% endfor %}
          </ul>
        </div>
      </div>
    {% endfor %}</div>
    
    <p>Download a <a href="{{ site.baseurl }}/assets/files/applicants/combined-topics.pdf">searchable PDF</a> of the full list of technology topic areas that also includes descriptions of the subtopics.</p>
  </div>
</section>

<section class="full-bleed-bg--blue three-column-grid">
  <div class="usa-section usa-content usa-grid">
    <h2>Featured Companies</h2>

    <p>We’re not interested in innovation for innovation’s sake — we back technologies that promote the social good. View a few of our many success stories.</p>

    <div class="three-column-grid__columns">
      <div class="usa-width-one-third">
        <iframe srcdoc="
              <style>
                  body, .full {
                      width: 100%;
                      height: 100%;
                      margin: 0;
                      position: absolute;
                      display: flex;
                      justify-content: center;
                      object-fit: cover;
                  }
              </style>
              <a
                  href='https://www.youtube.com/embed/wuXqAjPGldE?autoplay=1'
                  class='full'
              >
                  <img
                      src='https://vumbnail.com/wuXqAjPGldE.jpg'
                      class='full'
                  />
                  <svg
                      version='1.1'
                      viewBox='0 0 68 48'
                      width='68px'
                      style='position: relative;'
                  >
                      <path d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z' fill='#f00'></path>
                      <path d='M 45,24 27,14 27,34' fill='#fff'></path>
                  </svg>
              </a>
            "
             sandbox="allow-same-origin allow-scripts" title="New engine tech allows diesel engines to run on any fuel - ClearFlame Engine Technologies" width="100%" height="150" src="https://www.youtube.com/embed/wuXqAjPGldE?modestbranding=1&showinfo=0&fs=1" frameborder="0" allowfullscreen></iframe>

        <h3 class="three-column-grid__title">New engine tech allows diesel engines to run on any fuel</h3>
        <p>
           <span class="three-column-grid__company"><a href="https://www.clearflameengines.com/" target="_blank">ClearFlame Engine Technologies</a>.</span>
       </p>
      </div>
      <div class="usa-width-one-third">
        <iframe  srcdoc="
              <style>
                  body, .full {
                      width: 100%;
                      height: 100%;
                      margin: 0;
                      position: absolute;
                      display: flex;
                      justify-content: center;
                      object-fit: cover;
                  }
              </style>
              <a
                  href='https://www.youtube.com/embed/mKWCoHlInZg?autoplay=1'
                  class='full'
              >
                  <img
                      src='https://vumbnail.com/mKWCoHlInZg.jpg'
                      class='full'
                  />
                  <svg
                      version='1.1'
                      viewBox='0 0 68 48'
                      width='68px'
                      style='position: relative;'
                  >
                      <path d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z' fill='#f00'></path>
                      <path d='M 45,24 27,14 27,34' fill='#fff'></path>
                  </svg>
              </a>
            "
            sandbox="allow-same-origin allow-scripts" title="Engineering bacteria to treat skin disease" width="100%" height="150" src="https://www.youtube.com/embed/mKWCoHlInZg?modestbranding=1&showinfo=0&fs=1" frameborder="0" allowfullscreen=""></iframe>

        <h3 class="three-column-grid__title">Engineering bacteria to treat skin disease</h3>
        <p>
          <span class="three-column-grid__company"><a href="https://azitrainc.com/" target="_blank">Azitra</a>.</span>
          <br><a href="#" class="three-column-grid__cta"></a>

        </p>
      </div>
      <div class="usa-width-one-third">
        <iframe srcdoc="
              <style>
                  body, .full {
                      width: 100%;
                      height: 100%;
                      margin: 0;
                      position: absolute;
                      display: flex;
                      justify-content: center;
                      object-fit: cover;
                  }
              </style>
              <a
                  href='https://www.youtube.com/embed/RcPFQJorwpc?autoplay=1'
                  class='full'
              >
                  <img
                      src='https://vumbnail.com/RcPFQJorwpc.jpg'
                      class='full'
                  />
                  <svg
                      version='1.1'
                      viewBox='0 0 68 48'
                      width='68px'
                      style='position: relative;'
                  >
                      <path d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z' fill='#f00'></path>
                      <path d='M 45,24 27,14 27,34' fill='#fff'></path>
                  </svg>
              </a>
            "
             sandbox="allow-same-origin allow-scripts" title="Shape-shifting robots" width="100%" height="150" src="https://www.youtube.com/embed/RcPFQJorwpc?modestbranding=1&showinfo=0&fs=1" frameborder="0" allowfullscreen=""></iframe>

        <h3 class="three-column-grid__title">Squishy Robotics’ shape-shifting robots provide real-time data in disasters</h3>
        <p>
          <span class="three-column-grid__company"><a href="https://squishy-robotics.com" target="_blank">Squishy Robotics</a>.</span>
        </p>
      </div>
    </div>
  </div>
</section>

<section class="full-bleed-bg--blue">
  <div class="usa-section usa-content usa-grid" style="padding-bottom:3rem">
    <h3>More</h3>
    {% include featured-companies.html %}
  </div>
  <div class="text-medium" style="font-style:italic;padding-bottom:6rem">
    <p style="margin:0 auto">
      (*These figures were pulled from Pitchbook from 10/01/2015 to 09/30/2022<br>
      and include companies that received NSF funding prior to 2016.)
    </p>
  </div>
</section>

