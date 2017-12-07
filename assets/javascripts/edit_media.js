
//Purpose: To set presenter name on page
//Date: 28/01/2015
$(document).ready(function(){
  var presenter_name = $("[name='presenter_name']").val()
  $($($('.chosen-container.chosen-container-single:last').children()[0]).children()[0]).text(presenter_name)
  hide_on_change();

  //Purpose: To set subcategory name on  edit page
  //Date: 02/06/2016
  var subcategory_name = $('#uploaded_mediums_subcategory_id').find("option[selected='selected']").text();
  $($(".chosen-single").find('span')[2]).text(subcategory_name);
})


//Purpose: To Validate Edit form
//Date: 07/01/2015
jQuery(document).ready(function() {
  $.validator.addMethod(
    "regex",
      function(value, element, regexp) {
        var re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
        },
    "Please check your input."
  );
  jQuery('#edit_upload_form').validate({
    errorElement:'div',
    rules: {
       "media_file_name":{
        required:true,
        maxlength:255
      },
      "uploaded_mediums[subcategory_id]":{
        required:true
      },
      "presenter_name":{
        required:true,
        maxlength:255
      },
      "description":{
        required:true,
        maxlength:500
      },
      "media_amount":{
        required:true,
        number: true,
        min:0,
        maxlength:255
      },
      // "tag[tag_name]":{
      //   required:true,
      //   maxlength:255
      // }
      // },
      // "media_art":{
      //   required:true,
      //   //accept: "image/*",
      //   extension: "jpg|png|gif"
      // }    
    },
    messages: {

       "media_file_name":{
        required:"Media file name field can't be blank",
        maxlength:"Should be less than 255"
      },
       "uploaded_mediums[subcategory_id]":{
        required:"Subcategory can't be blank"
      },
      "presenter_name":{
        required:"Presenter name field can't be blank",
        maxlength:"Should be less than 255"
      },
      "description":{
        required:"Description field can't be blank",
        maxlength:"Should be less than 500"
      },
      "media_amount":{
        required:"Media amount field can't be blank",
        number:"Please enter a valid amount",
        min:"Amount can't be negative value",
        maxlength:"Should be less than 255"
      },
      // "tag[tag_name]":{
      //   required: "Tag field can't be blank",
      //   maxlength: "Should be less than 255"
      // }
      // },
      // "media_art":{
      //   required:"Please browse Artwork to upload",
      //   //accept: "Please browse only image",
      //   extension:"Please browse image only jpg,png or gif"
      // } 
    } 
   //var tag_input = $('[name="tag[tag_name]"]').val();
  });
});


//Purpose: Sort subcategory on the basis of category selected
//Date: 28/01/2015
$(document).ready(function(){
    $("select").change(function(){
      value = $("#categories_id").val();
      $.ajax({
        // the URL for the request
        url : 'filter_subcategory',
        // the data to send
        // (will be converted to a query string)
        data : { checked_value : value },
        // The request type is GET request
        type : 'GET'
      });
    });
});


//Purpose: Show image if selected other wise option to select image to upload
//Date: 28/01/2015
$(document).ready(function(){
    $('#destroy_artwork').click(function(){
      var  image_id = $('#destroy_artwork').attr('value');
        $.ajax({
            // the URL for the request
            url : 'destroy_track_artwork',
            // the data to send
            // (will be converted to a query string)
            data : { id : image_id },
            // The request type is GET request
            type : 'GET',
            // Request for json response
            dataType: 'json',
            // Ajax callback for success
            success : function(json) {
                $('div.show-image').find('div').append('<button type="button" class="btn btn-primary" onclick="$(this).next().click();">Browse</button><input id="media_art" name="media_art" type="file" class="hide" style="padding-left:0px;" onchange="artwork_file_browser(this);"/>');
                $('#media_art').after(
                                        '<div style="font-size: small;">' +
                                        '<a href="" data-toggle="modal" data-target="#myModal" onclick="modal_action(this); revert(this);">Use Our Image</a>' +
                                        '<input type="hidden" name="artwork" onfocus="revert(this);"><br>'+
                                        '</div>'+
                                        '<div class="help" style="font-size: small; color: green;">Prefer square aspect ratio image</div>'
                                     )
                $($('div.image_view').find('span')).remove();
                notify("Artwork deleted","Artwork deleted successfully","success");
                hide_on_change();
           }
        });
    });
});


