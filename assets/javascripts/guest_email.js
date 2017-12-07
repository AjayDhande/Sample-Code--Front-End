
$(document).ready(function(){
    $('input[type=radio]').change( function() {
        if ($('#user_registered').is(':checked'))
        {
            $("#guest_user_email").prop('disabled', true);
            $("#email_label").removeClass("required") 
            $("#guest_user_email").val(''); 
            var element = $("#guest_user_email")
            removeError(element)
        }
        if($('#user_guest').is(':checked')) 
        {
            $("#guest_user_email").prop('disabled', false);
            $("#email_label").addClass("required")
        }
    });

    $("#user_email").submit(function(event) {
        var mailformat = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        var p_code = /^[0-9]+$/;
        var flag = true;
        var email = $("#guest_user_email").val();
        var guest_user = $("#user_guest").val();
        var registered_user = $("#user_registered").val();
        var first_name = $("#first_name").val();
        var last_name = $("#last_name").val();
        var address = $("#address").val();
        var address2 = $("#address_2").val();
        var country = $("#country").val();
        var postal_code = $("#postal_code").val();
        var name = /^[a-zA-Z]+[a-zA-Z ]+$/;
         
            if (email == "") {
                var element = $("#guest_user_email")
                if ($(element.parent()).find('div.tag_custom_error').text() == "Please enter a valid Email"){
                 removeError(element)
                } 
                var message = "Email field can't be blank"
                addError(element,message)
                flag = false;
            }
            if (email != "") {
                var element = $("#guest_user_email")
                removeError(element)
            }
            if (!email == "" && !email.match(mailformat)) {
                var element = $("#guest_user_email")
                var message = "Please enter a valid Email"
                addError(element,message)
                flag = false;
            }
            if (!email == "" &&  !(!email.match(mailformat))) {
                var element = $("#guest_user_email")
                removeError(element)
            }
            if (!email == "" &&  !(!email.match(mailformat)) && email.length > 255) {
                var element = $("#guest_user_email")
                var message = "Should be less than 255 characters"
                addError(element,message)
                flag = false;
            }
            if (email.length < 255) {
               var element = $("#guest_user_email")
               if ($(element.parent()).find('div.tag_custom_error').text() == "Should be less than 255 characters"){
                 removeError(element)
               } 
               if (email == "") {
                var message = "Email field can't be blank"
                addError(element,message)
                flag = false;
               }
            }
            if (first_name == "") {
                var element = $("#first_name");
                var message = "First Name can't be blank";
                removeError(element);
                addError(element,message);
                flag = false;
            }
            if (first_name != "") {
                var element = $("#first_name");
                removeError(element);
            }
            if (first_name.length > 255) {
                var element = $("#first_name");
                var message = "Should be less than 255 characters";
                addError(element,message)
                flag = false;
            }
            if (!(first_name == "") && first_name.length < 255) {
                var element = $("#first_name")
                removeError(element);
            }
            if (!(first_name == "") && !first_name.match(name)) {
                var element = $("#first_name");
                var message = "Invalid first name";
                addError(element,message)
                flag = false;
            }
            if (!(first_name == "") && first_name.match(name)) {
                var element = $("#first_name")
                removeError(element);
            }
            if (address == "") {
                var element = $("#address");
                var message = "Address can't be blank";
                removeError(element);
                addError(element,message);
                flag = false;
            }
            if (address != "") {
                var element = $("#address");
                removeError(element);
            }
            if (address.length > 255) {
                var element = $("#address");
                var message = "Should be less than 255 characters";
                addError(element,message)
                flag = false;
            }
            if (!(address == "") && address.length < 255) {
                var element = $("#address")
                removeError(element);
            }
            if (address2.length > 255) {
                var element = $("#address_2");
                var message = "Should be less than 255 characters";
                addError(element,message)
                flag = false;
            }
            if (!(address2 == "") && address2.length < 255) {
                var element = $("#address_2")
                removeError(element);
            }
            if (last_name.length > 255) {
                var element = $("#last_name");
                var message = "Should be less than 255 characters";
                addError(element,message)
                flag = false;
            }
            if (last_name.length < 255) {
                var element = $("#last_name")
                removeError(element);
            }
            if (!(last_name == "") && !last_name.match(name)) {
                var element = $("#last_name");
                var message = "Invalid last name";
                addError(element,message)
                flag = false;
            }
            if (!(last_name == "") && last_name.match(name)) {
                var element = $("#last_name")
                removeError(element);
            }
            if (country.length == 0) {
                var element = $("#country");
                var message = "Country can't be blank";
                removeError(element);
                addError(element,message);
                flag = false;
            }
            if (country.length != 0) {
                var element = $("#country");
                removeError(element);
            }
            if (postal_code == "") {
                var element = $("#postal_code");
                var message = "Postal Code can't be blank";
                removeError(element);
                addError(element,message);
                flag = false;
            }
            if (postal_code != "") {
                var element = $("#postal_code");
                removeError(element);
            }
            if (postal_code.length > 7) {
                var element = $("#postal_code");
                var message = "Should be less than 7 digits";
                addError(element,message)
                flag = false;
            }
            if (!(postal_code == "") && postal_code.length < 7) {
                var element = $("#postal_code")
                removeError(element);
            }
            if (!(postal_code == "") && !postal_code.match(p_code)) {
                var element = $("#postal_code");
                var message = "Invalid Postal Code";
                addError(element,message)
                flag = false;
            }
            if (!(postal_code == "") && postal_code.match(p_code)) {
                var element = $("#postal_code")
                removeError(element);
            }
       
        if (!flag){
            event.preventDefault();
            return false;
        }
        return true;
    });

});


