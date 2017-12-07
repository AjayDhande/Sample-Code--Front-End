
//Purpose: To Validate Manage Organisation Form
//Date: 13/12/2014
$("#edit_organisation_form").submit(function(event) {
    var mailformat = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; 
    var nameformat = /^[a-zA-Z ]+$/;
    var usernameformat = /^[a-zA-Z0-9_-]+$/;
    var flag = true;
    var name = $("input[name='user[name]']").val();
    var email = $("input[name='user[email]']").val();
    var username = $("#username_id").val();
    var password = $("#password_id").val();
    var confirm_password = $("#password_confirmation_id").val();
  
    if (name == "") {
        notify("Name field Blank", "Name field can't be blank", "error");
        flag = false;
    }

    if (!name == "" && !name.match(nameformat)){
        notify("Invalid name","Please enter only character","error");
        flag = false;
    }

    if (name.length > 255) {
        notify("Name too long","Name too long maximum 255 character","error");
        flag = false;
    }

    if (email == "") {
        notify("Email field Blank", "Email field can't be blank", "error");
        flag = false;
    }
    
    if (!email == "" && !email.match(mailformat)) {
        notify("Not a valid Email", "Please enter a valid Email", "error");
        flag = false; 
    }

    if (email.lenght > 255) {
        notify("Not a valid email", "Please enter a valid Email", "error"); 
        flag = false; 
    }

    if (username == "") {
        notify("Username field Blank", "Username field can't be blank", "error");
        flag = false;
    }

    if (!username == "" && !username.match(usernameformat)) {
        notify("Not a valid Username", "Please enter only alphanumeric character ", "error");
        flag = false;
    } 

    if (username.length > 255) {
        notify("Username is too long", "Username too long maximun 255 ", "error");
        flag = false;
    } 
    

    if (password == ""){
        notify("Password field Blank", "Password field can't be blank", "error");
        flag = false;
    }

    if (password.length < 7 || password.length > 32) {
        notify("Password length is not valid", "Password lenght should be between 7 - 32 ", "error");
        flag = false;
    }

    if (confirm_password == ""){
        notify("Confirm Password can't field Blank", "Confirm Password can't be blank", "error");
        flag = false;
    }

    if (confirm_password !== password){
        notify("Password doen't match", "Confirm Password and Password doesn't match", "error");
        flag = false;
    }

    if (!flag){
        event.preventDefault();
        return false;
    }
    return true;
});



//Purpose: To Validate Customer Form
//Date: 14/12/2014
$("#edit_customer_form").submit(function(event) {
    var mailformat = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; 
    var nameformat = /^[a-zA-Z ]+$/;
    var usernameformat = /^[a-zA-Z0-9_-]+$/;
    var flag = true;
    var name = $("input[name='user[name]']").val();
    var email = $("input[name='user[email]']").val();
    var username = $("#username_id").val();
    var password = $("#password_id").val();
    var confirm_password = $("#password_confirmation_id").val();
  
    if (name == "") {
        notify("Name field Blank", "Name field can't be blank", "error");
        flag = false;
    }

    if (!name == "" && !name.match(nameformat)){
        notify("Invalid name","Please enter only character","error");
        flag = false;
    }

    if (name.length > 255) {
        notify("Name too long","Name too long maximum 255 character","error");
        flag = false;
    }

    if (email == "") {
        notify("Email field Blank", "Email field can't be blank", "error");
        flag = false;
    }
    
    if (!email == "" && !email.match(mailformat)) {
        notify("Not a valid Email", "Please enter a valid Email", "error");
        flag = false; 
    }

    if (email.lenght > 255) {
        notify("Not a valid email", "Please enter a valid Email", "error"); 
        flag = false; 
    }

    if (username == "") {
        notify("Username field Blank", "Username field can't be blank", "error");
        flag = false;
    }

    if (!username == "" && !username.match(usernameformat)) {
        notify("Not a valid Username", "Please enter only alphanumeric character ", "error");
        flag = false;
    } 

    if (username.length > 255) {
        notify("Username is too long", "Username too long maximun 255 ", "error");
        flag = false;
    } 
    

    if (password == ""){
        notify("Password field Blank", "Password field can't be blank", "error");
        flag = false;
    }

    if (password.length < 7 || password.length > 32) {
        notify("Password length is not valid", "Password lenght should be between 7 - 32 ", "error");
        flag = false;
    }

    if (confirm_password == ""){
        notify("Confirm Password can't field Blank", "Confirm Password can't be blank", "error");
        flag = false;
    }

    if (confirm_password !== password){
        notify("Password doen't match", "Confirm Password and Password doesn't match", "error");
        flag = false;
    }

    if (!flag){
        event.preventDefault();
        return false;
    }
    return true;
});

