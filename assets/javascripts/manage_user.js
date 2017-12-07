//Purpose: To Validate Edit form
//Date: 07/01/2015
jQuery(document).ready(function() {
  $.validator.addMethod(
    "regex",
      function(value, element, regexp) {
        var re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
        },
    "Please check your input."
  );
  window.create_administration_form = jQuery("#create_administration_form").validate({
    errorElement:'div',
    rules: {
      "username":{
        required:true,
        regex:'^[a-zA-Z0-9_-]+$',
        remote:"check_duplicate_username",
        maxlength:255
      },
      "email":{
        required:true,
        email: true,
        //remote:'check_duplicate_email',
        maxlength:255
      },
      "name":{
        required:true,
        regex:'^[a-zA-Z. ]+$',
        maxlength:255
      },
      "password":{
        required:true,
        maxlength:32,
        minlength:8
      },
      "password_confirmation":{
        required:true,
        equalTo: "#password"
      },
      "user_role_id":{
        required:true
      }
    },
    messages: {
      "username":{
        required:"Username field can't be blank",
        regex:"Invalid username",
        remote:"Username has been already taken",
        maxlength:"Should be less than 255 characters"
      },
      "email":{
        required:"Email field can't be blank",
        email:"Invalid email address",
        //remote:"Email has been already taken",
        maxlength:"Should be less than 255 characters"
      },
      "name":{
        required:"Name field can't be blank",
        regex:"Invalid name",
        maxlength:"Should be less than 255 characters"
      },
      "password":{
        required:"Password field can't be blank",
        maxlength:"Should be less than 33 characters",
        minlength:"Should be more than 7 characters"
      },
      "password_confirmation":{
        required:"Password confirmation field can't be blank",
        equalTo: "Password and confirm password mismatch"
      },
      "user_role_id":{
        required:"Please select user role"
      }
    }
  });
});

//Purpose: To Validate Edit form
//Date: 20/03/2015
//modified date: 24/03/2015
function toggle_message(elem){
  var order = toggle_order(elem);
  var selector = "span[onclick='"+$(elem).attr("onclick")+"']";
  showLoader();
  back_button = false;
  manage_url_hash("media_file_name", order);
  $.ajax({
    url: '/brand_new_messsages?selected_tab=brand_new_messages&page=1&order_by=media_file_name&order='+order+"&search_by="+$("select[name='search_by']").val()+"&search_text="+$("input[name='search_text']").val(),
    success: function(response) {
      $('.update_page').html(response);
      $(".chosen-select").chosen();
      toggle_by_order(selector, order);
      hideLoader();
      back_button = true;
    },
    dataType: 'html',
    cache: false
  });
}
//Purpose: To Validate Edit form
//Date: 20/03/2015
function toggle_duration(elem){
  var order = toggle_order(elem);
  var selector = "span[onclick='"+$(elem).attr("onclick")+"']";
  showLoader();
  back_button = false;
  manage_url_hash("duration", order);
  $.ajax({
    url: '/brand_new_messsages?selected_tab=brand_new_messages&page=1&order_by=duration&order='+order+"&search_by="+$("select[name='search_by']").val()+"&search_text="+$("input[name='search_text']").val(),
    success: function(response) {
      $('.update_page').html(response);
      $(".chosen-select").chosen();
      toggle_by_order(selector, order);
      hideLoader();
      back_button = true;
    },
    cache: false,
    dataType: 'html'
  });
}
//Purpose: To Validate Edit form
//Date: 20/03/2015
function toggle_date(elem){
  var order = toggle_order(elem);
  var selector = "span[onclick='"+$(elem).attr("onclick")+"']";
  showLoader();
  back_button = false;
  manage_url_hash("created_at", order);
  $.ajax({
    url: '/brand_new_messsages?selected_tab=brand_new_messages&page=1&order_by=created_at&order='+order+"&search_by="+$("select[name='search_by']").val()+"&search_text="+$("input[name='search_text']").val(),
    success: function(response) {
      $('.update_page').html(response);
      $(".chosen-select").chosen();
      toggle_by_order(selector, order);
      hideLoader();
      back_button = true;
    },
    cache: false,
    dataType: 'html'
  });
}
//Purpose: To Validate Edit form
//Date: 20/03/2015
function toggle_presenter(elem){
  var order = toggle_order(elem);
  var selector = "span[onclick='"+$(elem).attr("onclick")+"']";
  showLoader();
  back_button = false;
  manage_url_hash("presenter_name", order);
  $.ajax({
    url: '/brand_new_messsages?selected_tab=brand_new_messages&page=1&order_by=presenter_name&order='+order+"&search_by="+$("select[name='search_by']").val()+"&search_text="+$("input[name='search_text']").val(),
    success: function(response) {
      $('.update_page').html(response);
      $(".chosen-select").chosen();
      toggle_by_order(selector, order);
      hideLoader();
      back_button = true;
    },
    cache: false,
    dataType: 'html'
  });
}

function toggle_order (elem) {
  if ($(elem).hasClass("glyphicon-chevron-down")){
    $(elem).removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
    return "ASC";
  }
  $(elem).removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
  return "DESC";
}

function toggle_by_order (selector, order) {
  var elem = $(selector);
  if (order == "ASC")
    $(elem).removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
  else
    $(elem).removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
}

function manage_url_hash (order_by, order) {
  window.location.hash = "#brand_new_messages;"+$("select[name='search_by']").val()+";"+$("input[name='search_text']").val()+";"+order_by+";"+order+";1"
}



//Purpose: To sort by subdomain names for affiliation list.
//Date: 24/05/2016
function toggle_affiliation(elem){
  var order = toggle_order(elem);
  var selector = "span[onclick='"+$(elem).attr("onclick")+"']";
  var searched_by = $("input[name='search_affiliation']").next().val();
  showLoader();
  back_button = false;
  //manage_url_hash1("presenter_name", order);
  $.ajax({
    url: '/affiliation_sorting?page=1&order_by=subdomain_name&order='+order+"&search_text="+searched_by,
    success: function(response) {
      $('.update_page').html(response);
      $(".chosen-select").chosen();
      toggle_by_order(selector, order);
      hideLoader();
      back_button = true;
    },
    cache: false,
    dataType: 'html'
  });
}


function toggle_exchange(elem){
  var order = toggle_order(elem);
  var selector = "span[onclick='"+$(elem).attr("onclick")+"']";
  var searched_by = $("input[name='search_exchange']").next().val();
  showLoader();
  back_button = false;
  //manage_url_hash1("presenter_name", order);
  $.ajax({
    url: '/exchange_sorting?page=1&order_by=subdomain_name&order='+order+"&search_text="+searched_by,
    success: function(response) {
      $('.update_page').html(response);
      $(".chosen-select").chosen();
      toggle_by_order(selector, order);
      hideLoader();
      back_button = true;
    },
    cache: false,
    dataType: 'html'
  });
}
