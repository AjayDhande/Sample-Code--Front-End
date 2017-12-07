//username_valid = false;
/*
$("#signup").submit(function(event) {
    var flag = true;
    var mailformat = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; 
    var name = /^[a-zA-Z]+[a-zA-Z ]+$/;
    var username = /^[a-zA-Z0-9_-]+$/;
    var nm = $('#name').val();
    var role = $("[name='user[role]']:checked").val();
    var em = $('#email').val();
    var un = $('#username').val();
    var addons = $("input[type='checkbox']:checked");
    $.each(addons, function(index, value) {
        $("input[name='addons']").val($("input[name='addons']").val()+$(value).val()+',');
    });
    var plan = undefined;
    if ($("input[name='customer_plan']:checked").val() != undefined){
        plan = $("input[name='customer_plan']:checked").val();
        $("input[name='customer[plan]']").val(plan);
    }
    if ($("input[name='subdomain_plan']:checked").val() != undefined){
        plan = $("input[name='subdomain_plan']:checked").val();
        $("input[name='subdomain[plan]']").val(plan);
    }
    if (nm == "") {
        notify("Name field Blank!", "Name field can't be blank", "error");
        flag = false;
    }
    else if(!nm.match(name)) {
        notify("Invalid Name!", "Name not valid", "error");
        flag = false;
    }
    else if (nm.length > 255) {
        notify("Invalid Name Length!", "Name length can't be more than 256", "error");
        flag = false;
    }
    if (role == undefined) {
        notify("Role Required!", "Please select any role", "error");
        flag = false;
    }
    if (em == "") {
        notify("Email field Blank!", "Email not valid", "error");
        flag = false;
    }
    else if(!em.match(mailformat)) {
        notify("Invalid Email!", "Email not valid", "error");
        flag = false;
    }
    else if (em.length > 255) {
        notify("Invalid Email Length!", "Email length can't be more than 256", "error");
        flag = false;
    }
    if (un == "") {
        notify("Username field Blank!", "Username field can't be blank", "error");
        flag = false;
    }
    else if(!un.match(username)) {
        notify("Username Required!", "Username not valid", "error");
        flag = false;
    }
    else if (un.length > 255) {
        notify("Invalid Username Length!", "Username length can't be more than 256", "error");
        flag = false;
    }
    else if (!username_valid) {
        notify("Username Already Taken!", "Try another one", "error");
        flag = false;
    }
    if (plan == undefined) {
        notify("Plan Required!", "Please select any plan", "error");
        flag = false;
    }
    if (!flag){
        event.preventDefault();
        return false;
    }
    return true;
});*/

//Updated By: SneWan, On: 15/07/16
jQuery(document).ready(function() {
  $.validator.addMethod(
    "regex",
      function(value, element, regexp) {
        var re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
        },
    "Please check your input."
  );
  jQuery('#signup').validate({
    errorElement:'div',
    rules: {
      "user[name]":{
        required:true,
        regex: "^[a-zA-Z. ]+$",
        maxlength:255
      },
      //Added last name validation for user
      "user[last_name]":{
        required:true,
        regex: "^[a-zA-Z. ]+$",
        maxlength:255
      },      
      "user[email]":{
        required:true,
        email: true,
        maxlength:255
      }
      /*,
      "user[acronym]":{
        required: true,
        regex: "^[A-Z]*$",
        remote: "check_acronym",
        minlength:4,
        maxlength:4
      }*/
    },
    messages: {
      //Updated message of required first name field 
      "user[name]":{
        required:"First name field can't be blank",
        regex:"Invalid name",
        maxlength:"Should be less than 256 characters"
      },
      //Added last name validation for user
      "user[last_name]":{
        required:"Last name field can't be blank",
        regex:"Invalid last name",
        maxlength:"Should be less than 256 characters"
      },
      
      "user[email]":{
        required:"Email field can't be blank",
        email:"Invalid Email",
        maxlength:"Should be less than 256 characters"
      }

      /*,
      "user[acronym]":{
        required:"Acronym field can't be blank",
        regex: "Invalid acronym use only [A-Z]",
        minlength: "Acronym must be four characters long",
        maxlength: "Acronym must be four characters long",
        remote: "Acronym already Taken!, Try another one"
      } */
    }
  });
});

$(document).ready(function(){
    $("#next_btn").click(function () {
        $("#signup").submit();
    });
});

