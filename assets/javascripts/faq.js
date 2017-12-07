function search_request_faq(search_text){
  showLoader();
  $.get(encodeURI("/help/search_faq?search_text=" + search_text))
    .done( function(data){
      $("#questions_ajax").html(data);
    })
    .fail(function(data){
      notify('Something Wrong', "Contact Administrator", "error")
    })
    .always(function(){
      hideLoader();
    });
}

$("#search_faq").submit(function(event) {
  var value = $("input[name='search_text']").val();
  if (value == "")
    notify('Search Field Empty', "Search field should be filled");
  else
    search_request_faq(value);
  event.preventDefault();
});

key_filter = [95, 35, 38];

$("input[name='search_text']").keypress(function(event){
  if ($.inArray(event.keyCode,key_filter) > -1){
    event.preventDefault();
    $(this).val($(this).val().replace(/[#_&]/g,""));
    notify("Alert", "_ # & not allowed", "notice");
    $(this).trigger("change");
  }
});

//Purpose: To Validate Contact form
//Date: 04/11/2015
jQuery(document).ready(function() {
    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
        var re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );
    jQuery('#contact_form').validate({
    errorElement:'div',
    rules: {
        "name":{
            required:true,
            regex: "^[a-zA-Z. ]+$",
            maxlength:255
        },
        "email":{
            required:true,
            email: true,
            maxlength:255
        },
        "message":{
            required:true,
            maxlength:500
        }  
    },
    messages: {
        "name":{
            required:"Name field can't be blank",
            regex:"Invalid Name",
            maxlength:"Should be less than 256 characters"
        },
        "email":{
            required:"Email field can't be blank",
            email:"Invalid Email",
            maxlength:"Should be less than 256 characters"
        },
        "message":{
            required:"Message field can't be blank",
            maxlength:"Message length should be less than 500"
        }
    }

  });
});