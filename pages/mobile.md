---
title: Slider Testing
permalink: /mobile/
description: 
- For 40 years, America’s Seed Fund has provided funding to help startups transform ideas into marketable products and services.
layout: secondary
css: /assets/css/mobileslider.css
scripts: /assets/js/slider.js
---
<head>
  <script type="text/javascript"> setTimeout(function(){var a=document.createElement("script"); var b=document.getElementsByTagName("script")[0]; a.src=document.location.protocol+"//script.crazyegg.com/pages/scripts/0041/5508.js?"+Math.floor(new Date().getTime()/3600000); a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1); </script>
</head>


<!-- These variables help keep track of the input name and ID-->
<!-- currentTab helps keep track of each individual input-->
<!-- tabControlName is used as a unique identifier for the accordion-->
<section class="slider">
  <ul>
    <li id="slide1">
      <!-- Using radio inputs means only one can be selected at a time-->
      <!-- The ID must be unique so the label will point to the input-->
      <div class="inside-slide">
        <input id="check1" class="mobile-checkbox" type="checkbox"/>
        <label class="mobile-checkbox" for="check1">
          <div>GETTING STARTED</div>
        </label>
        <input class="desktop-radio" id="rad1" type="radio" class="desktop-radio" name="rad" checked="checked"/>
        <label class="desktop-radio" for="rad1">
          <div>GETTING STARTED</div>
        </label>
        <div class="accslide">
          <div class="content">
            <div class="innerScroll" style="background-image: url('{{ site.baseurl }}/assets/img/bg/arable-2c-s-ph.jpg');">
              <div class="image-margin">
                <h1>GETTING</h1><h1>STARTED</h1>
              </div>
              <div class="inner-clip title">
                <h3>GET YOUR HIGH-TECH INNOVATION FUNDED.</h3><br>
                <h3>FOR WHAT'S NEXT.</h3>
              </div>
              <div class="inner-body">
                <div class="inner-centered">
                  The America Seed Fund powered by The National Science Foundation invests up to $2 million in funding for startups that are developing technologies.
                </div>
                <div class="blue-section">
                  <div class="usa-width-one-half padded-block">
                    <h4>WE GOT FUNDED AND SO CAN YOUR STARTUP.</h4>
                    <br>
                    <b>WATCH AWARDEE SUCCESS STORIES</b>
                    <br>
                    <button class="hollow-button">SEE MORE SUCCESS STORIES</button>
                  </div>
                  <div class="usa-width-one-half padded-block">
                    <div class="feature-videos">
                      <div class="feature-video">
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/vS0TuIPoeBs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <p><a href="#">Mango Technologies</a></p>
                        <p>funded 2021</p>
                      </div>
                      <div class="feature-video">
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/Znsa4Deavgg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <p><a href="#">Oregano Builds</a></p>
                        <p>funded 2012</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="next-link">
                <button class="next-button">THE QUALIFICATIONS</button>
              </div>
            </div>
            <div class="altTab">GETTING STARTED</div>
          </div>
        </div>
      </div>
    </li>
    <li id="slide2">
      <!-- Using radio inputs means only one can be selected at a time-->
      <!-- The ID must be unique so the label will point to the input-->
      <div class="inside-slide">
        <input id="check2" class="mobile-checkbox" type="checkbox"/>
        <label class="mobile-checkbox" for="check2">
          <div>QUALIFICATIONS</div>
        </label>
        <input class="desktop-radio"  id="rad2" type="radio" class="desktop-radio" name="rad"/>
        <label class="desktop-radio" for="rad2">
          <div>QUALIFICATIONS</div>
        </label>
        <div class="accslide">
          <div class="content">
            <div class="innerScroll" style="background-image: url('{{ site.baseurl }}/assets/img/bg/altaeros.jpg');">
              <div class="image-margin">
                <h1>THE</h1><h1>QUALIFICATIONS</h1>
              </div>
              <div class="inner-clip title">
                <p><h3>WHAT WE LOOK FOR</h3></p>
              </div>
              <div class="inner-body">
                <div>
                  <div class="usa-width-one-half padded-block">
                    <h4>We help startups navigate the earliest stages of technology translation.</h4>
                  </div>
                  <div class="usa-width-one-half padded-block">
                    <div class="feature-block">
                      <span class="feature-image">
                        <img src="{{ site.baseurl }}/assets/img/globe.svg" alt="Global">
                      </span>
                      <span class="feature-text">
                        <h5>Impact:</h5>
                        Make a difference to people worldwide or revolutionize an industry.
                      </span>
                    </div>
                    <div class="feature-block">
                      <span class="feature-image">
                        <img src="{{ site.baseurl }}/assets/img/lightbulb.svg" alt="Ideas">
                      </span>
                      <span class="feature-text">
                        <h5>Technological Innovation:</h5>
                        You need research and development funding to create new products, services, and other scalable solutions based on fundamental science or engineering. NSF does not fund straightforward engineering or incremental product development tasks.
                      </span>
                    </div>
                    <div class="feature-block">
                      <span class="feature-image">
                        <img src="{{ site.baseurl }}/assets/img/expand.svg" alt="Expansion">
                      </span>
                      <span class="feature-text">
                        <h5>Scale:</h5>
                        If you successfully bring your product or service to market, it could form the foundation for a scalable business and make a large impact in your target market.
                      </span>
                    </div>
                    <div class="feature-block">
                      <span class="feature-image">
                        <img src="{{ site.baseurl }}/assets/img/checkbox.svg" alt="Check">
                      </span>
                      <span class="feature-text">
                        <h5>Market Pull:</h5>
                        You have evidence that your product or service could meet an important, unmet need for your customers.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="blue-section">
                <h4>AM I ELIGIBLE?</h4>
                <b>To be eligible for funding, your company must adhere to the following requirements:</b>
                <ul class="list-content">
                  <li>Must be a small business (fewer than 500 employees) and located in the United States.</li>
                  <li> At least 50% of your company’s equity must be owned by U.S. citizens or permanent residents. NSF does not fund companies that are majority-owned by multiple venture capital firms, private equity firms, or hedge funds, to participate in SBIR and STTR. </li>
                  <li>All funded work, including work done by consultants and contractors, needs to take place in the United States.</li>
                  <li>The project’s principal investigator (tech lead) must be legally employed at least 20 hours a week by the company seeking funding. The PI doesn’t need any advanced degrees.</li> 
                  <li>The principal investigator needs to commit to at least one month (173 hours) of work on a funded project per six months of project duration.</li>
                </ul>
              </div>
              <div class="next-link">
                <button class="next-button">SUBMIT YOUR PROJECT PITCH</button>
              </div>
            </div>
            <div class="altTab">QUALIFICATIONS</div>
          </div>
        </div>
      </div>
    </li>
    <li id="slide3">
      <!-- Using radio inputs means only one can be selected at a time-->
      <!-- The ID must be unique so the label will point to the input-->
      <div class="inside-slide">
        <input id="check3" class="mobile-checkbox" type="checkbox"/>
        <label class="mobile-checkbox" for="check3">
          <div>SUBMIT YOUR PROJECT PITCH</div>
        </label>
        <input class="desktop-radio" id="rad3" type="radio" class="desktop-radio" name="rad" />
        <label class="desktop-radio" for="rad3">
          <div>GETTING STARTED</div>
        </label>
        <div class="accslide">
          <div class="content">
            <div class="innerScroll" style="background-image: url('{{ site.baseurl }}/assets/img/bg/bolt.png');">
              <div class="image-margin">
                <h1>SUBMIT YOUR</h1><h1>PROJECT PITCH</h1>
              </div>
              <div class="inner-clip title">
                <p><h3>YOUR BREAKTHROUGH IS ABOUT </h3><h3>TO HAVE A BREAKTHROUGH</h3></p>
              </div>
              <div class="inner-body">
                <div>
                  <div class="usa-width-one-half padded-block">
                    <p><h4>Here are the four key questions you’ll be asked to answer when submitting your pitch:</h4></p>
                  </div>
                  <div class="usa-width-one-half padded-block">
                    <div class="feature-block">
                      <span class="feature-item item-1">
                        1.
                      </span>
                      <span class="feature-text">
                        <p><h5>The Technology Innovation.</h5></p>
                        (up to 500 words)
                      </span>
                    </div>
                    <div class="feature-block">
                      <span class="feature-item item-2">
                        2.
                      </span>
                      <span class="feature-text">
                        <p><h5>The Technical Objectives and Challenges.</h5></p>
                        (up to 500 words)
                      </span>
                    </div>
                    <div class="feature-block">
                      <span class="feature-item item-3">
                        3.
                      </span>
                      <span class="feature-text">
                        <p><h5>The Market Opportunity.</h5></p>
                        (up to 500 words)
                      </span>
                    </div>
                    <div class="feature-block">
                      <span class="feature-item item-4">
                        4.
                      </span>
                      <span class="feature-text">
                        <p><h5>The Company and Team.</h5></p>
                        (up to 500 words)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="blue-section">
                <h4>ROLLING SUBMISSIONS</h4>
                <h4>+ DEADLINES </h4>
                <div class="content-centered">
                  <b>We accept Project Pitches at any time (24/7) and 365 days a year. Typically, it takes about one month to get an official response from NSF staff.</b>
                  <div><button class="yellow-button">SUBMIT YOUR PROJECT PITCH</button></div>
                </div>
              </div>
              <div class="next-link">
                <button class="next-button">GETTING UPDATES</button>
              </div>
            </div>
            <div class="altTab">SUBMIT YOUR PROJECT PITCH</div>
          </div>
        </div>
      </div>
    </li>
    <li id="slide4">
      <!-- Using radio inputs means only one can be selected at a time-->
      <!-- The ID must be unique so the label will point to the input-->
      <div class="inside-slide">
        <input id="check4" class="mobile-checkbox" type="checkbox"/>
        <label class="mobile-checkbox" for="check4">
          <div>GETTING UPDATES</div>
        </label>
        <input id="rad4" type="radio" class="desktop-radio" name="rad"/>
        <label class="desktop-radio" for="rad4">
          <div>GETTING UPDATES</div>
        </label>
        <div class="accslide">
          <div class="container">
            <div class="innerScroll" style="background-image: url('{{ site.baseurl }}/assets/img/bg/hero-sigray.jpg');">
              <div class="image-margin">
                <h1>GET</h1>
                <h1>UPDATES</h1>
              </div>
              <div class="inner-clip title">
                <p><h3>YOUR BREAKTHROUGH IS ABOUT </h3><h3>TO HAVE A BREAKTHROUGH</h3></p>
              </div>
              <div class="inner-body" id="formContainer">
                <p>
                  <strong>Learn more about NSF Innovation Programs</strong> <br>
                  NSF programs strengthen the innovation ecosystem and transform discoveries into innovative commercial technologies with societal benefits.<br>
                  <br>
                  Please complete the form below to receive emails from NSF. We will send you information about NSF innovation programs, events, highlights and more.
                </p>
                <form action="https://cloud.go2.nsf.gov/NSF_Form_IFrame" method="post" class="form-inline" id="formC">
                  <style type="text/css">
                    form.form p label {
                      color: #000000; 
                    }
                  </style>
                  <p class="form-field first_name pd-text required">
                    <label class="field-label" for="Firstname">First Name:</label>
                    <input type="text" name="Firstname" id="Firstname" value="" class="text" size="30" maxlength="40" onchange="" onfocus="" style=" background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg=='); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
                  </p>
                  <div id="error_for_392062_236360pi_392062_236360" style="display: none;"></div>
                  <p class="form-field last_name pd-text required">
                    <label class="field-label" for="Lastname">Last Name:</label>
                    <input type="text" name="Lastname" id="Lastname" value="" class="text" size="30" maxlength="80" onchange="" onfocus="">
                  </p>
                  <div id="error_for_392062_236362pi_392062_236362" style="display: none;"></div>
                  <p class="form-field email pd-text required">
                    <label class="field-label" for="Email">Email:</label>
                    <input type="text" name="Email" id="Email" value="" class="text" size="30" maxlength="255" onchange="" onfocus="">
                  </p>
                  <div id="error_for_392062_236364pi_392062_236364" style="display: none;"></div>
                  <p class="form-field zip pd-text required">
                    <label class="field-label" for="Zip">Zip Code:</label>
                    <input type="text" name="Zip" id="Zip" value="" class="text" size="30" maxlength="32" onchange="" onfocus="">
                  </p>
                  <div id="error_for_392062_236366pi_392062_236366" style="display: none;"></div>
                  <p class="form-field Persona pd-select required">
                    <label class="" for="Information">Information For:</label>
                    <select name="Information" id="Information" size="4" multiple="multiple" onchange="" style="width:350px;">
                      <option value="Student in associate degree program">Student in associate degree program</option>
                      <option value="Student in bachelor’s degree program">
                        Student in bachelor’s degree program
                      </option>
                      <option value="Student in doctoral or master’s degree program">Student in doctoral or master’s degree program</option>
                      <option value="Post-doctoral fellow">
                        Post-doctoral fellow
                      </option>
                      <option value="Early-career faculty member">
                        Early-career faculty member
                      </option>
                      <option value="Mid-career faculty member">
                        Mid-career faculty member
                      </option>
                      <option value="Tenured or senior faculty member">
                        Tenured or senior faculty member
                      </option>
                    </select>
                  </p>
                  <div id="error_for_392062_236368pi_392062_236368" style="display: none;"></div>
                  <p class="form-field Tech_Bucket pd-select required">
                    <label class="field-label" for="TechArea">Tech Area</label>
                    <select name="TechArea" id="TechArea" class="select" onchange="">
                      <option value="" selected="selected">--select--</option>
                      <option value="Chemistry and Environment">
                        Chemistry and Environment
                      </option>
                      <option value="Electronics, IoT, Robotics">
                        Electronics, IoT, Robotics
                      </option>
                      <option value="Information Technologies">
                        Information Technologies
                      </option>
                      <option value="Learning, Cognition, Social and Economic Sciences">
                        Learning, Cognition, Social and Economic Sciences
                      </option>
                      <option value="Life Sciences">
                        Life Sciences
                      </option>                                                                                                                     
                      <option value="Materials and Manufacturing">
                        Materials and Manufacturing
                      </option>
                      <option value="Photonics and Semiconductors">
                        Photonics and Semiconductors
                      </option>
                      <option value="Other Topics">
                        Other Topics
                      </option>
                    </select>
                  </p>
                  <div id="error_for_392062_236370pi_392062_236370" style="display: none;"></div>
                  <div class="form-field  Reviewer pd-radio">
                    <label class="field-label" for="reviewer">Send me information about serving as a reviewer</label>&nbsp;
                    <div class="form-radio">
                      <input type="checkbox" id="reviewer" name="reviewer" value="true">
                      <span class="value"></span>      
                    </div>                
                  </div> 
                  <div class="form-field  Reviewer pd-radio">
                    <label class="field-label" for="reviewer">Send me information about NSF-funded companies in the news</label>           
                    <div class="form-radio">
                      <input type="checkbox" id="news" name="news" value="true">&nbsp;
                      <span class="value"></span>
                    </div>
                  </div>                
                  <input id="submitted" type="hidden" name="submitted" value="submitted">
                  <div class="submit">
                    <button id="myButton" type="submit">Submit</button>
                  </div>
                </form>
                <p>
                  <em>
                    This email list is managed by the NSF’s Directorate for Technology, Innovation and Partnerships (TIP), which runs programs to help move discoveries out of the lab and into the market, such as America’s Seed Fund powered by NSF (SBIR/STTR) and Innovation Corps (I-Corps).                 
                  </em>
                </p>
                <p><a href="https://beta.nsf.gov/tip/latest">Learn more about these programs by visiting the TIP webpage.</a></p>
              </div>
            </div>
            <div class="altTab">GET UPDATES</div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</section>
