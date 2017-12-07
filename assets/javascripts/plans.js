 
jQuery(document).ready(function() {
  $.validator.addMethod(
    "regex",
      function(value, element, regexp) {
        var re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
        },
    "Please check your input."
  );


  jQuery("#add_plan_subscriptions").validate({
    errorElement:'div',
    rules: {
      "plan[plan_name]":{
        required:true,
        remote:'check_duplicate_plan',
        regex:'^[a-zA-Z 0-9_-]+$',
        maxlength:255
      },
      "plan[plan_amount]":{
        required:true,
        number: true,
        min: 0,
        maxlength:255
      },
      "plan[plan_description]":{
        required:true,
        maxlength:255
      }
    },
    messages: {
      "plan[plan_name]":{
        required:"Subscription name field can't be blank",
        remote:"Subscription name already created",
        regex:"Please enter only alphanumeric character",
        maxlength:"Should be less than 255"
      },
      "plan[plan_amount]":{
        required:"Amount field can't be blank",
        number:"Please enter a valid amount",
        min:"Amount can't be negative value",
        maxlength:"Should be less than 255"
      },
      "plan[plan_description]":{
        required:"Please enter plan description",
        maxlength:"Should be less than 255"
      }
    } 
  });
});

//Purpose: To Custom function for plan Drop drops invoke on submit
//Date: 07/01/2015
$("#add_plan_subscriptions").submit(function(event) {
    var flag = true;
    var subdomain_val = $('[name="plan[subdomain_type_id]"]').val();
    var plan_val = $('[name="plan[plan_type_id]"]').val();
    if(subdomain_val == ""){
       var element = $('[name="plan[subdomain_type_id]"]')
       var message = "Please select user type"
       addError(element,message)
      flag = false;
    } 
    if(subdomain_val != ""){
      var element = $('[name="plan[subdomain_type_id]"]')
      removeError(element)
    }
    if(plan_val == ""){
       var element = $('[name="plan[plan_type_id]"]')
       var message = "Please select plan type"
       addError(element,message)
      flag = false;
    } 
    if(plan_val != ""){
      var element = $('[name="plan[plan_type_id]"]')
      removeError(element)
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

//Purpose: Custom function to hide error message on valid dropdown
//Date: 08/01/2015
$(document).ready(function(){
  $('[name="plan[plan_type_id]"]').on('change',function(element){
    var element = $('[name="plan[plan_type_id]"]');
    var plan_val = $('[name="plan[plan_type_id]"]').val();
    if($(element.parent()).find('div.tag_custom_error').length > 0 && !plan_val == ""){
      $(element.parent()).find('div.tag_custom_error').remove();
    }
  });
  $('[name="plan[subdomain_type_id]"]').on('change',function(element){
    var element = $('[name="plan[subdomain_type_id]"]');
    var subdomain_val = $('[name="plan[subdomain_type_id]"]').val();
    if($(element.parent()).find('div.tag_custom_error').length > 0 && !subdomain_val == ""){
      $(element.parent()).find('div.tag_custom_error').remove();
    }
  });
});

//Purpose: To filter Plan dropdown on the basis of User selection
//Date: 08/01/2015
$(document).ready(function(){
  var subdomain_val = $('[name="plan[subdomain_type_id]"]').val();
  if(!(subdomain_val == "customer" &&  !subdomain_val == "")){
    $("[name='plan[plan_type_id]']").children().last().remove();
    $("[name='plan[plan_type_id]']").trigger("chosen:updated");
  } 
  $('[name="plan[subdomain_type_id]"]').on('change',function(){
    var last_val = $("[name='plan[plan_type_id]']").children().last().text();
    var changed_val = $('[name="plan[subdomain_type_id]"]').val();
    if(changed_val  == "customer" &&  !changed_val  == "" && last_val != "ADDON"){
      $("[name='plan[plan_type_id]']").append('<option value="3">ADDON</option>');
      $("[name='plan[plan_type_id]']").trigger("chosen:updated");
    }
    else if (changed_val != "customer" &&  !changed_val == "" && last_val == "ADDON"){
      $("[name='plan[plan_type_id]']").children().last().remove();
      $("[name='plan[plan_type_id]']").trigger("chosen:updated");
    }
  })
})


jQuery(document).ready(function() {
  $.validator.addMethod(
    "regex",
      function(value, element, regexp) {
        var re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
        },
    "Please check your input."
  );


  jQuery("#grace_period_value").validate({
    errorElement:'div',
    rules: {
      "grace_value":{
        required:true,
        regex:'^[0-9]+$',
        maxlength:255
      }
    },
    messages: {
      "grace_value":{
        required:"Grace Period field can't be blank",
        regex:"Invalid grace period",
        maxlength:"Should be less than 255"
      }
    } 
  });
});

$('.edit_plan_form').submit(function(e) {
  var flag = true;
  var element = e.currentTarget[3];
  var plan_element = e.currentTarget[0];
  var plan_amount = e.currentTarget[3].value;
  var plan_value = /^[+]?(\d*[.])?\d+$/
  var name_regex = /^[a-zA-Z 0-9_-]+$/
  var plan_name = e.currentTarget[0].value;
  if(plan_amount == ""){
    var message = "Plan amount field can't be blank";
    addError($(element),message);
    flag = false;
  }
  if ((plan_amount.length > 0) && (!plan_amount.match(plan_value))){
    var message = "Invalid plan amount";
    addError($(element),message);
    flag = false;
  }
  if (plan_amount > 255) {
    var message = "Should be less than 255";
    addError($(element),message);
    flag = false;
  }
  if(plan_name == ""){
    var message = "Plan name field can't be blank";
    addError($(plan_element),message);
    flag = false;
  }
  if ((plan_name.length > 0) && (!plan_name.match(plan_regex))){
    var message = "Invalid plan name";
    addError($(plan_element),message);
    flag = false;
  }
  if (plan_name > 255) {
    var message = "Should be less than 255";
    addError($(plan_element),message);
    flag = false;
  }
  if (!flag){
    e.preventDefault();
    return false;
  }
  return true;
});