//Purpose: To Validate Independent Speaker Form
//Date: 14/12/2014
$("#edit_independent_speaker_form").submit(function(event) {
    var mailformat = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; 
    var nameformat = /^[a-zA-Z ]+$/;
    var usernameformat = /^[a-zA-Z0-9_-]+$/;
    var flag = true;
    var name = $("input[name='user[name]']").val();
    var email = $("input[name='user[email]']").val();
    var username = $("#username_id").val();
    var password = $("#password_id").val();
    var confirm_password = $("#password_confirmation_id").val();
  
    if (name == "") {
        notify("Name field Blank", "Name field can't be blank", "error");
        flag = false;
    }

    if (!name == "" && !name.match(nameformat)){
        notify("Invalid name","Please enter only character","error");
        flag = false;
    }

    if (name.length > 255) {
        notify("Name too long","Name too long maximum 255 character","error");
        flag = false;
    }

    if (email == "") {
        notify("Email field Blank", "Email field can't be blank", "error");
        flag = false;
    }
    
    if (!email == "" && !email.match(mailformat)) {
        notify("Not a valid Email", "Please enter a valid Email", "error");
        flag = false; 
    }

    if (email.lenght > 255) {
        notify("Not a valid email", "Please enter a valid Email", "error"); 
        flag = false; 
    }

    if (username == "") {
        notify("Username field Blank", "Username field can't be blank", "error");
        flag = false;
    }

    if (!username == "" && !username.match(usernameformat)) {
        notify("Not a valid Username", "Please enter only alphanumeric character ", "error");
        flag = false;
    } 

    if (username.length > 255) {
        notify("Username is too long", "Username too long maximun 255 ", "error");
        flag = false;
    } 
    

    if (password == ""){
        notify("Password field Blank", "Password field can't be blank", "error");
        flag = false;
    }

    if (password.length < 7 || password.length > 32) {
        notify("Password length is not valid", "Password lenght should be between 7 - 32 ", "error");
        flag = false;
    }

    if (confirm_password == ""){
        notify("Confirm Password can't field Blank", "Confirm Password can't be blank", "error");
        flag = false;
    }

    if (confirm_password !== password){
        notify("Password doen't match", "Confirm Password and Password doesn't match", "error");
        flag = false;
    }

    if (!flag){
        event.preventDefault();
        return false;
    }
    return true;
});

//Purpose: To Validate Chruch Musician Form
//Date: 14/12/2014
$("#edit_church_musician_form").submit(function(event) {
    var mailformat = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; 
    var nameformat = /^[a-zA-Z ]+$/;
    var usernameformat = /^[a-zA-Z0-9_-]+$/;
    var flag = true;
    var name = $("input[name='user[name]']").val();
    var email = $("input[name='user[email]']").val();
    var username = $("#username_id").val();
    var password = $("#password_id").val();
    var confirm_password = $("#password_confirmation_id").val();
  
    if (name == "") {
        notify("Name field Blank", "Name field can't be blank", "error");
        flag = false;
    }

    if (!name == "" && !name.match(nameformat)){
        notify("Invalid name","Please enter only character","error");
        flag = false;
    }

    if (name.length > 255) {
        notify("Name too long","Name too long maximum 255 character","error");
        flag = false;
    }

    if (email == "") {
        notify("Email field Blank", "Email field can't be blank", "error");
        flag = false;
    }
    
    if (!email == "" && !email.match(mailformat)) {
        notify("Not a valid Email", "Please enter a valid Email", "error");
        flag = false; 
    }

    if (email.lenght > 255) {
        notify("Not a valid email", "Please enter a valid Email", "error"); 
        flag = false; 
    }

    if (username == "") {
        notify("Username field Blank", "Username field can't be blank", "error");
        flag = false;
    }

    if (!username == "" && !username.match(usernameformat)) {
        notify("Not a valid Username", "Please enter only alphanumeric character ", "error");
        flag = false;
    } 

    if (username.length > 255) {
        notify("Username is too long", "Username too long maximun 255 ", "error");
        flag = false;
    } 
    

    if (password == ""){
        notify("Password field Blank", "Password field can't be blank", "error");
        flag = false;
    }

    if (password.length < 7 || password.length > 32) {
        notify("Password length is not valid", "Password lenght should be between 7 - 32 ", "error");
        flag = false;
    }

    if (confirm_password == ""){
        notify("Confirm Password can't field Blank", "Confirm Password can't be blank", "error");
        flag = false;
    }

    if (confirm_password !== password){
        notify("Password doen't match", "Confirm Password and Password doesn't match", "error");
        flag = false;
    }

    if (!flag){
        event.preventDefault();
        return false;
    }
    return true;
});



