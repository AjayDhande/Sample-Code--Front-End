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
    jQuery('#edit_organisation_form').validate({
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

$("#edit_organisation_form").submit(function(event){
    var flag = true;
    var password_id = $('#password_id').val();
    if(password_id.length > 0 && password_id.trim() == ""){
        var element = $('#password_id')
        var message = "Only white spaces not allowed"
        addError(element,message)
        flag = false;
    }
    if(password_id.length > 0 && password_id.trim() != ""){
        var element = $('#password_id')
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

/*
$("#profile").submit(function( event ) {
    var flag = true;
    var name_field = $("#name").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var confirmPassword = $("#confirm_password").val();
    var srt1 = $("#street1").val();
    var srt2 = $("#street2").val();
    var cty = $("#city").val();
    var stat = $("#state").val();
    var cntry = $("#country").val();
    var pstl_code = $("#postal_code").val();
    var name = /^[a-zA-Z ]+$/;
    var mailformat = /^[a-zA-Z0-9_.-]+\@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var password1 = /^[\s]*[\S]+[\S\s]*$/
    var street1 = /^[a-zA-Z0-9,. ]+$/;
    var street2 = /^[a-zA-Z0-9,. ]+$/;
    var city = /^[a-zA-Z ]+$/;
    var state = /^[a-zA-Z ]+$/;
    var country = /^[a-zA-Z ]+$/;
    var postal_code = /^[0-9]+$/;
    
    if (password.length > 0 && password.length < 8){
        notify("Password is less than 8", "Password length can't be less than 8", "error");
        flag = false;
    }
    else if (password.length > 32){
        notify("Password is more than 32", "Password length can't be more than 32", "error");
        flag = false;
    }
    else if (password.length > 0 && !password.match(password1)){
        notify("Password format error", "Only WhiteSpaces are not allowed", "error");
        flag = false;
    }
    if (confirmPassword !== password){
        notify("Confirm password not match", " Password do not match", "error");
        flag = false;
    }    
    if(email.length == 0){
        notify("Blank email", "Email can't be blank", "error");
        flag = false;
    }
    else if (email.length > 255){
        notify("Email field exceed", "Email length can't be more than 255", "error");
        flag = false;
    }
    else if(!email.match(mailformat)) {
        notify("Email format wrong", "Email is not valid", "error");
        flag = false;
    }
    if(name_field == ""){
        notify("Name Blank", "Name can't be blank", "error");
        flag = false;
    }
    else if(name_field.length > 255){
        notify("Name field exceed", "Name length can't be more than 255", "error");
        flag = false;
    }
    else if(!name_field.match(name)) {
        notify("Name Invalid", "Name format is invalid", "error");
        flag = false;
    }
    if(srt1.length == 0){
        notify("Street1 field blank", "Street1 field can't be blank", "error");
        flag = false;
    }
    else if(srt1.length > 255){
        notify("Street field exceed", "Street length can't be more than 255", "error");
        flag = false;
    }
    else if(!srt1.match(street1)) {
        notify("Street1 format wrong", "Street1 is not valid", "error");
        flag = false;
    }
    if(srt2 != 0 & !srt2.match(street2)) {
        notify("Street2 format wrong", "Street2 is not valid", "error");
        flag = false;
    }
    else if(srt2.length > 255){
        notify("Street2 field exceed", "Street2 length can't be more than 255", "error");
        flag = false;
    }
    if(!cty.match(city)) {
        notify("City format wrong", "City is not valid", "error");
        flag = false;
    }
    else if(cty.length > 255){
        notify("City field exceed", "City length can't be more than 255", "error");
        flag = false;
    }
    if(!stat.match(state)) {
        notify("State format wrong", "State is not valid", "error");
        flag = false;
    }
    else if(stat.length > 255){
        notify("State field exceed", "State length can't be more than 255", "error");
        flag = false;
    }
    if(!cntry.match(country)) {
        notify("Country format wrong", "Country is not valid", "error");
        flag = false;
    }
    else if(cntry.length > 255){
        notify("Country field exceed", "Country length can't be more than 255", "error");
        flag = false;
    }
    if(!pstl_code.match(postal_code)) {
        notify("Postal code format wrong", "Postal code is not valid", "error");
        flag = false;
    }
    else if (pstl_code.length ==0 || pstl_code.length > 7) {
        notify("Postal code Error", "Postal code should be between 0 to 7", "error");
        flag = false;
    }    
    if (!flag){
        event.preventDefault();
        return false;
    }
    return true;
});
*/
// $(".customer_profile_tab").click(function(){
//   value = $(this).attr('name')
//   window.location.href="/customer_profile#"+value
// });
// jQuery(document).ready(function() {
// setTimeout(function(){ 
//   if (window.location.href.search("#SubscriptionPlanChange") > 0)
//     $("a[href='#SubscriptionPlanChange']").click();
//   if (window.location.href.search("#DownloadMedia") > 0)
//     $("a[href='#DownloadMedia']").click();
//   if (window.location.href.search("#LikedFavouriteMedia") > 0)
//     $("a[href='#LikedFavouriteMedia']").click();
//   if (window.location.href.search("#RatingForMedia") > 0)
//     $("a[href='#RatingForMedia']").click();
//   if (window.location.href.search("#OrderlistForMedia") > 0)
//     $("a[href='#OrderlistForMedia']").click();
// }, 1);
// });
// $(window).on('hashchange', function(e){
//   if (window.location.href.search("#SubscriptionPlanChange") > 0)
//     $("a[href='#SubscriptionPlanChange']").click();
//   if (window.location.href.search("#DownloadMedia") > 0)
//     $("a[href='#DownloadMedia']").click();
//   if (window.location.href.search("#LikedFavouriteMedia") > 0)
//     $("a[href='#LikedFavouriteMedia']").click();
//   if (window.location.href.search("#RatingForMedia") > 0)
//     $("a[href='#RatingForMedia']").click();
//   if (window.location.href.search("#OrderlistForMedia") > 0)
//     $("a[href='#OrderlistForMedia']").click();
//   if (window.location.href.search("#ProfileInformation") > 0)
//     $("a[href='#ProfileInformation']").click();
// });

function scolling_table(table) {
  table.floatThead({
    //debounceResizeMs: 300,
    scrollContainer: function (table) {
      return table.closest('.wrapper');
    }
  });
}