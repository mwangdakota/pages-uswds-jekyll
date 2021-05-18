---
title: Portfolio
permalink: /portfolio/
featuredCompanies:
layout: secondary
section_image: "/assets/img/bg/bolt.png"
section_image_caption: |
  From lab to market - [Bolt Threads](#) genetically engineered yeast brew silk proteins that can be spun into fibers.
scripts:
- src: /assets/js/shuffle.js
  async: true
---
<head>
<script type="text/javascript"> setTimeout(function(){var a=document.createElement("script"); var b=document.getElementsByTagName("script")[0]; a.src=document.location.protocol+"//script.crazyegg.com/pages/scripts/0041/5508.js?"+Math.floor(new Date().getTime()/3600000); a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1); </script>
</head>

{% assign recent_date = site.data.awards_meta['recent_date'] | date: "%m/%Y" | default: 'DATE' %}

<section class="section-header background-light-neutral">
<div class="usa-section usa-content usa-grid" markdown="1">

# Portfolio
Since 2012, America’s Seed Fund powered by NSF has made nearly 3,400 awards to startups and small businesses. Since 2015, NSF-funded small businesses have had 153 exits and have received $9.1 billion in private investment.* We encourage you to explore this list of assorted companies we’ve funded.   
<span class="text-small" style="font-style:italic;">*Data from CB Insights.</span>

<form onsubmit="allAwards(this.a1.value); return false;" class="awards-search-form" style="margin-bottom: 0rem;">
 {% comment %}
 <input id="current" type="radio" name="awards-search" value="currentAwards">
 <label for="current">Current NSF SBIR/STTR Awards</label>

 <input id="all" type="radio" name="awards-search" value="currentAwards">
 <label for="all">All NSF SBIR/STTR Awards</label>
 {% endcomment %}

    <input type="text" name="a1" id="awards-search" class="awards-search-input" size="20" placeholder="" />
    <label class="text-small" for="awards-search">Search America's Seed Fund awardees</label>
    <input type="submit" class="usa-button usa-button-primary usa-sr-only" value="Search" />
</form>

</div>
</section>
<section class="background-light-neutral" markdown="1">
<div class="usa-section-tight-top usa-section usa-content usa-grid" markdown="1">

**View our current awardees,** who are still completing the research outlined in their proposals and who haven't yet reached the estimated ends of their award terms. [View current Phase I awardees]({{ site.baseurl }}/awardees/phase-1/) or [Current Phase II awardees]({{ site.baseurl }}/awardees/phase-2/).

**Learn about past awardees,** including awardees that have finished their research. [View all awardees]({{ site.baseurl }}/awardees/history/).

<div style="
    background-color:#FFFAC3;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 3rem;
    padding-right:3rem;
    margin-top: 6rem;
    ">
    <a href="../covid-awards-phase-1/">View a list of COVID-19 related awards here.</a>
</div>
</div>

</section>

<section class="background-light-neutral">
<div class="usa-section-tight-top usa-section usa-content usa-grid">
<h2 class="text-large">We fund varied tech sectors.</h2>
<p class="text-medium">Each year, we fund roughly 400 companies across nearly all technology and market sectors. Download a <a href="{{ site.baseurl }}/assets/files/applicants/combined-topics.pdf">searchable PDF</a> of the full list of technology topic areas that also includes descriptions of the subtopics.</p>
  <br>
  <h2 class="subhead text-small">Technology Topic Areas</h2>

  <ul class="flex-list list-tech-topics">
    {% for topic in site.data.tech-topics %}
      <li class="button-arrow-after button-arrow-down">
        <a href="#{{ topic.topic | slugify }}">{{ topic.topic }}</a>
      </li>
    {% endfor %}
  </ul>
</div>
</section>



<section class="section-background-image">
  <div class="usa-grid">
    <div class="usa-width-one-third">
      <div class="caption">{{ page.section_image_caption | liquify | markdownify }}</div>
    </div>
  </div>
</section>

<section class="background-light-neutral">
<div class="usa-section usa-content usa-grid" markdown="1">

<h2 class="subhead text-small">Featured alumni and exits</h2>
{% include featured-companies.html %}



{% include tech-subtopics.html %}
<p style="margin-top:100px; width=150px;" class="text-small">
  Updated: 02/16/2021 
</p>
</div>
</section>
