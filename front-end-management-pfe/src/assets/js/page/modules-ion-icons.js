"use strict";

$("#icons li").each(function () {
  $(this).append(
    '<div className="icon-name">' + $(this).attr("className") + "</div>"
  );
});
$("#icons li").click(function () {
  $(".icon-name").fadeOut();
  $(this).find(".icon-name").fadeIn();
});
