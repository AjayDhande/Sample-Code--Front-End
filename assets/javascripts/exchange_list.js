$(document).ready(function(){
  //removed highlighted color from previous selected tab
  var element = $(".alert-info");
  element.removeClass("alert-info");
  element.addClass("alert-add-message");

  //highlighted exchange tab
  var new_element = $("a[href='/exchange_list']").find(".alert");
  new_element.removeClass("alert-add-message");
  new_element.addClass("alert-info");
});