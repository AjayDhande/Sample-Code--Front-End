
username_valid = false;
churchname_valid = false;
/*$("#registration").submit(function( event ) {
    var p_code = /^[0-9]+$/;
    var password1 = /^[\s]*[\S]+[\S\s]*$/
    var flag = true;
    var password = $("#pwd").val();
    var confirmPassword = $("#confirm_pwd").val();
    var street = $("#street1").val();
    var street2 = $("#street2").val();
    var country = $("#country").val();
    var state = $("#state").val();
    var region = $("#region").val();
    var city = $("#city").val();
    var postalCode = $("#pcode").val();

    if (password.length < 8){
        notify("Password is less than 8", "Password length can't be less than 8", "error");
        flag = false;
    }
    else if (password.length > 32){
        notify("Password is more than 32", "Password length can't be more than 32", "error");
        flag = false;
    }
    else if (!password.match(password1)){
        notify("Password format error", "Only WhiteSpaces are not allowed", "error");
        flag = false;
    }
    if (confirmPassword !== password){
        notify("Confirm password not match", " Password do not match", "error");
        flag = false;
    }
    if (street.length == 0) {
        notify("Street1 Field Blank", "Street1 field cannot be blank", "error");
        flag = false;
    }
    else if (street.length > 255){
        notify("Street1 length is more than 255", "Street1 length can't be more than 255", "error");
        flag = false;
    }
    if (street2.length > 255){
        notify("Street2 length is more than 255", "Street2 length can't be more than 255", "error");
        flag = false;
    }
    if (country.length == 0) {
        notify("Country Field Blank", "Country field cannot be blank", "error");
        flag = false;
    }
    if (state == null) {
        notify("State Field Blank", "State field cannot be blank", "error");
        flag = false;
    }
    if (region == null) {
        notify("Region Field Blank", "Region field cannot be blank", "error");
        flag = false;
    }
    if (city == null) {
        notify("City Field Blank", "City field cannot be blank", "error");
        flag = false;
    }
    if (postalCode.length ==0 || postalCode.length > 7) {
        notify("Postal code Error", "Postal code should lies in range of 1 to 7", "error");
        flag = false;
    }
    else if (!postalCode.match(p_code)) {
        notify("Postal code Error", "Only numbers allowed", "error");
        flag = false;
    }
    if (!flag){
        event.preventDefault();
        return false;
    }
    return true;
});
*/

//Updated By: SneWan, To update signup functionality for welcome on board page