//Purpose: To Add error message for guest email
//Date: 07/01/2015
function addError(element,message){
  if(!$(element.parent()).find('div.tag_custom_error').length > 0){
    $(element.parent()).append('<div class="tag_custom_error">'+ message + '</div>');
    $(element.parent()).find('div.tag_custom_error').siblings('div').addClass('set_tag_field');
  }
}

//Purpose: To Remove error message for guest email
//Date: 07/01/2015
function removeError(element){
  if($(element.parent()).find('div.tag_custom_error').length > 0){
    $(element.parent()).find('div.tag_custom_error').remove();
  }
}

remote_valid = false;

$("#model_login").submit(function(e){
    validateCredential(e);
});

$('#model_username').keyup(function(e) {
    removeErrorModal($('#model_error'));
    remote_valid = false;
});

$('#model_password').keyup(function(e) {
    removeErrorModal($('#model_error'));
    remote_valid = false;
});

function validateCredential (event) {
    var flag = true;
    var username = $('#model_username').val();
    var password = $('#model_password').val();
    var element = $('#model_error');
    var message = "Invalid Username/Password";

    if(username.length == 0 || password.length == 0){
        addErrorModal(element,message)
        flag = false;
    }
    else if(username.length != 0 && password.length != 0){
        removeErrorModal(element)
    }
    else if (!username_valid && event != undefined) {
        addErrorModal(element,message);
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
                if (remote_valid){
                    $("#LoginButton").click();  
                }
                else
                    addErrorModal(element, message);
            });

    }
    return true;
}

function addErrorModal(element,message){
    if(!$(element).find('div.tag_custom_error').length > 0){
        $(element).prepend('<div class="tag_custom_error">'+ message + '</div>');
    }
    $('#user_username').focus();
}

function removeErrorModal(element){
    if($(element).find('div.tag_custom_error').length > 0){
        $(element).find('div.tag_custom_error').remove();
    }
}

var countries = [];
var states = [];


function pairForCitiesOrStates(geonameObj)
{
  var result = Array();
  result[0] = geonameObj["name"];
  result[1] = geonameObj["geonameId"]
  return result;
}

function listOfCountries(elemId)
{
  countries = [];
  var countryGeonameIds = [6255146, 6255152, 6255147, 6255148, 6255149, 6255151, 6255150]
  var count = 0;
  showLoader();
  for(x in countryGeonameIds)
  {
    count++;
    $.getJSON("http://www.geonames.org/childrenJSON?geonameId="+countryGeonameIds[x], function(data){
      count--;
      $.merge(countries,data["geonames"]);
      if (count==0){
        allCountries(elemId);
        hideLoader();
      }
    });
  }
}

function listOfStatesOrCities(elem, elemId)
{
  states = [];
  showLoader();
  $.getJSON("http://www.geonames.org/childrenJSON?geonameId="+$("#"+elem.id+" option:selected").attr('data-role'), function(data){
    states = data["geonames"];
    statesOrCities(elemId);
    hideLoader();
  });
}

function allCountries(elemId)
{
  countries = (countries.map(pairForCitiesOrStates)).sort();
  var top_country = "United States"
  var top_country_code = "6252001"
  var src = document.getElementById(elemId);
  src.options.length = 0;
  document.getElementById('state').options.length = 0;
  document.getElementById('region').options.length = 0;
  document.getElementById('city').options.length = 0;
  var count = countries.length;
  if(count){
    src.options[src.options.length] = new Option('Select','')
    src.options[1] = new Option(top_country, top_country)
    $($("#"+elemId+" > option")[1]).attr('data-role', top_country_code)
  }
  else
    src.options[src.options.length] = new Option('No Data Available','')
  for(var i=0;i<count;i++)
  {
    if (countries[i][0] != top_country) {
      var tmp = countries[i][0];
      var index = src.options.length;
      src.options[index] = new Option(tmp, tmp)
      $($("#"+elemId+" > option")[index]).attr('data-role', countries[i][1]);
    }
  }
  //$(".chosen-select").trigger('chosen:updated');
}

function disable (elemId) {
  var src = document.getElementById(elemId);
  src.options.length = 0;
  src.options[src.options.length] = new Option('No Data Available','')
  src.disabled = true;
}

function disable_for (elemId) {
  disable(elemId);
  if (elemId == 'state') {
    disable('region');
    disable('city');
  }
  else if (elemId == 'region'){
    disable('city');
  }
}

// function truncate (elemId) {
//   var src = document.getElementById(elemId);
//   src.options.length = 0;
//   src.disabled = false;
// }

function statesOrCities(elemId)
{
  if (elemId == 'state') {
    //truncate('region');
   // truncate('city');
  } 
  else if (elemId == 'region'){
    //truncate('city');
  };
  if(typeof states != 'undefined')
  {
    states = (states.map(pairForCitiesOrStates)).sort();
    var src = document.getElementById(elemId);
    src.options.length = 0;
    var count = states.length;
    if(count)
    {
      src.options[src.options.length] = new Option('Select','')
      src.disabled = false;
    }
    else
      disable_for(elemId);
    for(var i=0;i<count;i++)
    {
      var tmp = states[i][0];
      var index = src.options.length;
      src.options[index] = new Option(tmp,tmp);
      $($("#"+elemId+" > option")[index]).attr('data-role', states[i][1]);
    }
  }
  else
    disable_for(elemId);
    //$(".chosen-select").trigger('chosen:updated');
}

window.onload = function() {
    listOfCountries('country');
    //$(".chosen-select").chosen();
    //$(".chosen-select").trigger('chosen:updated');
}

