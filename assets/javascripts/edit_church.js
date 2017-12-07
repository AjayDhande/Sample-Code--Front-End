jQuery(document).ready(function() {
    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
        var re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );
    jQuery('#edit_church_musician_form').validate({
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