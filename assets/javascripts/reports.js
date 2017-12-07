function scrolling_table(table) {
  table.floatThead({
    //debounceResizeMs: 300,
    scrollContainer: function (table) {
      return table.closest('.wrapper');
    }
  });
};

function active_subscriber_toggle (elem) {
  $('#active-subscriptions').slideToggle('slow');
  scrolling_table($('table.active-subscription'));
  $($(elem).children()[0]).toggleClass('fa-minus');
};

$(document).ready(function(){
  $(".active").removeClass("active");
  $(".report").addClass("active");
});