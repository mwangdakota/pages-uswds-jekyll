---
---

$(function() {
  console.log('slider loaded')
  $('#slide1 .next-button').click(function() {
    $($('input.desktop-radio')[1]).click();
  });
  $('#slide2 .next-button').click(function() {
    $($('input.desktop-radio')[2]).click();
  });
  $('#slide3 .next-button').click(function() {
    $($('input.desktop-radio')[3]).click();
  });
});

