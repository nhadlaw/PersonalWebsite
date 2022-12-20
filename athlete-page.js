function parallax_height() {
  var scroll_top = $(this).scrollTop();
  var sample_section_top = $(".athlete-section").offset().top;
  var header_height = $(".athlete-header-section").outerHeight();
  $(".athlete-section").css({ "margin-top": header_height });
  $(".athlete-header").css({ height: header_height - scroll_top });
}
parallax_height();
$(window).scroll(function() {
  parallax_height();
});
$(window).resize(function() {
  parallax_height();
});