jQuery(document).ready(function() {
  $.validator.addMethod(
    "regex",
      function(value, element, regexp) {
        var re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
        },
    "Please check your input."
  );
  jQuery('#registration').validate({
    errorElement:'div',
    rules: {
      "user[password]":{
        required: true,
        regex: "^(?=.*[0-9])([a-zA-Z0-9]{7,})$",
        minlength: 8,
        maxlength: 32
      },
      "user[password_confirmation]":{
        equalTo:"#pwd"
      },
      "user[acronym]":{
        required: true,
        regex: "^[a-zA-Z]*$",
        remote: "check_acronym",
        minlength:4,
        maxlength:4
      },
      "user[business_email]":{
        required:true,
        email: true,
        maxlength:255
      },
      //add church name
      "user[church_name]":{
        required:true
      }
    /* "address[street1]":{
        required: true,
        maxlength: 255
      },
      "address[street2]":{
        maxlength: 255
      },
      "address[city]":{
        required: true,
        maxlength: 255
      },
      "address[state]":{
        required: true,
        maxlength: 255
      },
      "address[region]":{
        required: true,
        maxlength: 255
      }, 
      "address[country]":{
        required: true,
        maxlength: 255
      },
      "address[postal_code]":{
        required: true,
        regex: "^[0-9]+$",
        maxlength: 7
      }*/   
    },
    messages: {
      "user[password]":{
        
        required:"Password field can't be blank or only spaces",
        regex:"Please enter a valid password",
        minlength:"Password length should be in between 8-32 characters",
        maxlength:"Password length should be in between 8-32 characters"
      },
      "user[password_confirmation]":{
        equalTo: "Confirm password field does not match with password"
      },
      "user[acronym]":{
        required:"Acronym field can't be blank",
        regex: "Invalid acronym use only [A-Z]",
        minlength: "Acronym must be four characters long",
        maxlength: "Acronym must be four characters long",
        remote: "Acronym already Taken!, Try another one"
      },
      "user[business_email]":{
        required:"Business email field can't be blank",
        email:"Invalid Email",
        maxlength:"Should be less than 256 characters"
      },
      
      "user[church_name]":{
        required:"This name field can't be blank"
      }
    /*  "address[street1]":{
        required: "Street1 field can't be blank",
        maxlength: "Should be less than 256 characters"
      },
      "address[street2]":{
        maxlength: "Should be less than 256 characters"
      },
      "address[city]":{
        required: "City field can't be blank unless 'No Data Available'",
        maxlength: "Should be less than 256 characters"
      },
      "address[state]":{
        required: "State field can't be blank unless 'No Data Available'",
        maxlength: "Should be less than 256 characters"
      },
      "address[region]":{
        required: "Region field can't be blank unless 'No Data Available'",
        maxlength: "Should be less than 256 characters"
      }, 
      "address[country]":{
        required: "Country field can't be blank",
        maxlength: "Should be less than 256 characters"
      },
      "address[postal_code]":{
        required: "Postal Code field can't be blank",
        regex: "Invalid Postal code",
        maxlength: "Should be less than 8 characters"
      }*/ 
    }

  });
});

/*
$("#registration").submit(function(event){
    var flag = true;
    var password = $('#pwd').val();
    if(password.length > 0 && password.trim() == ""){
      var element = $('#pwd')
      var message = "Only white spaces not allowed"
      addError(element,message);
      flag = false;
    }
    if(password.length > 0 && password.trim() != ""){
        var element = $('#pwd')
        removeError(element,message)
    }
    if (!flag){
      event.preventDefault();
      return false;
    }
    return true;
});


function addError(element,message){
  if(!$(element.parent()).find('div.tag_custom_error').length > 0){
    $(element.parent()).append('<div class="tag_custom_error">'+ message + '</div>');
    $(element.parent()).find('div.tag_custom_error').siblings('div').addClass('set_tag_field');
  }
}

function removeError(element){
  if($(element.parent()).find('div.tag_custom_error').length > 0){
    $(element.parent()).find('div.tag_custom_error').remove();
  }
}*/

