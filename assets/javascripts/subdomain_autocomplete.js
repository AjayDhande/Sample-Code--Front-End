/*
$("#search-form").submit(function(event){
  notify("Sorry", "Coming Soon", "notice");
  event.preventDefault();
});

$("input[name='sub_search_text']").autocomplete({
  source: function(request, response) {
  $.ajax({
    url: "/search_subdomain/"+$("select[name='sub_search_by']").val()+"?sub_search_text="+request.term,
    dataType: "json",
    success: function(data) {
      response(data["subdomain_name"]);
    }
  });
  },
  minLength: 2,
  select: function(event, ui) {
    $("button[name='go']").attr("disabled", false);
  },
  open: function() {
    $("button[name='go']").attr("disabled", true);
    $(this).addClass("ui-autocomplete-loading");
    $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
  },
  close: function() {
    $(this).removeClass("ui-autocomplete-loading");
    $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
  }
});

$("select[name='sub_search_by']").change(function (event) {
  $("input[name='sub_search_text']").val("");
});
*/

key_filter = [95, 35, 38];

$("input[name='home_search_text']").keypress(function(event){
  if ($.inArray(event.keyCode,key_filter) > -1){
    event.preventDefault();
    $(this).val($(this).val().replace(/[#_&]/g,""));
    notify("Alert", "_ # & not allowed", "notice");
    $(this).trigger("change");
  }
});
