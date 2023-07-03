---
---

$(function() {
  //on load go to correct slide
  const queryString = window.location.search;
  const slide = new URLSearchParams(queryString).get('slide');
  if(slide == "qualifications")
    $($('input.desktop-radio')[1]).click();
  else if(slide == "submityourpitch")
    $($('input.desktop-radio')[2]).click();
  else if(slide == "getupdates")
    $($('input.desktop-radio')[3]).click();

  $('#slide1 .next-button').click(function() {
    $($('input.desktop-radio')[1]).click();
  });
  $('#slide2 .next-button').click(function() {
    $($('input.desktop-radio')[2]).click();
  });
  $('#slide3 .next-button').click(function() {
    $($('input.desktop-radio')[3]).click();
  });

  $($('input.desktop-radio')[0]).click(function() {
    $('input.mobile-checkbox').removeAttr('checked');
    $($('input.mobile-checkbox')[0]).click();
    if (window.history.replaceState) {
       //prevents browser from storing history with each change:
       window.history.replaceState({}, null, "?slide=getstarted");
    }
  });
  $($('input.desktop-radio')[1]).click(function() {
    $('input.mobile-checkbox').removeAttr('checked');
    $($('input.mobile-checkbox')[1]).click();
    if (window.history.replaceState) {
       //prevents browser from storing history with each change:
       window.history.replaceState({}, null, "?slide=qualifications");
    }
  });
  $($('input.desktop-radio')[2]).click(function() {
    $('input.mobile-checkbox').removeAttr('checked');
    $($('input.mobile-checkbox')[2]).click();
    if (window.history.replaceState) {
       //prevents browser from storing history with each change:
       window.history.replaceState({}, null, "?slide=submityourpitch");
    }
  });
  $($('input.desktop-radio')[3]).click(function() {
    $('input.mobile-checkbox').removeAttr('checked');
    $($('input.mobile-checkbox')[3]).click();
    if (window.history.replaceState) {
       //prevents browser from storing history with each change:
       window.history.replaceState({}, null, "?slide=getupdates");
    }
  });
  //hides down arrows on scroll
  $(".innerScroll").scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.scrollarrow').fadeOut();
    }
  });
  iFrameResize({ log: true }, '#myIframe');

});

