jQuery(document).ready(function() {
  $.validator.addMethod(
    "regex",
      function(value, element, regexp) {
        var re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
        },
    "Please check your input."
  );
  jQuery('#feedback_form').validate({
    errorElement:'div',
    rules: {
      "feedback[email]":{
        required: true,
        email: true,
        maxlength: 255
      },
      "feedback[feedback]":{
        required:true
      }
    },
    messages: {
      "feedback[email]":{
        required:"Email field can't be blank",
        regex:"Invalid email address",
        maxlength:"Should be less than 256 characters"
      },
      "feedback[feedback]":{
        required:"Feedback/Comment field can't be blank"
      }
    }
  });
});


$("#feedback_form").submit(function(e){
    feedbackChange(e); 
    $("#feedback_form").click(function(e){
      feedbackChange(e);    
    });   
});


function feedbackChange (event) {
//$("#feedback_form").submit(function(event) {
    var flag = true;
    var feedback = $("[name='feedback[feedback_type]']:checked").val();
    if(feedback == undefined){
        var element = $("[name='feedback[feedback_type]']")
        var message = "Please mention what is your question/comment about"
        feedbackError(element,message)
        flag = false;
    }
    if(feedback != undefined){
        var element = $("[name='feedback[feedback_type]']")
        removeFeedbackError(element)
    }
    if (!flag && event != undefined){
        event.preventDefault();
        return false;
    }
    return true;
}
//});

function feedbackError(element,message){
  if(!$(element.parent().parent().parent()).find('div.tag_custom_error').length > 0){
    $(element.parent().parent().parent()).prepend('<div class="tag_custom_error" style="padding-left: 15px;">'+ message + '</div>');
    $(element.parent().parent().parent()).find('div.tag_custom_error').siblings('div').addClass('set_tag_field');
  }
}

function removeFeedbackError(element){
  if($(element.parent().parent().parent()).find('div.tag_custom_error').length > 0){
    $(element.parent().parent().parent()).find('div.tag_custom_error').remove();
  }
}

