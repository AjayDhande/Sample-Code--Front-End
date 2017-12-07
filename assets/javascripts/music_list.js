function search_request(search_by, search_text){
  showLoader();
  var last = $("input[type='checkbox']:checked").val() === undefined ? "" : $("input[type='checkbox']:checked").val()
  $.get("/search_messages",{ home_search_by: search_by, home_search_text: search_text, type: 'json', last: $("input[type='checkbox']:checked").val() })
    .done( function(data){
      $("#update_list").html(data);
      $.map($('.trunc'),truncate);
      $(".rateit").rateit();
      rate_now();
    })
    .fail(function(data){
      notify('Something Wrong', "Contact Administrator", "error");
    })
    .always(function(){ 
      $("input[name='search_by']").val(search_by);
      $("input[name='search_text']").val(search_text);
      hideLoader();
    });
}

function fetch_subcategories(elem) {
  if(elem.value == "")
    $('#subcategory').prop('disabled', true).trigger("chosen:updated");
  else
    $('#subcategory').prop('disabled', false).trigger("chosen:updated");
  src = $("#subcategory");
  $(src).empty();
  var data = subcategories[elem.value];
  for (var i = 0; i < data.length; i++){
    $(src).append($("<option value='" + data[i][0] + "'>" + data[i][1] + "</option>"));
  }
  $(src).chosen().trigger("chosen:updated");
}

function media_by_category(elem) {
  search_request("category", $(elem).val());
  var result = $("#text_added").val()
  if (result == undefined){
    $("#category_select_label").append("<b id='text_added' style='padding-left:10px; color:green;'>Filter Results Below</b>");
    setTimeout(function(){ 
      $("#text_added").remove();
    }, 5000);
  }
}

$("#subcategory").change(function (e) {
  if (e.target.value != ""){
    search_request("subcategory", e.target.value);
    var result = $("#text_added1").val()
    if (result == undefined){
      $("#subcategory_select_label").append("<b id='text_added1' style='padding-left:10px; color:green;'>Filter Results Below</b>");
      setTimeout(function(){ 
        $("#text_added1").remove();
      }, 5000);
    }
  }
});

function withLast (elem) {
  var checked = $(elem).prop("checked");
  $("input[type='checkbox']:checked").prop("checked", false)
  $(elem).prop("checked", checked);
  search_request($("input[name='search_by']").val(), $("input[name='search_text']").val());
}

function paginate () {
  var page;
  var link;
  if (location.hash.length > 1 && parseInt(location.hash.slice(1)) > 0){
    page = parseInt(location.hash.slice(1));
    if($("a.paginator").length > 0){
      link = $("a.paginator")[0];
    }
    else{
      link = document.createElement('a');
      $(link).addClass("paginator").attr("href", "#").css("display", "none");
      $("footer").append(link);
    }
    $(link).attr("onclick", $($(".pagination > a")[0]).attr("onclick").replace(/page=(.*?)'/, "page=" + page + "'"));
    $(link).click();
  }
}

$(document).ready(function() {
  //paginate();
});

$(window).on('hashchange',function(){
  //paginate();
});

function ajax_pagination (elem) {
  showLoader();
  $.ajax({url: $(elem).attr('href')+"&type=json", dataType: 'html'})
  .done( function(data){
    $('#update_list').html(data);
  })
  .fail(function(data){
    notify('Something Wrong', 'Contact Administrator', 'error');
  })
  .always(function(){
    $.map($('.trunc'),truncate);
    $('.rateit').rateit();
    rate_now();
    hideLoader();
  });
  return false;
}
