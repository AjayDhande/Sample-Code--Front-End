//Updated By: SneWan, On: 18/07/16
jQuery(document).ready(function() {
    $( "#buisness_dob" ).datepicker({  changeMonth: true,
            changeYear: true,
            dateFormat : 'dd/mm/yy',
            yearRange: '-100:+0'});
    $( "#dob" ).datepicker({  changeMonth: true,
            changeYear: true,
            dateFormat : 'dd/mm/yy',
            yearRange: '-100:+0'});
  $.validator.addMethod(
    "regex",
      function(value, element, regexp) {
        var re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
        },
    "Please check your input."
  );
  jQuery('#update_church_account').validate({
    errorElement:'div',
    rules: {
      "church[name]":{
        required:true,
        regex:"^[a-zA-Z. ]+$",
        maxlength:255
      },
      //Added last name validation for user
      "church[last_name]":{
        required:true,
        regex:"^[a-zA-Z. ]+$",
        maxlength:255
      },
      "church[email]":{
        required:true,
        email: true,
        maxlength:255
      },
      "subdomain_email":{
        required:true,
        email: true,
        maxlength:255
      },      
      "church[password]":{
        minlength:8,
        maxlength:32
      },
      "church[confirm_password]":{
        equalTo:"#pwd"
      },
      "address[street1]":{
        //required:true,
        maxlength:255
      },
      "address[street2]":{
        maxlength:255 
      },
      "address[city]":{
        //required:true,
        regex: "^[^0-9]+$",
        maxlength:255
      },
      "address[state]":{
        //required:true,
        regex: "^[^0-9]+$",
        maxlength:255
      },
      "address[postal_code]":{
        required:true,
        regex: "^[0-9]+$",
        maxlength:7
      },
      "address[country]":{
        required:true,
        regex: "^[^0-9]+$",
        maxlength:255
      }
    },
    messages: {
      "church[name]":{
        //Updated message of first name 
        required:"First Name can't be blank",
        regex:"Invalid First Name",
        maxlength:"Should be less than 256 characters"
      },
      //Added last name validation for user
      "church[last_name]":{
        required:"Last Name can't be blank",
        regex:"Invalid Last Name",
        maxlength:"Should be less than 256 characters"
      },
      "church[email]":{
        required: "Email can't be blank",
        email:"Invalid email address",
        maxlength:"Should be less than 256 characters"
      },
      "subdomain_email":{
        required: "Business email can't be blank",
        email:"Invalid business email address",
        maxlength:"Should be less than 256 characters"
      },
      "church[password]":{
        minlength:"Password length should be in between 8-32 characters",
        maxlength:"Password length should be in between 8-32 characters"
      },
      "church[confirm_password]":{
        equalTo:"Confirm password field does not match with password"
      },
      "address[street1]":{
        //required:"Address Street1 can't be blank",
        maxlength:"Should be less than 256 characters"
      },
      "address[street2]":{
        maxlength:"Should be less than 256 characters"
      },
      "address[city]":{
        //required:"City can't be blank",
        regex:"Invalid city",
        maxlength:"Should be less than 256 characters"
      },
      "address[state]":{
        //required:"State can't be blank",
        regex:"Invalid state",
        maxlength:"Should be less than 256 characters"
      },
      "address[postal_code]":{
        required:"Postal code can't be blank",
        regex:"Invalid postal code",
        maxlength:"Should be less than 7 digits"
      },
      "address[country]":{
        required:"Country can't be blank",
        regex:"Invalid country",
        maxlength:"Should be less than 256 characters"
      }
    }
  });
});
//Purpose: To provide a validation to bank account form.
//Created by: AshNag
//Date: 20/06/2016
$(document).ready(function () {
    $('#add_bank_account_form').validate({ // initialize the plugin
        rules: {
            "submerchant_accounts[account_number]": {
                required: true,
                regex: "^[0-9]+$",
                maxlength: 50
            },
            "submerchant_accounts[first_name]": {
              required:true,
              regex:"^[a-zA-Z. ]+$",
              maxlength:100
            },
            "submerchant_accounts[last_name]": {
              required:true,
              regex:"^[a-zA-Z. ]+$",
              maxlength:100
            },
            "submerchant_accounts[street_address]": {
              required:true,
              // regex:"^[a-zA-Z. ]+$",
              maxlength:255
            },
            "submerchant_accounts[locality]": {
              required:true,
              regex:"^[a-zA-Z. ]+$",
              maxlength:255
            },
            "submerchant_accounts[region]": {
              required:true,
              regex:"^[a-zA-Z. ]+$",
              maxlength:255
            },
            "submerchant_accounts[postal_code]": {
              required:true,
              regex:"^[a-zA-Z0-9-]*$",
              maxlength:9
            },
            "submerchant_accounts[routing_number]": {
                required: true,
                regex: "^[0-9]+$",
                maxlength: 50
            },
            "submerchant_accounts[dob]":{
              required:true
            }
        },
        messages: {
      "submerchant_accounts[account_number]":{
        required:"Account Number can't be blank",
        regex:"Invalid Account Number ",
        maxlength:"Should be less than 50 digits"
      },
      "submerchant_accounts[routing_number]":{
        required: "Routing Number can't be blank",
        regex:"Invalid Routing Number",
        maxlength:"Should be less than 50 digits"
      },
      "submerchant_accounts[first_name]":{
        required: "First Name can't be blank",
        regex:"Invalid First Name",
        maxlength:"Should be less than 255 characters"
      },
       "submerchant_accounts[last_name]":{
        required: "Last Name can't be blank",
        regex:"Invalid Last Name",
        maxlength:"Should be less than 255 characters"
      },
       "submerchant_accounts[street_address]":{
        required: "Street Address can't be blank",
        regex:"Invalid Street Address",
        maxlength:"Should be less than 255 characters"
      },
      "submerchant_accounts[locality]":{
        required: "Locality can't be blank",
        regex:"Invalid Locality",
        maxlength:"Should be less than 255 characters"
      },
      "submerchant_accounts[region]":{
        required: "State can't be blank",
        regex:"Invalid State",
        maxlength:"Should be less than 255 characters"
      },
      "submerchant_accounts[postal_code]":{
        required: "Postal Code can't be blank",
        maxlength:"Should be 5 or 9 alphanumeric digits,"
      },
      "submerchant_accounts[dob]":{
        required:"Date of Birth can't be blank"
      }
    }
  });



    $('#add_business_account_form').validate({ // initialize the plugin
        rules: {
            "submerchant_accounts[account_number]": {
                required: true,
                regex: "^[0-9]+$",
                maxlength: 50
            },
            "submerchant_accounts[first_name]": {
              required:true,
              regex:"^[a-zA-Z. ]+$",
              maxlength:100
            },
            "submerchant_accounts[last_name]": {
              required:true,
              regex:"^[a-zA-Z. ]+$",
              maxlength:100
            },
            "submerchant_accounts[legal_name]": {
              required:true,
              regex:"^[a-zA-Z. ]+$",
              maxlength:100
            },
            "submerchant_accounts[tax_id]": {
              required:true,

              maxlength:100
            },
            "submerchant_accounts[street_address]": {
              required:true,
              // regex:"^[a-zA-Z. ]+$",
              maxlength:255
            },
            "submerchant_accounts[locality]": {
              required:true,
              regex:"^[a-zA-Z. ]+$",
              maxlength:255
            },
            "submerchant_accounts[region]": {
              required:true,
              regex:"^[a-zA-Z. ]+$",
              maxlength:255
            },
            "submerchant_accounts[postal_code]": {
              required:true,
              regex:"^[a-zA-Z0-9-]*$",
              maxlength:9
            },
            "submerchant_accounts[routing_number]": {
                required: true,
                regex: "^[0-9]+$",
                maxlength: 50
            },
            "submerchant_accounts[dob]":{
              required:true
            }
        },
        messages: {
      "submerchant_accounts[account_number]":{
        required:"Account Number can't be blank",
        regex:"Invalid Account Number ",
        maxlength:"Should be less than 50 digits"
      },
      "submerchant_accounts[routing_number]":{
        required: "Routing Number can't be blank",
        regex:"Invalid Routing Number",
        maxlength:"Should be less than 50 digits"
      },
      "submerchant_accounts[tax_id]":{
        required: "Tax ID can't be blank",
     
        maxlength:"Should be less than 50 digits"
      },
      "submerchant_accounts[first_name]":{
        required: "First Name can't be blank",
        regex:"Invalid First Name",
        maxlength:"Should be less than 255 characters"
      },
       "submerchant_accounts[last_name]":{
        required: "Last Name can't be blank",
        regex:"Invalid Last Name",
        maxlength:"Should be less than 255 characters"
      },
       "submerchant_accounts[legal_name]":{
        required: "Buisness Name can't be blank",
        regex:"Invalid Buisness Name",
        maxlength:"Should be less than 255 characters"
      },
       "submerchant_accounts[street_address]":{
        required: "Street Address can't be blank",
        regex:"Invalid Street Address",
        maxlength:"Should be less than 255 characters"
      },
      "submerchant_accounts[locality]":{
        required: "Locality can't be blank",
        regex:"Invalid Locality",
        maxlength:"Should be less than 255 characters"
      },
      "submerchant_accounts[region]":{
        required: "State can't be blank",
        regex:"Invalid State",
        maxlength:"Should be less than 255 characters"
      },
      "submerchant_accounts[postal_code]":{
        required: "Postal Code can't be blank",
        maxlength:"Should be 5 or 9 alphanumeric digits,"
      },
      "submerchant_accounts[dob]":{
        required:"Date of Birth can't be blank"
      }
    }
  });
  });

  var value11;
  var value14;
  $("#add_bank_account_form").on('submit', function(e){
    e.preventDefault();
    if ($("#add_bank_account_form").valid()){
      var data = {
        first_name: $("#first_name").val(),
        last_name: $("#last_name").val(),
        phone: $("#number").val(),
        street_address: $("#street_address").val(),
        locality: $("#locality").val(),
        region: $("#region").val(),
        postal_code: $("#postal_code").val(),
        account_number: $("#account_number").val(),
        routing_number: $("#routing_number").val(),
        date_of_birth: $("#dob").val(),
      };
      $.ajax({
        type: "POST",
        url: "/submerchant_account/create",             
        data: $.param({ submerchant_accounts: data}),
        success: function(data){
          value12 = [];
         if (data.errors){
           value11 = data.errors;
           for (i = 0; i < value11.length; i++) { 
              if (value11[i].match("region")!= null)
              {

                a = value11[i].match("region");
                value12.push(value11[i].replace(a[0],'state'));
              
              }
              else
              {
                value12.push(value11[i]);
              }
            }
          alert(value12);
         }
         else{
          window.location.href= "/my_account/#brand_new_messages"
         }
        }
      }); 
    } 
  });

