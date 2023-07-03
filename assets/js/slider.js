---
---

$(function() {
  $('#slide1 .next-button').click(function() {
    $($('input.desktop-radio')[1]).click();
  });
  $('#slide2 .next-button').click(function() {
    $($('input.desktop-radio')[2]).click();
  });
  $('#slide3 .next-button').click(function() {
    $($('input.desktop-radio')[3]).click();
  });

  const urlParams = new getAllUrlParams(window.location.search);

  $($('input.desktop-radio')[0]).click(function() {
    $('input.mobile-checkbox').removeAttr('checked');
    $($('input.mobile-checkbox')[0]).click();
    if (window.history.replaceState) {
       //prevents browser from storing history with each change:
       window.history.replaceState({}, null, "?page=getstarted");
    }
  });
  $($('input.desktop-radio')[1]).click(function() {
    $('input.mobile-checkbox').removeAttr('checked');
    $($('input.mobile-checkbox')[1]).click();
    if (window.history.replaceState) {
       //prevents browser from storing history with each change:
       window.history.replaceState({}, null, "?page=qualifications");
    }
  });
  $($('input.desktop-radio')[2]).click(function() {
       console.log("buttoncheck");
    $('input.mobile-checkbox').removeAttr('checked');
    $($('input.mobile-checkbox')[2]).click();
    if (window.history.replaceState) {
       //prevents browser from storing history with each change:
       window.history.replaceState({}, null, "?page=submityourpitch");
    }
  });
  $($('input.desktop-radio')[3]).click(function() {
    $('input.mobile-checkbox').removeAttr('checked');
    $($('input.mobile-checkbox')[3]).click();
    if (window.history.replaceState) {
       //prevents browser from storing history with each change:
       window.history.replaceState({}, null, "?page=getupdates");
       console.log("replace");
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

