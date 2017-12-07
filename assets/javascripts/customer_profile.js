/*function enablePath() {
    $("#name").attr("disabled", false);
    $("#email").attr("disabled", false);
    $("#password").attr("disabled", false);
    $("#confirm_password").attr("disabled", false);
    $("#street1").attr("disabled", false);
    $("#street2").attr("disabled", false);
    $("#city").attr("disabled", false);
    $("#state").attr("disabled", false);
    $("#country").attr("disabled", false);
    $("#postal_code").attr("disabled", false);
    $("#edit").attr("disabled", true);
    $("#save").attr("disabled", false);
}*/

jQuery(document).ready(function() {
    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
        var re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );
    jQuery('#profile').validate({
    errorElement:'div',
    rules: {
        "user[name]":{
            required:true,
            regex: "^[a-zA-Z. ]+$",
            maxlength:255
        },
        "user[last_name]":{
            required:true,
            regex: "^[a-zA-Z. ]+$",
            maxlength:255
        },
        "user[email]":{
            required:true,
            email: true,
            maxlength:255
        },
        "user[password]":{
            //regex: "^[\s]*[\S]+[\S\s]*$",
            minlength:8,
            maxlength:32
        },
        "user[confirm_password]":{
            equalTo:"#password"
        },
        "address[street1]":{
            //required:true,
            //regex: "^[a-zA-Z0-9,. ]+$",
            maxlength:255
        },
        "address[street2]":{
            //regex: "^[a-zA-Z0-9,. ]+$",
            maxlength:255
        },
        "address[city]":{
            regex: "^[^0-9]+$",
            maxlength:255
        },
        "address[state]":{
            regex: "^[^0-9]+$",
            maxlength:255
        },
        "address[country]":{
            required:true,
            regex: "^[^0-9]+$",
            maxlength:255
        },
        "address[postal_code]":{
            required:true,
            regex: "^[0-9]+$",
            maxlength:7
        }    
    },
    messages: {
        "user[name]":{
            required:"Name field can't be blank",
            regex:"Invalid name",
            maxlength:"Should be less than 256 characters"
        },
        "user[last_name]":{
            required:"Name field can't be blank",
            regex:"Invalid name",
            maxlength:"Should be less than 256 characters"
        },

        "user[email]":{
            required:"Email field can't be blank",
            email:"Invalid Email",
            maxlength:"Should be less than 256 characters"
        },
        "user[password]":{
            //required:"Password field can't be blank",
            //regex:"Please enter a valid password",
            minlength:"Password length should be in between 8-32 characters",
            maxlength:"Password length should be in between 8-32 characters"
        },
        "user[confirm_password]":{
            equalTo: " Confirm password field does not match with password"
        },
        "address[street1]":{
            //required:"Street1 field can't be blank",
            //regex:"Please enter a valid street1",
            maxlength:"Should be less than 256 characters"
        },
        "address[street2]":{
            //regex:"Please enter a valid street2",
            maxlength:"Should be less than 256 characters"
        },
        "address[city]":{
            regex:"Invalid city",
            maxlength:"Should be less than 256 characters"
        },
        "address[state]":{
            regex:"Invalid state",
            maxlength:"Should be less than 256 characters"
        },
        "address[country]":{
            required:"Country field can't be blank",
            regex:"Invalid country",
            maxlength:"Should be less than 256 characters"
        },
        "address[postal_code]":{
            required:"Postal Code field can't be blank",
            regex:"Invalid Postal code",
            maxlength:"Should be less than 8 characters"
        } 
    }

  });
});

$("#profile").submit(function(event){
    var flag = true;
    var password = $('#password').val();
    if(password.length > 0 && password.trim() == ""){
        var element = $('#password')
        var message = "Only white spaces not allowed"
        addError(element,message)
        flag = false;
    }
    if(password.length > 0 && password.trim() != ""){
        var element = $('#password')
        removeError(element,message)
    }
    if (!flag){
        event.preventDefault();
        return false;
    }
    return true;
});

//Purpose: To Add error message for Plans
//Date: 07/01/2015
function addError(element,message){
  if(!$(element.parent()).find('div.tag_custom_error').length > 0){
    $(element.parent()).append('<div class="tag_custom_error">'+ message + '</div>');
    $(element.parent()).find('div.tag_custom_error').siblings('div').addClass('set_tag_field');
  }
}

//Purpose: To Remove error message for Plans
//Date: 07/01/2015
function removeError(element){
  if($(element.parent()).find('div.tag_custom_error').length > 0){
    $(element.parent()).find('div.tag_custom_error').remove();
  }
}

jQuery(document).ready(function() {
    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
        var re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );
    jQuery('#edit_customer_form').validate({
    errorElement:'div',
    rules: {
        "user[password]":{
            required: true,
            minlength:8,
            maxlength:32
        },
        "user[password_confirmation]":{
            equalTo:"#password_id"
        }
    },
    messages: {
        "user[password]":{
            required:"Password field can't be blank",
            //regex:"Please enter a valid password",
            minlength:"Password length should be in between 8-32 characters",
            maxlength:"Password length should be in between 8-32 characters"
        },
        "user[password_confirmation]":{
            equalTo: " Confirm password field does not match with password"
        } 
    }

  });
});



$(".customer_profile_tab").click(function(){
  value = $(this).attr('name')
  window.location.href="/customer_profile#"+value
});
jQuery(document).ready(function() {
setTimeout(function(){ 
  if (window.location.href.search("#SubscriptionPlanChange") > 0)
    $("a[href='#SubscriptionPlanChange']").click();
  if (window.location.href.search("#DownloadMedia") > 0)
    $("a[href='#DownloadMedia']").click();
  if (window.location.href.search("#LikedFavouriteMedia") > 0)
    $("a[href='#LikedFavouriteMedia']").click();
  if (window.location.href.search("#RatingForMedia") > 0)
    $("a[href='#RatingForMedia']").click();
  if (window.location.href.search("#OrderlistForMedia") > 0)
    $("a[href='#OrderlistForMedia']").click();
}, 1);
});
$(window).on('hashchange', function(e){
  if (window.location.href.search("#SubscriptionPlanChange") > 0)
    $("a[href='#SubscriptionPlanChange']").click();
  if (window.location.href.search("#DownloadMedia") > 0)
    $("a[href='#DownloadMedia']").click();
  if (window.location.href.search("#LikedFavouriteMedia") > 0)
    $("a[href='#LikedFavouriteMedia']").click();
  if (window.location.href.search("#RatingForMedia") > 0)
    $("a[href='#RatingForMedia']").click();
  if (window.location.href.search("#OrderlistForMedia") > 0)
    $("a[href='#OrderlistForMedia']").click();
  if (window.location.href.search("#ProfileInformation") > 0)
    $("a[href='#ProfileInformation']").click();
});

function scolling_table(table) {
  table.floatThead({
    //debounceResizeMs: 300,
    scrollContainer: function (table) {
      return table.closest('.wrapper');
    }
  });
}