//Purpose: Custom message for error validation for presenter name and artwork
//Date: 28/01/2015
$("#edit_upload_form").submit(function(event) {
    var flag = true;
    var edit_tag = $('#edit_tag').val();
    $('[name="presenter_name"]').trigger("chosen:updated");
    var presenter_name = $('[name="presenter_name"]').val();
    $($($('.chosen-container.chosen-container-single:last').children()[0]).children()[0]).text(presenter_name)
    var royalty_image  = $('[name="artwork"]').val()
    var selected_image = $('#media_art').val()
    var selected_lyrics = $('#lyrics_file').val()
    var file_extension = ["txt", "doc", "docx"]

    var extensions = [ "jpg", "png", "gif", "jpeg"]
    if (royalty_image != ""){
      var royalty_image_extension = royalty_image.split('.').pop();
      var royalty_image_valid = $.inArray(royalty_image_extension, extensions) > -1; 
    }
    if (selected_image != undefined){
      var selected_image_extension = selected_image.split('.').pop(); 
      var selected_image_valid = $.inArray(selected_image_extension, extensions) > -1;
    }
    if (selected_lyrics != undefined){
      var selected_lyrics_extension = selected_lyrics.split('.').pop(); 
      var selected_lyrics_valid = $.inArray(selected_lyrics_extension, file_extension) > -1;
    }

    // if(edit_tag == ""){
    //    var element = $('#edit_tag')
    //    var message = "Tag field can't be blank"
    //    addError(element,message)
    //   flag = false;
    // } 
    // if(edit_tag != ""){
    //   var element = $('#edit_tag')
    //   removeError(element)
    // }
    if(presenter_name == ""){
      var element = $('[name="presenter_name"]')
      var message = "Please select presenter name"
      addError(element,message)
      flag = false;
    } 
    if(presenter_name != ""){
      var element = $('[name="presenter_name"]')
      removeError(element)
    }
   if (selected_image !=""){
      if (selected_image_valid == false){
        var  selected_image_element =  $('[name="artwork"]')
        var message = "Please browse only jpg, png or gif image"
        removeError(selected_image_element) 
        addError(selected_image_element,message)
        flag = false;
      }
      if (selected_image_valid == true){
        var  selected_image_element =  $('[name="artwork"]')
        removeError(selected_image_element)
      } 
    }
    if (selected_lyrics !=""){
      if (selected_lyrics_valid == false){
        var  selected_lyrics_element =  $('[name="lyrics[]"]')
        var message = "Please browse only txt or doc or docx file"
        removeError(selected_lyrics_element) 
        addError(selected_lyrics_element,message)
        flag = false;
      }
      if (selected_lyrics_valid == true){
        var  selected_lyrics_element =  $('[name="lyrics[]"]')
        removeError(selected_lyrics_element)
      } 
    } 
    if (!flag){
        event.preventDefault();
        return false;
    }
    return true;
});


//Purpose: Custom method to hide error message on select of image
//Date: 28/01/2015
function hide_on_change(){
  $('input#media_art').change(function(){
    var selected_image = $('#media_art').val()
    var royalty_image = $('[name="artwork"]').val()
    var extensions = [ "jpg", "png", "gif", "jpeg"]
    var selected_image_extension = selected_image.split('.').pop();
    var selected_image_valid = $.inArray(selected_image_extension, extensions) > -1;
    if (selected_image !=""){
      var  selected_image_element =  $('[name="artwork"]')
      removeError(selected_image_element)
    }
    if (royalty_image !=""){
      var  selected_image_element =  $('[name="artwork"]')
      removeError(selected_image_element)
    }
    if (selected_image !=""){
      if (selected_image_valid == false){
        var  selected_image_element =  $('[name="artwork"]')
        var message = "Please browse only jpg, png or gif image"
        removeError(selected_image_element) 
        addError(selected_image_element,message)
      }
      if (selected_image_valid == true){
        var  selected_image_element =  $('[name="artwork"]')
        removeError(selected_image_element)
      } 
    }  
  })

  $('input#lyrics_file').change(function(){
    var selected_lyrics = $('#lyrics_file').val()
    var file_extension = [ "txt", "doc", "docx"]
    var selected_lyrics_extension = selected_lyrics.split('.').pop();
    var selected_lyrics_valid = $.inArray(selected_lyrics_extension, file_extension) > -1;
    if (selected_lyrics !=""){
      var  selected_lyrics_element =  $('[name="lyrics[]"]')
      removeError(selected_lyrics_element)
    }
    
    if (selected_lyrics !=""){
      if (selected_lyrics_valid == false){
        var  selected_lyrics_element =  $('[name="lyrics[]"]')
        var message = "Please browse only txt, doc or docx file"
        removeError(selected_lyrics_element) 
        addError(selected_lyrics_element,message)
      }
      if (selected_lyrics_valid == true){
        var  selected_lyrics_element =  $('[name="lyrics[]"]')
        removeError(selected_lyrics_element)
      } 
    }  
  })

}

//Purpose: Hide error message on select of royalty images
//Date: 03/02/2015
$("input[name='artwork']").change(function(){
  var royalty_image = $('[name="artwork"]').val()
  if (royalty_image !=""){
    var  selected_image_element =  $('[name="artwork"]')
    removeError(selected_image_element)
  }
})