$("#add_business_account_form").on('submit', function(e){
    e.preventDefault();
     if ($("#add_business_account_form").valid()){
      var data = {
        first_name: $("#buisness_first_name").val(),
        last_name: $("#buisness_last_name").val(),
        date_of_birth: $("#buisness_dob").val(),
        phone: $("#buisness_number").val(),
        legal_name: $("#business_name").val(),
        tax_id: $("#business_tax_id").val(),
        street_address: $("#buisness_street_address").val(),
        locality: $("#buisness_locality").val(),
        region: $("#buisness_region").val(),
        postal_code: $("#buisness_postal_code").val(),
        account_number: $("#buisness_account_number").val(),
        routing_number: $("#buisness_routing_number").val(),
       };
      $.ajax({
        type: "POST",
        url: "/submerchant_account/create",             
        data: $.param({ submerchant_accounts: data}),
        success: function(data){
           value13 = [];
         if (data.errors){
          value14 = data.errors;
           for (i = 0; i < value14.length; i++) { 
              if (value14[i].match("region")!= null)
              {
                b = value14[i].match("region");
                value13.push(value14[i].replace(b[0],'state'));
              }
              else
              {
                value13.push(value14[i]);
              }
            }
          alert(value13);
         }
         else{
          window.location.href= "/my_account/#brand_new_messages"
         }
        }
      });
    }
  });

