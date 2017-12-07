jQuery(document).ready(function() {
    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
        var re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );
    jQuery('#news').validate({
    errorElement:'div',
    rules: {
        "usertype": {
          required:true
        },
        "full_name":{
            required:true,
            regex: "^[a-zA-Z ]+$",
            maxlength:255
        },
        "email":{
            required:true,
            email: true,
            remote:'/check_news_letter',
            maxlength:255
        }    
    },
    messages: {
        "usertype":{
          required: "Business/Personal field can't be blank"
        },
        "full_name":{
            required:"Name field can't be blank",
            regex:"Invalid name",
            maxlength:"Should be less than 256 characters"
        },
        "email":{
            required:"Email field can't be blank",
            email:"Invalid Email",
            remote:"Email already exist",
            maxlength:"Should be less than 256 characters"
        }
    }

  });
});

/*function sign () {
  var name = $("#name").val();
  var email = $("#email").val();
  <% unless current_user.present?%>
    var url = "/signup";
  <% else %>
    var url = "/medialist";
  <% end %>
  var params = "?";
  var flag = false;
  if (name.length != 0) {
    params = params + "name=" + name;
    flag = true;
  }
  if (email.length != 0) {
    if (flag)
      params += "&"
    params = params + "email=" + email;
  }
  if (params.length > 1)
    window.location.href = url + params;
  else
    window.location.href = url;
}

function sign1 () {
  var name = $("#name").val();
  var email = $("#email").val();
  <% unless current_user.present?%>
    var url = "/signup1";
  <% else %>
    var url = "/medialist";
  <% end %>
  var params = "?";
  var flag = false;
  if (name.length != 0) {
    params = params + "name=" + name;
    flag = true;
  }
  if (email.length != 0) {
    if (flag)
      params += "&"
    params = params + "email=" + email;
  }
  if (params.length > 1)
    window.location.href = url + params;
  else
    window.location.href = url;
}*/

/*$(function () {
  $("#news").submit(function (event) {
    var self = this;
    var mail_format = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var name_format = /^[a-zA-Z ]+$/;
    var name = $("#news_name").val();
    var email = $("#news_email").val();
    var flag = false;
    if (name.length == 0) {
      notify("Full Name Blank!", "Full name shouldn't blank", "error");
      flag = true;
    }
    else if (!name.match(name_format)){
      notify("Invalid Full Name!", "Full name has invalid character", "error");
      flag = true;
    }
    if (email.length == 0) {
      notify("Email Blank!", "Email shouldn't blank", "error");
      flag = true;
    }
    else if (!email.match(mail_format)){
      notify("Invalid Email!", "Incorrect email format", "error");
      flag = true;
    }
    if (flag){
      event.preventDefault();
      return false;
    }
    showLoader();
    $.post("/news_letter", $(this).serializeArray())
      .done(function (data) {
        if (data)
          notify("News Letter Subscribe Successfully", "&nbsp;", "success");
        else
          notify("Email Already Exist!", "No need to Subscribe", "error");
        self.reset();
      })
      .fail(function () {
        notify("Something wrong", "Contact to Administrator", "error");
      })
      .always(function () {
        hideLoader();
      });
    event.preventDefault();
  });
});
*/