$("input[name='lyrics[]']").change(function(){
  var royalty_lyrics = $('[name="lyrics[]"]').val()
  if (royalty_lyrics !=""){
    var  selected_lyrics_element =  $('[name="lyrics[]"]')
    removeError(selected_lyrics_element)
  }
})

//Purpose: To Add error message for tag
//Date: 07/01/2015
function addError(element,message){
  if (element.attr("name") == "artwork"){
    if(!(element.parent().parent().find('div.tag_custom_error') > 0)){
      element.parent().parent().append('<div class="tag_custom_error">'+ message + '</div>');
      element.parent().parent().find('div.tag_custom_error').siblings('div').addClass('set_tag_field');
    }
  } else 
    if(!$(element.parent()).find('div.tag_custom_error').length > 0){
      $(element.parent()).append('<div class="tag_custom_error">'+ message + '</div>');
      $(element.parent()).find('div.tag_custom_error').siblings('div').addClass('set_tag_field');
    }
  }

//Purpose: To Remove error message for tag
//Date: 07/01/2015
function removeError(element){
  if (element.attr("name") == "artwork"){
    if(element.parent().parent().find('div.tag_custom_error').length > 0)
      element.parent().parent().find('div.tag_custom_error').remove();
  }
  else
    if($(element.parent()).find('div.tag_custom_error').length > 0)
      $(element.parent()).find('div.tag_custom_error').remove();
}


//Purpose: Custom function to hide error message on valid dropdown
//Date: 28/01/2015
  $($('[name="presenter_name"]')).on('change',function(element){
    var element = $('[name="presenter_name"]');
    var presenter_name = $('[name="presenter_name"]').val();
    if($(element.parent()).find('div.tag_custom_error').length > 0 && !presenter_name == ""){
      $(element.parent()).find('div.tag_custom_error').remove();
    }
  });

function modal_action(elem) {
  last_elem = elem;
  var val = $(last_elem).next().val();
  if (val != "")
    $("input[value='"+val+"'][type='radio']").click();
}

$("button[data-role='set_artwork']").click(function(event) {
  var artwork_value = $(last_elem).next().val($("input[name='royalty']:checked").val());
  if ($("input[name='royalty']:checked").length == 0) {
    //notify("Select an Image", "You have no chosen art image", "error");
    $('.error-msg').remove();
    $("#prepend_error").prepend("<div class='error-msg' style='padding-top: 1px; width:76%'><div class='alert alert-danger'><b>Warning!</b> " + "Please Select an Image" + "</div></div>");
    return false;
  }
  setArtwork(artwork_value)
  $(last_elem).parent().parent().find("#browse_art").remove();
  $(last_elem).parent().find("i#art_name").remove();
  $(last_elem).next().val($("input[name='royalty']:checked").val());
  $(last_elem).parent().parent().find("input")[0].value = ""
  $(last_elem).next().next().after("<i class='glyphicon glyphicon-file' id='art_name' style='font-size: x-small;'>" + $("input[name='royalty']:checked").attr('data-name') + "</i>");
  $('#myModal').modal('hide');
  $("input[name='royalty']:checked").attr("checked", false);
});


function revert(elem) {
  if ($(elem).hasClass("chosen-select") || $(elem).hasClass("tags"))
    $(elem).next().next().remove();
  else if ($(elem).attr("type") == "file")
    $(elem).parent().next().next().remove();
  else if ($(elem).attr("data-toggle") == "modal")
    $(elem).parent().next().remove();
  else
    $(elem).next().remove();
  $("#form_submit").val("Upload All");
  $("#cancel").hide();
}

//Purpose: Trigger royalty image on select to hide error message
//Date: 03/02/2015
function setArtwork(artwork_value) {
  $("input[name='artwork']").val(artwork_value)
                 .trigger('change');
  if ($("input[name='artwork']").val() != "")
  {
    var  selected_image_element =  $('[name="artwork"]')
    removeError(selected_image_element)
  }
}

function artwork_file_browser (elem) {
  $(elem).parent().find("div.help").remove();
  $(elem).parent().find("#browse_art").remove();
  if(elem.files[0] != undefined){
    $(elem).after("<div id='browse_art'><i class='glyphicon glyphicon-file' style='font-size: x-small;'>"+elem.files[0].name+"</i></div>");
    $(elem).parent().find("input[type='hidden']").val("");
    $(elem).parent().find("i#art_name").remove();
  }
  else
    $(elem).parent().find("div#browse_art").remove();
}

function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#blah')
                    .attr('src', e.target.result)
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
function readURLs() {
  var selected = $("input[name='royalty']:checked").attr('data-img');
  $('#blah').attr('src',selected);
}