$(document).ready(function(){
  $("#date_of_birth").datepicker({ dateFormat: 'yy-mm-dd' });
})
function validate_url(){
    var flag = true;
    var facebook_url = $('#facebook_url').val();
    var twitter_url = $('#twitter_url').val();
    var facebook_regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)(facebook|fb)+\.com(:[0-9]{1,5})?(\/.*)?$/
    var twitter_regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)(twitter)+\.com(:[0-9]{1,5})?(\/.*)?$/
    if(facebook_url == "" && twitter_url == ""){
      var element = $('.promotion-sharing');
      var message = "Please enter your site's facebook or twitter URL";
      addError1(element,message)
      flag = false;
    }
    else {
      var element = $('.promotion-sharing');
      removeError1(element)
    };
    if (!(facebook_url=="") && !(facebook_url.match(facebook_regex))) {
      var element = $('#facebook_url')
      var message = "Invalid facebook URL"
      addError1(element,message)
      flag = false;
    }
    else if (facebook_url.length > 255) {
      var element = $('#facebook_url');
      var message = "Can't be more than 255 characters";
      addError1(element,message)
      flag = false;
    }
    else {
      var element = $('#facebook_url')
      removeError1(element)
    };
    if (!( twitter_url=="") && !(twitter_url.match(twitter_regex))) {
      var element = $('#twitter_url');
      var message = "Invalid twitter URL";
      addError1(element,message)
      flag = false;
    }
    else if (twitter_url.length > 255) {
      var element = $('#twitter_url');
      var message = "Can't be more than 255 characters";
      addError1(element,message)
      flag = false;
    }
    else {
      var element = $('#twitter_url');
      removeError1(element)
    };
    if (!flag){
        event.preventDefault();
        return false;
    }    
    $('#promotion_url_form').submit();
    return true;
}



