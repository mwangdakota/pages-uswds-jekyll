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
    urlParams.searchParams.set('page', "GetStarted");
  });
  $($('input.desktop-radio')[1]).click(function() {
    $('input.mobile-checkbox').removeAttr('checked');
    $($('input.mobile-checkbox')[1]).click();
    urlParams.searchParams.set('page', "Qualifications");
  });
  $($('input.desktop-radio')[2]).click(function() {
    $('input.mobile-checkbox').removeAttr('checked');
    $($('input.mobile-checkbox')[2]).click();
    urlParams.searchParams.set('page', "Submit");
  });
  $($('input.desktop-radio')[3]).click(function() {
    $('input.mobile-checkbox').removeAttr('checked');
    $($('input.mobile-checkbox')[3]).click();
    urlParams.searchParams.set('page', "GetUpdates");
  });
  //hides down arrows on scroll
  $(".innerScroll").scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.scrollarrow').fadeOut();
    }
  });
  iFrameResize({ log: true }, '#myIframe');

});