$(document).ready(function(){
    $("input[type=checkbox]").prop("checked", false);
    $("input[type=radio]").prop("checked", false);
    setTimeout(function(){
        var match;
        if (match = window.location.search.match(/plan=(.*?)&/)){
            $("#role4").click();
            $($("input[name='customer_plan'][value='"+match[1]+"']")[0]).click()
            //planChange();
            //roleChange();
        }
    }, 500);
    $("#registration_btn").click(function () {
        showLoader();
        username_valid = false;
        $.post("/check_username",{username: $("#username").val()})
            .done(function(data) {
                username_valid = (!data)
                $("#registration").submit();
            })
            .fail(function () {
                username_valid = false;
            })
            .always(function() {
                hideLoader();
            }); 
        if ($('[name="user[church_name]"]').val() != undefined){
            $.post("/check_church_name",{church_name: $('[name="user[church_name]"]').val()})
                .done(function(data) {
                    churchname_valid = (!data)
                    $("#registration").submit();
                })
                .fail(function () {
                    churchname_valid = false;
                })
                .always(function() {
                    hideLoader();
                });
        }             
        //$("#registration").submit();
    });
    // $('input[name="user[role]"]').click(function(){
    //     $("input[name='customer_plan']").prop("checked", false);
    //     $("input[name='subdomain_plan']").prop("checked", false);
    //     $("#plans").html("");
    //     $("#addon-area").html("");
    //     if ($(this).attr("value") == "CUSTOMER"){
    //         //$("#subdomain_add_elem").remove();
    //         //$("#subdomain_add").removeClass("input-group");
    //         var customer_plans = $("div.customer_plans");
    //         var customer_addons = $("div.customer_addons");
    //         $.each(customer_plans, function(index, value) {
    //             $("#plans").append($(value).html());
    //         });
    //         $.each(customer_addons, function(index, value) {
    //             $("#addon-area").append("<hr>");
    //             $("#addon-area").append($(value).html());
    //         });
    //         $("#addon-area").show();
    //         $("input[name='customer_plan']").click(function(){
    //             if (this.value == "0"){
    //                 $("input[type=checkbox]").prop("checked", false);
    //                 $("#addon-area").hide();
    //             }
    //             else{
    //                 $("input[type=checkbox]").prop("checked", false);
    //                 $("#addon-area").show();
    //             }
    //             //planChange();
    //         });
    //     }
    //     else{
    //         //$("#subdomain_add").addClass("input-group");
    //         //if ($("#subdomain_add_elem").length == 0)
    //         //$("#subdomain_add").append("<span class='input-group-addon' id='subdomain_add_elem'>.ocm.com</span>");
    //         $("#addon-area").hide();
    //         var id = $(this).attr("data-id");
    //         var plans = subdomain_types_and_plans[id];
    //         if (plans.length == 0) {
    //             $("#plans").html($("#no_plan").html());
    //         }
    //         else {
    //             $.each(plans, function(index, value) {
    //                 $("#plans").append($("#subdomain_plans_"+id+"_"+value).html());
    //             });
    //         }
    //         $("input[name='subdomain_plan']").click(function(){
    //             planChange();
    //         });
    //     }
    //     $(".Monthly-Pricing-two").show();
    //     //roleChange();
    // });
});

$("#registration").submit(function(e){
    if ($('[name="user[church_name]"]').val() != undefined){
        selectChurchName(e);
    }    
    usernameChange(e);
    //roleChange(e);
    
    // planChange(e);
    // var addons = $("input[type='checkbox']:checked");
    // $.each(addons, function(index, value) {
    //     $("input[name='addons']").val($("input[name='addons']").val()+$(value).val()+',');
    // });
});

$('#username').keyup(function (e) {
    usernameChange();
});

$('#radio-button').click(function (e) {
    //roleChange();
});

function planChange (event) {
    flag = true
    var plan = undefined;
    if ($("input[name='customer_plan']:checked").val() != undefined){
        plan = $("input[name='customer_plan']:checked").val();
        $("input[name='customer[plan]']").val(plan);
    }
    if ($("input[name='subdomain_plan']:checked").val() != undefined){
        plan = $("input[name='subdomain_plan']:checked").val();
        $("input[name='subdomain[plan]']").val(plan);
    }
    if (plan == undefined) {
        //notify("Plan Required!", "Please select any plan", "error");
        var element = $("#plans");
        var message = "Please select any plan"
        planError(element,message);
        flag = false;
    }
    if(plan != undefined){
        var element = $("#plans");
        removePlanError(element)
    }
    if (!flag && event != undefined){
        event.preventDefault();
        return false;
    }
    return true; 
}

function roleChange (event) {
    var flag = true;
    var role = $("[name='user[role]']:checked").val() || $("[type='text'][name='user[role]']").val();
    if(role == undefined){
        var element = $("[name='user[role]']")
        var message = "Please select any role"
        roleError(element,message)
        flag = false;
    }
    if(role != undefined){
        var element = $("[name='user[role]']")
        removeRoleError(element)
    }
    if (!flag && event != undefined){
        event.preventDefault();
        return false;
    }
    return true;
}