//Purpose: To Custom function for terms of cancelation check-box validation.
//Created by: Prity Singh
//Date: 07/01/2015
//Updated by: SneWan, to add reason for deactvation field
//Date: 29/07/2016
$("#cancel_account_form").submit(function(event) {
    var flag = true;
    var feedback = $('#feedback_text'). val();
    var reason= $('#reason').val();
    var checked = $('#terms_of_cancelation').prop('checked');
    if(!checked){
      var element = $('#terms_of_cancelation')
      var message = "You have to agree to our terms of cancellation"
      addError1(element,message)
      flag = false;
    }
    else {
      var element = $('#terms_of_cancelation')
      removeError1(element)
    };
    if (feedback == ""){
      var element = $('#feedback_text')
      var message = "Feedback field can't be blank."
      addError1(element,message)
      flag = false;
    }
    else {
      var element = $('#feedback_text')
      removeError1(element)
    };
    if (reason == "0" || reason == "" ){
      var element = $('#reason')
      var message = "Please select reason field."
      addError1(element,message)
      flag = false;
    }
    else {
      var element = $('#reason')
      removeError1(element)
    };
    if (!flag){
        event.preventDefault();
        return false;
    }
    return true;
});

//Purpose: To Add error message for Plans
//Date: 07/01/2015
function addError1(element,message){
  if(!$(element.parent()).find('div.tag_custom_error').length > 0){
    $(element.parent()).append('<div class="tag_custom_error">'+ message + '</div>');
    $(element.parent()).find('div.tag_custom_error').siblings('div').addClass('set_tag_field');
  }
}

//Purpose: To Remove error message for Plans
//Date: 07/01/2015
function removeError1(element){
  if($(element.parent()).find('div.tag_custom_error').length > 0){
    $(element.parent()).find('div.tag_custom_error').remove();
  }
}

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


