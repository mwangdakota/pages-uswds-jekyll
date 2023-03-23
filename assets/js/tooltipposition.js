$(function() {

$(".page-portfolio .topic-grid a").hover(function () {
    console.log("hover happens");
    var elems = $(this);
    var tooltip = $(this).next(".topic-grid-sub-hide");
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

    var left = elems.offset().left;
    var top = elems.offset().top - $(window).scrollTop();
    var linkHeight = elems.height();
    var linkWidth = elems.width();
    var bottom = windowHeight - top - linkHeight;
    var right = windowWidth - left - linkWidth;
    var topbottom = (top < bottom) ? bottom : top;
    var leftright = (left < right) ? right : left;

    var tooltiph = tooltip.height();
    var tooltipw = tooltip.width();

    console.log(left + " " + 
               top + " " + 
               linkHeight + " " + 
               linkWidth + " " + 
               bottom + " " + 
               right + " " + 
               topbottom + " " + 
               leftright);
    if (topbottom == bottom && leftright == right) //done
    {
        var yPos = (linkHeight / 2);
        var xPos = linkWidth + 25;
        tooltip.css("top", yPos + "px");
        tooltip.css("left", xPos + "px");
    } else if (topbottom == bottom && leftright == left) //done
    {
        var yPos = (linkHeight / 2);
        var xPos = linkWidth + 25;
        tooltip.css("top", yPos + "px");
        tooltip.css("right", xPos + "px");
    } else if (topbottom == top && leftright == right) //done
    {
        var xPos = linkWidth + 25;
        var yPos = - tooltiph + (linkHeight / 2);
        tooltip.css("top", yPos + "px");
        tooltip.css("left", xPos + "px");
    } else if (topbottom == top && leftright == left) {
        var yPos = - tooltiph + (linkHeight / 2);
        var xPos = linkWidth + 25;
        tooltip.css("top", yPos + "px");
        tooltip.css("right", xPos + "px");
    } else {}

});

});

