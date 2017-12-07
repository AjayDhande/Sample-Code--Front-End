$(document).ready(function(){  
  setTimeout(function(){ $(".search").trigger("input"); }, 1000);
  $(document).on('input','#search-input,#searchmedia',function () { 
    var dataresult = new Array;
    var searchvalue = this.value;
    if(this.id=="search-input"){
      var home_search_by=$('#home_search_by').val();
    }
    else {
      var home_search_by=$('#search_by').val();
    }  
    var array = new Array(searchvalue,home_search_by);
    $.ajax({
      url:'/autosearch',
      data: {data: array},
      success: function(result) {
        $('#search-input,#searchmedia').autocomplete({
          minLength: 1,
          appendTo: "#auto-complete",
          source: result,
          select: function (e, ui) {
            var selected_value = $(".ui-state-focus").text();
            $('#search-input,#searchmedia').val(selected_value);
            $( ".ui-widget-content" ).hide();
          }
        });
        repaint_auto_complete(result);
      }
    });
  });
});

function repaint_auto_complete(result){
  if (result.slice(-1)[0]=="titled"){
    result.splice(-1,1)
    $( ".ui-widget-content" ).empty();
    $.each(result , function(i, val) { 
      id = i+2
      $( ".ui-widget-content" ).append("<li class='ui-menu-item' id='ui-id-"+id+"' tabindex='-1'>" +val+ "</li>")
    });
    setTimeout(function(){ $( ".ui-widget-content" ).css('display', 'block'); }, 1000);          
  }
}
