$("#add_subcategory_form").submit(function(event){
  var flag = true;
  var category_name = $("select.chosen-select[name='subcategory[category_id]']").next().find("a").find("span").html()
  if(category_name == "Select"){
   var element = $('#category1')
   var message = "Please select category"
   addError(element,message);
   flag = false;
  }
  if(category_name != "Select"){
      var element = $('#category1')
      removeError(element)
    }
  if (!flag){
        event.preventDefault();
        return false;
  }
    return true;
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
  jQuery('#add_category_form').validate({
    errorElement:'div',
    rules: {
      "category[category_name]":{
        required: true,
        remote: "check_duplicate_category",
        maxlength: 50
      }    
    },
    messages: {
      "category[category_name]":{
        required: "Category field can't be blank",
        remote: "Category has been already taken",
        maxlength: "Should be less than 50"
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
  jQuery('#edit_category_form').validate({
    errorElement:'div',
    rules: {
      "category[category_name]":{
        required: true,
        remote: "edit_category",
        maxlength: 50
      }    
    },
    messages: {
      "category[category_name]":{
        required: "Category field can't be blank",
        remote: "This Category is already taken",
        maxlength: "Should be less than 50 characters"
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
  jQuery('#edit_subcategory_form').validate({
    errorElement:'div',
    rules: {
      "subcategory[subcategory_name]":{
        required: true,
        remote: 'edit_subcategory',
        maxlength: 50
      }    
    },
    messages: {
      "subcategory[subcategory_name]":{
        required: "Subcategory field can't be blank",
        remote: "This subcategory is already taken by the category",
        maxlength: "Should be less than 50 characters"
      }
    }

  });
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
}


var submit = false;
$("#add_subcategory_form").submit(function(event){
  var flag = true;
  var category_name = $('[name="subcategory[category_id]"]').val()
  var subcategory_name = $("#subcategory_name_id").val();
  if (subcategory_name == ""){
      var element = $("#subcategory_name_id")
      var message = "Subcategory field can't be blank"
      addError(element,message)
      flag = false;
  }
  if(subcategory_name.length > 0 && subcategory_name.trim() == ""){
      var element = $('#subcategory_name_id')
      var message = "Subcategory field can't be blank"
      addError(element,message);
      flag = false;
  }
  if (subcategory_name.trim() != ""){
      var element = $("#subcategory_name_id")
      removeError(element)
  }
  if(subcategory_name.length > 50){
      var element = $("#subcategory_name_id")
      var message = "Should be less than 50"
      addError(element,message)
      flag = false;
  }

  if(subcategory_name.trim() != "" && subcategory_name.length < 50){
      var element = $("#subcategory_name_id")
      removeError(element)
  }

  if(category_name != "" && subcategory_name != "" && !submit)
    $.ajax({
       url : 'check_duplicate_subcategory',
       data : {'category_name':category_name, 'subcategory_name':subcategory_name},
       type : 'GET',
       dataType : 'json',
       success : function(json) {
          if(json.length > 0){
            var element = $("#subcategory_name_id")
            var message = "Subcategory name already taken"
            addError(element,message)
            flag = false;
            submit = false;   
          }
          else{
            var element = $("#subcategory_name_id")
            removeError(element)
            submit = true;
            flag = true;
            $("#add_subcategory_form").submit();
          }
       }
    });
  if(!flag){
    event.preventDefault();
    return false;
    }
  if(!submit){
    event.preventDefault();
    return false;
  }
  return true;
});

$('[name="subcategory[category_id]"]').change(function () {
    submit = false;
});

$("#subcategory_name_id").change(function () {
    submit = false;
});

