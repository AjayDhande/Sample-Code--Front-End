    $("#customize").click(function () {
      $.get("/render_theme/" + $("#theme_id").val())
        .done(function (data) {
            $(".update_page").html(data);
        })
        .fail(function () {
            notify("Something Wrong", "Contact Administrator", "error");
        });
    });

        /*function theme1_form(elem) {
            var formdata = {logo_image_path: $("#logo_button").val(), header: $("#theme_header").val(), header_description: $("#header_description").val() }
            $.get("/apply_default_theme/" + $("#theme_id").val(), formdata)
                .done(function (data) {
                    if (!data)
                        notify("Something Wrong", "Contact Administrator", "error");
                    else{
                        window.location.href = "/my_account#theme";
                        window.location.reload();
                    }
                })
                .fail(function () {
                    notify("Something Wrong", "Contact Administrator", "error");
                });
            return false;
        }*/      

    function theme2_form() {
        var elem = $("form[action='/apply_custom_theme']")[0];
        var flag = false;
        var background_color = $("input[name='theme[background_color]']").val();
        var subdomain_title_color = $("input[name='theme[subdomain_title_color]']").val();
        var header_color = $("input[name='theme[header_color]']").val();
        var footer_color = $("input[name='theme[footer_color]']").val();
        var extensions = [ "jpg", "png", "gif", "jpeg"]
        var background_image_path = $('[name="theme[background_image_path]"]').val();
        var gradient = $('[name="theme[gradient]"]').val();
        var background_image_extension = background_image_path.split('.').pop(); 
        var background_valid = $.inArray(background_image_extension, extensions) > -1;
        //var logo_file_path = $("[name='theme[logo_image_path]']").val();
        //var logo_file_extension = logo_file_path.split('.').pop();
        //var logo_valid = $.inArray(logo_file_extension, extensions) > -1;
        //var theme_header = $("input[name='theme[header]']").val();
        //var header_description = $("textarea[name='theme[header_description]']").val();

        // if (!(window.background_image === undefined) && (!(window.background_image["width"] >= 1300) || !(window.background_image["height"] >= 900))) {
        //     var  background_image_element =  $("[name='theme[background_image_path]']")
        //     var message = "Minimum 1300x900 required"
        //     removeError(background_image_element)
        //     addError(background_image_element,message)
        //     flag = true;
        // }
        // if (!(!(window.background_image === undefined) && (!(window.background_image["width"] >= 1300) || !(window.background_image["height"] >= 900)))){
        //   var  background_image_element =  $("[name='theme[background_image_path]']")
        //   removeError(background_image_element)
        // }
        
        /*if (logo_file_path != ""){
            if (logo_valid == false){
              var  logo_image_element =  $("[name='theme[logo_image_path]']")
              var message = "Please browse only jpg, png, jpeg or gif image"
              addError(logo_image_element,message)
              flag = true;
            }
            if (logo_valid == true){
              var  logo_image_element =  $("[name='theme[logo_image_path]']")
              removeError(logo_image_element,message)
            }
        }*/
        // if (background_image_path !=""){
        //     if (background_valid == false){
        //       var  background_image_element =  $('[name="theme[background_image_path]"]')
        //       var message = "Please browse only jpg, png, jpeg or gif image"
        //       removeError(background_image_element) 
        //       addError(background_image_element,message)
        //       flag = true;
        //     }
        //     if (background_valid == true && !(!(window.background_image === undefined) && (!(window.background_image["width"] >= 1300) || !(window.background_image["height"] >= 900)))){
        //       var  background_image_element =  $('[name="theme[background_image_path]"]')
        //       removeError(background_image_element)
        //     } 
        // }
        /*if (theme_header == "") {
            var element = $("input[name='theme[header]']")
            var message = "Header field can't be blank"
            addError(element, message)
            flag = true;
        }
        else if(theme_header.length > 60){
            var element = $("input[name='theme[header]']")
            var message = "Header field should be less than or equal to 60 characters"
            addError(element, message)
            flag = true;
        }
        else{
            var element = $("input[name='theme[header]']")
            removeError(element)
        };
        if (header_description == "") {
            var element = $("textarea[name='theme[header_description]']")
            var message = "Header field can't be blank"
            addError(element, message)
            flag = true;
        }
        else if(header_description.length > 450){
            var element = $("textarea[name='theme[header_description]']")
            var message = "Header field should be less than or equal to 450 characters"
            addError(element, message)
            flag = true;
        }
        else {
            var element = $("textarea[name='theme[header_description]']")
            removeError(element)
        };*/

        if(flag)
            return false;
        showLoader();
        $(elem).submit();
    }


//Purpose: To Add error message for Plans
//Date: 07/01/2015
function addError(element,message){
  if(!$(element.parent()).find('div.theme_image_error').length > 0){
    $(element.parent()).append('<div class="theme_image_error">'+ message + '</div>');
    $(element.parent()).find('div.theme_image_error').siblings('div').addClass('set_tag_field');
  }
}

//Purpose: To Remove error message for Plans
//Date: 07/01/2015
function removeError(element){
  if($(element.parent()).find('div.theme_image_error').length > 0){
    $(element.parent()).find('div.theme_image_error').remove();
  }
}

function countChar(val) {
    var text_max = 450;
    var text_length = $('#header_description').val().length;
    var text_remaining = text_max - text_length;
    $('#textarea_feedback').html(text_remaining + ' characters remaining');
};
