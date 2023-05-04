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

  $($('input.desktop-radio')[0]).click(function() {
    $('input.mobile-checkbox').removeAttr('checked');
    $($('input.desktop-radio')[0]).click();
  });
  $($('input.desktop-radio')[1]).click(function() {
    $('input.mobile-checkbox').removeAttr('checked');
    $($('input.mobile-checkbox')[1]).click();
  });
  $($('input.desktop-radio')[2]).click(function() {
    $('input.mobile-checkbox').removeAttr('checked');
    $($('input.mobile-checkbox')[2]).click();
  });
  $($('input.desktop-radio')[3]).click(function() {
    $('input.mobile-checkbox').removeAttr('checked');
    $($('input.mobile-checkbox')[3]).click();
  });

  iFrameResize({ log: true }, '#myIframe');
});

