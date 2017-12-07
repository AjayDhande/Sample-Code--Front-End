    // if(WURFL.form_factor == "Smartphone" || WURFL.form_factor == "Tablet"){
    if(WURFL.form_factor == "Smartphone" && screen.width < 768){
       $("form:first").children().children().first().removeClass("chosen-select").addClass("form-control").css({'width' : 'auto'})
    }

    // function for checking Checkbox checked or not
    function check_checkbox(){
      var checked = $("#terms_condition").is(':checked');
      var element = $("#terms_condition");
      if (checked) {
        removeErrorMessage(element);
        //return true;
        $.ajax({
          // the URL for the request
          url : '/exchange_request',
          // the data to send
          //data : { checked_value : value },
          // The request type is GET request
          type : 'GET',
          success : function(value) {
            $('#termsModal').modal('toggle');
            window.location.href="/my_account";
          }
        });
      }
      else{
        var message = "Please agree to the terms & condition"
        addErrorMessage(element, message);
        event.preventDefault();
      }
    }

    function addErrorMessage(element,message){
      if(!$(element.parent()).find('div.tag_custom_error').length > 0){
        $(element.parent()).append('<div class="tag_custom_error">'+ message + '</div>');
        $(element.parent()).find('div.tag_custom_error').siblings('div').addClass('set_tag_field');
      }
    }

    function removeErrorMessage(element){
      if($(element.parent()).find('div.tag_custom_error').length > 0){
        $(element.parent()).find('div.tag_custom_error').remove();
      }
    }