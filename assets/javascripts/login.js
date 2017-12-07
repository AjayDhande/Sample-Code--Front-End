/*$("#new_user").submit(function(event) {

    var un = $('#user_username').val();
    var pw = $('#user_password').val();
    var flag = true;

    if (un.length == 0 ) {
        notify("Username blank", "Username can't be blank", "error");
        flag = false;
    }
    if ( pw.length == 0 ) {
        notify("Password blank", "Password can't be blank", "error");
        flag = false;
    }
    if (!flag){
        event.preventDefault();
        return false;
    }
    return true;
});*/


remote_valid = false;

$("#new_user").submit(function(e){
    username(e);
});

$('#user_username').keyup(function(e) {
    removeErrorlogin($('#login_error'));
    remote_valid = false;
    $(".med_search").css("padding-top","0px")
    $(".header-search-area2").css("padding-top","0px")
});

$('#user_password').keyup(function(e) {
    removeErrorlogin($('#login_error'));
    remote_valid = false;
    $(".med_search").css("padding-top","0px")
    $(".header-search-area2").css("padding-top","0px")
});

function username (event) {
    var flag = true;
    var username = $('#user_username').val();
    var password = $('#user_password').val();
    var element = $('#login_error');
    var message = "Invalid Username/Password";

    if(username.length == 0 || password.length == 0){
        addErrorlogin(element,message)
        flag = false;
    }
    else if(username.length != 0 && password.length != 0){
        removeErrorlogin(element)
    }
    else if (!username_valid && event != undefined) {
        addErrorlogin(element,message);
        flag = false;
    }
    if ((!flag && event != undefined) || !remote_valid){
        event.preventDefault();
    }
    if (!remote_valid && flag){
        var data = {};
        data["username"] = username;
        data["password"] = password;
        $.post("/check_valid_credential", data)
            .done(function(data) {
                remote_valid = data
                if (remote_valid)
                    $("#new_user").submit();
                else
                    addErrorlogin(element, message);
            });
    }
    return true;
}

function addErrorlogin(element,message){
    if(!$(element).find('div.tag_custom_error').length > 0){
        $(element).prepend('<div class="tag_custom_error">'+ message + '</div>');
        $(".med_search").css("padding-top","16px")
        $(".header-search-area2").css("padding-top","16px")
        $(element).find('div.tag_custom_error').siblings('div').addClass('set_tag_field');
    }
    $('#user_username').focus();
    setTimeout(function() {
        $(".med_search").css("padding-top","0px")
        $(".header-search-area2").css("padding-top","0px")
        removeErrorlogin(element);
    }, 50000);
}

function removeErrorlogin(element){
    if($(element).find('div.tag_custom_error').length > 0){
        $(element).find('div.tag_custom_error').remove();
    }
}

$(document).ready(function(){
    var containerHeight = $(".container-fix").length;
    if (containerHeight > 1) {
      $($( ".container-fix" ).not(':first')).removeClass("container-fix");
    }

    var headerHeight = $("header").outerHeight();
    $(".container-fix").css("margin-top",  headerHeight + "px");
    $(".modal_window").css("margin-top",  headerHeight + 10 +"px");
});

$(window).resize(function() {
    var headerHeight = $("header").outerHeight();
    $(".container-fix").css("margin-top",  headerHeight + "px");
});

