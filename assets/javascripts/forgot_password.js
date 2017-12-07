/*$("#new_user1").submit(function(event) {
    var flag = true;
    var username = /^[a-zA-Z0-9_-]+$/;
    var un = $("#username").val();
    if (un == "") {
        notify("Username field Blank!", "Username field can't be blank", "error");
        flag = false;
    }
    else if(!un.match(username)) {
        notify("Invalid Username!", "Username not valid", "error");
        flag = false;
    }
    else if (un.length > 255) {
        notify("Invalid Username Length!", "Username length can't be more than 255", "error");
        flag = false;
    }
    if (!flag){
        event.preventDefault();
        return false;
    }
    return true;
});


$("#reset_password").submit(function(event) {
    var flag = true;
    var password1 = /^[\s]*[\S]+[\S\s]*$/
    var password = $("#pwd1").val();
    var confirmPassword = $("#confirm_pwd1").val();

    if (password.length < 8){
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

    if (!flag){
        event.preventDefault();
        return false;
    }
    return true;

});
*/

jQuery(document).ready(function() {
  $.validator.addMethod(
    "regex",
      function(value, element, regexp) {
        var re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
        },
    "Please check your input."
  );
  jQuery('#reset_password').validate({
    errorElement:'div',
    rules: {
      "user[password]":{
        required: true,
        minlength: 8,
        maxlength: 32
      },
      
      "user[password_confirmation]":{
        equalTo:"#pwd1"
      }
    },
    messages: {
      "user[password]":{
        required: "Password field can't be blank",
        minlength: "Password length should be in between 8-32 characters",
        maxlength: "Password length should be in between 8-32 characters"
      },
      
      "user[password_confirmation]":{
        equalTo: "Confirm Password field does not match with New Password"
      }
    }
  });
});

jQuery(document).ready(function() {
  $.validator.addMethod(
    "regex",
      function(value, element, regexp) {
        var re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
        },
    "Please check your input."
  );
  jQuery('#new_user1').validate({
    errorElement:'div',
    rules: {
      "user[username]":{
        required: true,
        remote:'/check_username',
        //regex: "^[a-zA-Z0-9_-]+$",
        maxlength:255
      }

    },
    messages: {
      "user[username]":{
        required: "Username field can't be blank",
        remote: "Username does not exist",
        //regex: "Invalid username",
        maxlength: "Should be less than 63 characters"
      }

    }
  });
});

/*
username_valid = false;
$(document).ready(function(){
  $("#reset_password").click(function () {
      showLoader();
      username_valid = false;
      $.post("/check_username",{username: $("#username").val()})
          .done(function(data) {
              username_valid = (!data)
              $("#new_user1").submit();
          })
          .fail(function () {
              username_valid = false;
          })
          .always(function() {
              hideLoader();
          });
  });
});
*/