function usernameChange (event) {
    var flag = true;
    var username_regex = /^[a-zA-Z0-9][a-zA-Z0-9\-]+[a-zA-Z0-9]$/;
    var element = $('#username');
    var un = element.val();
    removeuserError(element);
    if (un == "") {
        var message = "This field can't be blank"
        usernameError(element,message);
        flag = false;
    }
    else if(un.trim() == "") {
        var message = "This field can't be blank"
        usernameError(element,message);
        flag = false;
    }
    else if(!un.match(username_regex) && un.trim() != "") {
        var message = "Invalid Name"
        usernameError(element,message);
        flag = false;
    }    
    else if (un.length > 63) {
        var message = "Should be less than 63 characters"
        usernameError(element,message);
        flag = false;
    }
    else if (!username_valid && event != undefined) {
        var message = "Name Already Taken!, Try another one"
        usernameError(element,message);
        flag = false;
    }
    if(flag){
        removeuserError(element);
    }
    if (!flag && event != undefined){
        event.preventDefault();
        return false;
    }
    return true;
}


function selectChurchName (event) {
    var flag = true;
    var element = $('[name="user[church_name]"]');
    var un = element.val();
    removechurchNameError(element);
    if (un == "") {
        var message = "Name field can't be blank"
        //churchNameError(element,message);
        //flag = false;
    }
    else if(un.trim() == "") {
        var message = "Name field can't be blank"
        //churchNameError(element,message);
        //flag = false;
    }  
    //remove for validation not necessary on
    else if (!churchname_valid && event != undefined) {
        var message = "Name Already Taken!, Try another one"
        churchNameError(element,message);
        flag = false;
    }
    if(flag){
        removechurchNameError(element);
    }
    if (!flag && event != undefined){
        event.preventDefault();
        return false;
    }
    return true;
}

function addError(element,message){
  if(!$(element.parent()).find('div.tag_custom_error').length > 0){
    $(element.parent()).append('<div class="tag_custom_error">'+ message + '</div>');
    $(element.parent()).find('div.tag_custom_error').siblings('div').addClass('set_tag_field');
  }
}

function removeError(element){
  if($(element.parent()).find('div.tag_custom_error').length > 0){
    $(element.parent()).find('div.tag_custom_error').remove();
  }
}

function usernameError(element,message){
  if(!$(element.parent()).find('div.tag_custom_error').length > 0){
    //$(element.parent()).append('<br>');
    $(element.parent()).append('<div class="tag_custom_error" style="margin-top: 7px;">'+ message + '</div>');
    $(element.parent()).find('div.tag_custom_error').siblings('div').addClass('set_tag_field');
  }
}
function removeuserError(element){
  if($(element.parent()).find('div.tag_custom_error').length > 0){
    $(element.parent()).find('div.tag_custom_error').remove();
  }
}

function churchNameError(element,message){
  if(!$(element.parent().parent()).find('div.tag_custom_error').length > 0){
    $(element.parent()).append('<div class="tag_custom_error">'+ message + '</div>');
    $(element.parent().parent()).find('div.tag_custom_error').siblings('div').addClass('set_tag_field');
  }
}
function removechurchNameError(element){
  if($(element.parent().parent()).find('div.tag_custom_error').length > 0){
    $(element.parent().parent()).find('div.tag_custom_error').remove();
  }
}

function roleError(element,message){
  if(!$(element.parent().parent()[1]).find('div.tag_custom_error').length > 0){
    $(element.parent().parent()[1]).append('<div class="tag_custom_error">'+ message + '</div>');
    $(element.parent().parent()[1]).find('div.tag_custom_error').siblings('div').addClass('set_tag_field');
  }
}

function removeRoleError(element){
  if($(element.parent().parent()[1]).find('div.tag_custom_error').length > 0){
    $(element.parent().parent()[1]).find('div.tag_custom_error').remove();
  }
}

function planError(element,message){
  if(!$(element).find('div.tag_custom_error').length > 0){
    $(element).prepend('<div class="tag_custom_error" style="padding-left: 15px">'+ message + '</div>');
    $(element).find('div.tag_custom_error').siblings('div').addClass('set_tag_field');
  }
}

function removePlanError(element){
  if($(element).find('div.tag_custom_error').length > 0){
    $(element).find('div.tag_custom_error').remove();
  }
}
