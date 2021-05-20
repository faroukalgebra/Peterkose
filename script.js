var num = 625;
$(window).scroll(function() {
  $(".header-content").css("opacity", 1 - $(window).scrollTop() / 500);
  if ($(window).scrollTop() > num) {
    $(".navbar-sticky ").addClass("navbar-fixed-top");
  } else {
    $(".navbar-sticky").removeClass("navbar-fixed-top");
  }
});
$(function() {
  $("#side").click(function() {
    $("#sidebar").css({ width: "18em" });
    $(document.body).css({ opacity: "0.7" });
  });
});
$(function() {
  $(".closebtn").click(function() {
    $("#sidebar").css("width", "0");
    $(document.body).css({ opacity: "1" });
  });
});