/*
$(document).ready(function(){
    $("input[type=checkbox]").prop("checked", false);
    $("input[type=radio]").prop("checked", false);
    setTimeout(function(){
        var match;
        if (match = window.location.search.match(/plan=(.*?)&/)){
            $("#role4").click();
            $($("input[name='customer_plan'][value='"+match[1]+"']")[0]).click()
            planChange();
            roleChange();
        }
    }, 500);
    $("#next_btn").click(function () {
        showLoader();
        username_valid = false;
        $.post("/check_username",{username: $("#username").val()})
            .done(function(data) {
                username_valid = (!data)
                $("#signup").submit();
            })
            .fail(function () {
                username_valid = false;
            })
            .always(function() {
                hideLoader();
            }); 
        //$("#signup").submit();
    });
    $('input[name="user[role]"]').click(function(){
        $("input[name='customer_plan']").prop("checked", false);
        $("input[name='subdomain_plan']").prop("checked", false);
        $("#plans").html("");
        $("#addon-area").html("");
        if ($(this).attr("value") == "CUSTOMER"){
            //$("#subdomain_add_elem").remove();
            //$("#subdomain_add").removeClass("input-group");
            var customer_plans = $("div.customer_plans");
            var customer_addons = $("div.customer_addons");
            $.each(customer_plans, function(index, value) {
                $("#plans").append($(value).html());
            });
            $.each(customer_addons, function(index, value) {
                $("#addon-area").append("<hr>");
                $("#addon-area").append($(value).html());
            });
            $("#addon-area").show();
            $("input[name='customer_plan']").click(function(){
                if (this.value == "0"){
                    $("input[type=checkbox]").prop("checked", false);
                    $("#addon-area").hide();
                }
                else{
                    $("input[type=checkbox]").prop("checked", false);
                    $("#addon-area").show();
                }
                planChange();
            });
        }
        else{
            //$("#subdomain_add").addClass("input-group");
            //if ($("#subdomain_add_elem").length == 0)
            //$("#subdomain_add").append("<span class='input-group-addon' id='subdomain_add_elem'>.ocm.com</span>");
            $("#addon-area").hide();
            var id = $(this).attr("data-id");
            var plans = subdomain_types_and_plans[id];
            if (plans.length == 0) {
                $("#plans").html($("#no_plan").html());
            }
            else {
                $.each(plans, function(index, value) {
                    $("#plans").append($("#subdomain_plans_"+id+"_"+value).html());
                });
            }
            $("input[name='subdomain_plan']").click(function(){
                planChange();
            });
        }
        $(".Monthly-Pricing-two").show();
        //roleChange();
    });
});
*/
/*

$("#signup").submit(function(e){
    //usernameChange(e);
    //roleChange(e);
    //planChange(e);
    //var addons = $("input[type='checkbox']:checked");
    //$.each(addons, function(index, value) {
        //$("input[name='addons']").val($("input[name='addons']").val()+$(value).val()+',');
    //});
});

$('#username').keyup(function (e) {
    usernameChange();
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
    var role = $("[name='user[role]']:checked").val();
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
        var message = "Username field can't be blank"
        usernameError(element,message);
        flag = false;
    }
    else if(un.trim() == "") {
        var message = "Username field can't be blank"
        usernameError(element,message);
        flag = false;
    }
    else if(!un.match(username_regex) && un.trim() != "") {
        var message = "Invalid username"
        usernameError(element,message);
        flag = false;
    }    
    else if (un.length > 63) {
        var message = "Should be less than 63 characters"
        usernameError(element,message);
        flag = false;
    }
    else if (!username_valid && event != undefined) {
        var message = "Username Already Taken!, Try another one"
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
  if(!$(element.parent().parent()).find('div.tag_custom_error').length > 0){
    $(element.parent().parent()).append('<div class="tag_custom_error">'+ message + '</div>');
    $(element.parent().parent()).find('div.tag_custom_error').siblings('div').addClass('set_tag_field');
  }
}
function removeuserError(element){
  if($(element.parent().parent()).find('div.tag_custom_error').length > 0){
    $(element.parent().parent()).find('div.tag_custom_error').remove();
  }
}
function roleError(element,message){
  if(!$(element.parent().parent()).find('div.tag_custom_error').length > 0){
    $(element.parent().parent()).append('<div class="tag_custom_error">'+ message + '</div>');
    $(element.parent().parent()).find('div.tag_custom_error').siblings('div').addClass('set_tag_field');
  }
}

function removeRoleError(element){
  if($(element.parent().parent()).find('div.tag_custom_error').length > 0){
    $(element.parent().parent()).find('div.tag_custom_error').remove();
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
*/

$('#back').click(function(){
    var nameformat = /^[a-zA-Z]+[a-zA-Z ]+$/;
    var mailformat = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var username_regex = /^[a-zA-Z0-9][a-zA-Z0-9\-]+[a-zA-Z0-9]$/;
    var name = $("#name").val();
    var lastname = $("#last_name").val();
    var email = $("#email").val();
    var username = $("#username").val();
    var formdata = {name: $("#name").val(), email: $("#email").val()}
    //if ( (name.match(nameformat)) && (email.match(mailformat)) && (username.match(username_regex)) ) {
    if ( (name.match(nameformat)) && (email.match(mailformat)) ) {
        showLoader();
        $.post("/incomplete_registration", formdata)
        .done(function (data) {
            //alert(data);
            window.history.go(-1);
        })
        .fail(function () {
            window.history.go(-1);
        })
        .always(function() {
            hideLoader();
        });
    }
    else {
        window.history.go(-1);
    }
});

/*
$(document).ready(function(){
    $("#back").click(function(){
        nameformat = /^[a-zA-Z]+[a-zA-Z ]+$/;
        mailformat = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        username_regex = /^[a-zA-Z0-9][a-zA-Z0-9\-]+[a-zA-Z0-9]$/;
        name = $("#name").val();
        email = $("#email").val();
        username = $("#username").val();
        formdata = {name: $("#name").val(), email: $("#email").val()}
        if ( (name.match(nameformat)) && (email.match(mailformat)) && (username.match(username_regex)) ) {
            showLoader();
            $.ajax({
                // the URL for the request
                url : '/incomplete_registration',
                // the data to send
                // (will be converted to a query string)
                data : { name_value : name, email_val : email, username_val : username},
                // The request type is GET request
                type : 'POST'
            });
        }
        else {
            window.history.go(-1);
        }
    });     
});
*/