//Purpose: To Validate Subscription plan form
//Modified by: Vikash Kr. Singh
//Date: 14/12/2014
var submit = false;
$("#add_plan_subscriptions").submit(function(event) {
    var flag = true;
    var subscription_name = $("#subscription_name").val();
    var amount = $("#plan_amount").val();
    var plan_details = $("#plan_description").val();
    var plan_type_id = $("select[name='plan[plan_type_id]']").val();
    var subdomain_type_id = $("select[name='plan[subdomain_type_id]']").val();


    var subscription_name_format = /^[a-zA-Z 0-9_-]+$/;
    var amount_format = /^[+-]?\d+(\.\d+)?$/;

    if (subscription_name == "") {
        notify("Subscription field Blank", "Subscription field can't be blank", "error");
        flag = false;
    }

    if (subscription_name.length > 50) {
        notify("Subscription name too long", "Subscription name should be maximum of 50 chracters", "error");
        flag = false;
    }

    if (!subscription_name == "" && !subscription_name.match(subscription_name_format)) {
        notify("Invalid name format", "Only alphanumeric character are allowed", "error");
        flag = false;
    }
    
    if (plan_type_id =="" ){
        notify("Plan is not selected", "Please select plan it can't be blank", "error");
        flag = false; 
    }

    if (subdomain_type_id =="" ){
        notify("Subdomain type is not selected", "Please select subdomain type it can't be blank", "error");
        flag = false; 
    }
     //Purpose: To  check for duplicate record through ajax
    if (!subscription_name == ""){
        if (!submit)
            $.ajax({
                // the URL for the request
                url : 'check_duplicate_plan',
                // the data to send
                // (will be converted to a query string)
                data : { plan_name : subscription_name},
                // The request type is GET request
                type : 'GET',

                complete:   function() {
                            //alert("Ajax Complete!");
                          },
                success:    function(data, textStatus, xhr)   {
                          //do something with the response here
                                if (data == false){
                                    notify("Duplicate subscription", "Plan subscription already exist ", "error");
                                    flag = false;
                                    submit = false
                                }
                                else
                                {
                                    submit = true;
                                    $("#add_plan_subscriptions").submit();
                                }                                                         
                          },
                error:      function() {
                            submit = false;
                            alert("Ajax Error !");
                          }
            });
    }
    if (amount == ""){
        notify("Amount field Blank", "Amount field can't be blank", "error");
        flag = false; 
    }

    if (amount < 0){
        notify("Amount field negative", "Amount field can't be negative", "error");
        flag = false; 
    }

    if (!amount == "" && !amount.match(amount_format)) {
        notify("Invalid Amount", "Please enter a valid amount", "error");
        flag = false; 
    }

    if (plan_details == ""){
        notify("Plan Description field Blank", "Plan Description field can't be blank", "error");
        flag = false; 
    }
    else if (plan_details.length > 150){
        notify("Plan Description field exceed the limit", "Plan Description field can't more than 150 characters", "error");
        flag = false; 
    }

    if (!flag){
        event.preventDefault();
        return false;
    }
    if (!submit)
    {
      event.preventDefault();
      return false;
    }
    return true;
});

$("#subscription_name").change(function () {
    submit = false;
});