$("#update_church_account").submit(function(event){
  var flag = true;
  var password = $('#pwd').val();
  if(password.length > 0 && password.trim() == ""){
   var element = $('#pwd')
   var message = "Only white spaces not allowed"
   addError(element,message)
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

back_button = true;

$(document).ready(function(){
    $(".myaccount_tab").click(function(e, hashValue, stop_a){
      stop_a = typeof stop_a !== 'undefined' ? stop_a : false;
      back_button = false;
        value = $(this).attr('value');
        if (value != "statistics" && value != "total_users" && window.location.pathname != "/get_statistic_overview" && window.location.pathname != "/total_users" && window.location.pathname != "/support" ) {
          showLoader();
        $.ajax({
            // the URL for the request
            url : '/switch_tab',
            // the data to send
            // (will be converted to a query string)
            data : { selected_tab : value, hashValue: (hashValue === undefined ? false : true) },
            // The request type is GET request
            type : 'POST'
        })
        .always(function() {
          if(!(hashValue === undefined)){
            var hashPrams = window.location.hash.slice(1).split(";");
            if (hashPrams.length > 1) {
              if (parseInt(hashPrams[5]) === NaN)
                hashPrams[5] = 1;
              $("select[name='search_by']").val(hashPrams[1]);
              $("input[name='search_text']").val(hashPrams[2]);
              $("input[name='order_by']").val(hashPrams[3]);
              $("input[name='order']").val(hashPrams[4]);
              $("input[name='page']").val(hashPrams[5]);
              $("form[action='/brand_new_messsages']").submit();
            };
          };
          back_button = true;
        });
      }
      if (hashValue !== undefined)
        return false;
    });

    setTimeout(function(){
        if (window.location.href.search("theme") > 0)
            $(".myaccount_tab[value='theme_management']").click();
    }, 500);
    setTimeout(function(){
        if (window.location.href.search("brand_new_messages") > 0){
          if(window.location.hash.slice(1).split(";").length > 1)
            $(".myaccount_tab[value='brand_new_messages']").trigger("click", [window.location.hash]);
          else
            $(".myaccount_tab[value='brand_new_messages']").trigger("click");
        }
    }, 500);
    setTimeout(function(){
        if (window.location.hash.search("brand_new_promotion") > 0)
            $(".myaccount_tab[value='brand_new_promotion']").click();
    }, 500);
});

function set_search_hash () {
  window.location.hash = "#brand_new_messages;"+ $("select[name='search_by']").val() + ";" + $("input[name='search_text']").val() + ";" + $("input[name='order_by']").val() + ";" + $("input[name='order']").val() + ";" + $("input[name='page']").val();
};

function tab_click (hashValue) {
  if ($(".go_search").length < 1) {
    if(window.location.hash.slice(1).split(";").length > 1)
      $(".myaccount_tab[value='brand_new_messages']").trigger("click", [window.location.hash]);
    else
      $(".myaccount_tab[value='brand_new_messages']").trigger("click");
    return;
  };
  showLoader();
  if(!(hashValue === undefined)){
    var hashPrams = window.location.hash.slice(1).split(";");
    if (hashPrams.length > 1) {
      if (parseInt(hashPrams[5]) === NaN)
        hashPrams[5] = 1;
      $("select[name='search_by']").val(hashPrams[1]);
      $("input[name='search_text']").val(hashPrams[2]);
      $("input[name='order_by']").val(hashPrams[3]);
      $("input[name='order']").val(hashPrams[4]);
      $("input[name='page']").val(hashPrams[5]);
      $(".go_search").click();
    };
  }
  else
    $(".myaccount_tab[value='brand_new_messages']").trigger("click");
}



$("button[data-role='change']").click(function() {
    $(".Monthly-Pricing-two").hide();
    $("#plans").html("");
    var id = $(this).attr("data-id");
    if (subdomain_types_and_plans[id].length == 0) {
        $("#plans").html("<h3 class='error' style='margin-left: 10px'>No Plan Available</h3>");
    }
    else {
        var send_id = $(this).attr("data-shot");
        $.each(subdomain_types_and_plans[id], function(index, value) {
            $("#plans").append($("#subdomain_plans_"+id+"_"+value).html());
        });
        $("#plans").attr("data-subdomain", send_id);
    }
    $(".Monthly-Pricing-two").show();
});

function link_click(elem) {
    showLoader();
    window.location.href = "/" + $("#plans").attr("data-subdomain") + $(elem).attr("data-href");
}

/*$(document).ready(function(){  
  $(".search_admin_user").click(function(){
      $.ajax({
          url : '/search_user',
          type : 'POST'
      });  
  });
});*/

function set_default_hash (hashValue) {
  if (window.location.href.search("/my_account") > 0 && window.location.hash=="") {
    window.location.href += ("#" + (hashValue || "ChurchAccountInfo"));
  };
}

$(document).ready(function(){
  set_default_hash("ChurchAccountInfo");
    if($("#my_account_link").length > 0)
        $("#my_account_link").click(function (argument) {
            $("[value='brand_new_promotion']").click();
        });
    $(".the_tab").click(function(){
        value = $(this).attr('value')
        window.location.href="my_account/#"+value
    });
});

/*function toggle_player(elem) {
    window.elem_lock = $(elem).next()[0];
    $('audio').map(stop_now);
    var span = $($(elem).children()[0]);
    if ($(elem).next()[0].currentTime != 0) {
        $(elem).next()[0].pause();
        $(elem).next()[0].currentTime = 0;
        span.removeClass("glyphicon-stop").addClass("glyphicon-play");
    } else {
        span.removeClass("glyphicon-play").addClass("glyphicon-stop");
        $(elem).next()[0].play();
    }
}
function player_end (elem) {
    $($(elem).prev().children()[0]).removeClass("glyphicon-stop").addClass("glyphicon-play");
    elem.currentTime = 0;
}

function stop_now (key,elem) {
    if (elem != window.elem_lock){
        elem.pause();
        elem.currentTime = 0;
        $($(elem).prev().children()[0]).removeClass("glyphicon-stop").addClass("glyphicon-play");
    }
}*/

function toggle_player(elem) {
    var span = $(elem);
    var hasClass = span.hasClass('glyphicon-stop');
    //$('audio').map(stop_now);
    var audios = $('audio');
    //audios.trigger('pause');
    for(var i = 0; i < audios.length; i++){
      if (!audios[i].paused){
        audios[i].pause();
        audios[i].currentTime = 0;
        $(audios[i]).prev().removeClass("glyphicon-stop").addClass("glyphicon-play");
      }
    }
    var audio = $(elem).parent().find('audio');
    if (hasClass) {
        audio.trigger('pause');
        audio.prop('currentTime', 0);
        span.removeClass("glyphicon-stop").addClass("glyphicon-play");
    } else {
        audio.trigger('play');
        span.removeClass("glyphicon-play").addClass("glyphicon-stop");
    }
}

function player_end (elem) {
  $(elem).prev().removeClass("glyphicon-stop").addClass("glyphicon-play");
  $(elem).trigger('pause');
  $(elem).prop('currentTime', 0);
}

$(".pointer").click(function(e){
  $.ajax({
    // the URL for the request
    url : '/billing_description',
    // the data to send
    // (will be converted to a query string)
    data : { transaction_id : $(e.target).attr("data-transaction") },
    // The request type is GET request
    type : 'GET'
  })
  .done(function(response) {
    $('#update_area').html(response);
  });
});


$(".myAccount_tab5").click(function(){
  value = $(this).attr('name')
  window.location.href="/my_account#"+value
});
setTimeout(function(){ 
  if (window.location.href.search("#ChurchAccountInfo") > 0)
    $("a[href='#ChurchAccountInfo']").click();
  if (window.location.href.search("#AdminControl") > 0)
    $("a[href='#AdminControl']").click();
  if (window.location.href.search("#YourChurchPlane") > 0)
    $("a[href='#YourChurchPlane']").click();
  if (window.location.href.search("#CancelYourAccount") > 0)
    $("a[href='#CancelYourAccount']").click();
}, 10);

$(window).on('hashchange', function(e){
  open_url();
});

function tab_navigator (hashValue) {
  var elem = $("a[href='#"+hashValue+"']");
    if (elem.length == 0){
      window.location.href = window.location.origin+window.location.pathname;
      window.location.reload();
    }
    else{
      elem.click();
    }
}

function open_url(){
  if (window.location.href.search("#ChurchAccountInfo") > 0){
    tab_navigator("ChurchAccountInfo");
  }
  if (window.location.href.search("#AdminControl") > 0){
    tab_navigator("AdminControl");
  }
  if (window.location.href.search("#YourChurchPlane") > 0){
    tab_navigator("YourChurchPlane");
  }
  if (window.location.href.search("#CancelYourAccount") > 0){
    tab_navigator("CancelYourAccount");
  }
  else
    back_functionality_simulator();
}

function back_functionality_simulator () {
  if (back_button){
    setTimeout(function(){
      if (window.location.href.search("theme") > 0)
        $(".myaccount_tab[value='theme_management']").click();
    }, 500);
    setTimeout(function(){
      if (window.location.href.search("brand_new_messages") > 0){
        if(window.location.hash.slice(1).split(";").length > 1)
            tab_click(window.location.hash);
          else
            tab_click();
      }
    }, 500);
    setTimeout(function(){
      if (window.location.href.search("brand_new_promotion") > 0)
        $(".myaccount_tab[value='brand_new_promotion']").click();
    }, 500);
  }
};
/*
function show_hide(event){
  var target = event.target || event.srcElement;
  if (target.innerHTML == "More Details"){
    target.style.visibility = 'hidden';
    target.innerHTML = "Close"
    target.style.visibility = 'visible';
    target.parentElement.nextElementSibling.removeAttribute("hidden");
  }
  else{
    target.style.visibility = 'hidden';
    target.innerHTML = "More Details"
    target.style.visibility = 'visible';
    target.parentElement.nextElementSibling.setAttribute("hidden", "hidden");
  }
}
*/
/*
function stop_now (key,elem) {
  if (elem != window.elem_lock[0]){
    $(elem).trigger('pause');
    $(elem).prop('currentTime', 0);
    $(elem).prev().removeClass("glyphicon-stop").addClass("glyphicon-play");
  }
}
*/
