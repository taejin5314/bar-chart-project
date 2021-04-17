$(function () {
  $(".bars li .bar").each(function (key, bar) {
    var percentage = $(this).data("percentage");
    $(this).animate({
      width: percentage + "%",
    });
  }, 1000);
});
