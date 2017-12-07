$(document).ready(function(){
    $("#button_shown").click(function(){
        var amount_regex = /^\d+(\.\d+)?$/;
        var sku_regex = /^\d+$/;
        var flag = true;
        $('[name="upload[media_file_name][]"]').each(function(idx, el) {
            var media_name_full = $($(el).siblings()[0]).val();
            var media_name =  $(el).val();
            var element = $(el);
            var extensions = [ "wav", "mp3"]
            var media_name_extension = media_name_full.split('.').pop();
            var royalty_image_valid = $.inArray(media_name_extension, extensions) > -1; 
            if(media_name == ""){
                var message = "Media name can't be blank"
                addError(element,message);
                flag = false;
            }
            if(media_name.length > 255){
                var message = "Media name should be less than 256 characters"
                addError(element,message);
                flag = false;
            }
            if(royalty_image_valid != true ){
              var message = "Invalid media format only .wav and .mp3 are allowed"
              addError(element,message);
              flag = false;
            }
            if(media_name != "" && royalty_image_valid == true && media_name.length < 256){
                removeError(element)
            }
        });
        $('[name="category[]"]').each(function(idx, el) {
            var category = $(el).val();
            var element = $(el);
            if(category == ""){
                var message = "Category field can't be blank"
                addError(element,message);
                flag = false;
            }
            if(category != ""){
                removeError(element)
            }
        });
        $('[name="subcategory[]"]').each(function(idx, el) {
            var subcategory = $(el).val();
            var element = $(el);
            var parentElem = element.css("display") == "none" ? element.parent() : element;
            if (parentElem.find('div.tag_custom_error').length > 0) {
                if (parentElem.find('div.tag_custom_error').html() != "Category field can't be blank") {
                    if(subcategory != ""){
                        removeError(element)
                    }
                };
            }
            else{
                if(subcategory == ""){
                    var message = "Subcategory field can't be blank"
                    addError(element,message);
                    flag = false;
                }
            }
        });
        // $('[name="upload[tag][]"]').each(function(idx, el) {
        //     var tag = $(el).val();
        //     var element = $(el);
        //     if(tag == ""){
        //         var message = "Tag field can't be blank"
        //         addError(element,message);
        //         flag = false;
        //     }
        //     else{
        //         removeError(element)
        //     }
        // });
/*        $('[name="upload[artist_name][]"]').each(function(idx, el) {
            var artist_name = $(el).val();
            var element = $(el);
            if(artist_name == ""){
                var message = "Presenter name field can't be blank"
                addError(element,message);
                flag = false;
            }
            else if(artist_name.length > 255){
                var message = "Presenter name should be less than 256 characters"
                addError(element,message);
                flag = false;
            }
            else{
                removeError(element)
            }
        });*/
        $('[name="presenter_name"]').each(function(idx, el) {
            var presenter = $(el).val();
            var element = $(el);
            if(presenter == ""){
                var message = "Presenter field can't be blank"
                addError(element,message);
                flag = false;
            }
            if(presenter != ""){
                removeError(element)
            }
        });        
        $('[name="upload[description][]"]').each(function(idx, el) {
            var description = $(el).val();
            var element = $(el);
            if(description == ""){
                var message = "Description field can't be blank"
                addError(element,message);
                flag = false;
            }
            else if(description.length > 500){
                var message = "Description should be less than 501 characters"
                addError(element,message);
                flag = false;
            }
            else{
                removeError(element)
            }
        });
        $('[name="upload[artwork][]"]').each(function(idx, el) {
            if ($($("[name='artwork[]']")[idx]).val() == ""){
                var browse_art = $(el).val();
                //var royalty_art = $(el.parentElement).children().last().children().last().val()
                var royalty_art = $($(el.parentElement).children()[1]).children().last().val()
                var element = $(el);
                var browse_art_valid = true;
                if (browse_art != ""){
                  var extensions = [ "jpg", "gif","png"]
                  var browse_art_extension = browse_art.split('.').pop();
                  var browse_art_valid = $.inArray(browse_art_extension, extensions) > -1; 
                }
                if(browse_art == "" && (royalty_art=="" || royalty_art==undefined)){
                  var message = "Please browse or select artwork"
                  addError(element,message);
                  flag = false;
                }
                else if (browse_art_valid != true){
                  var message = "Invalid media art format only png,jpg and gif are allowed"
                  addError(element,message);
                  flag = false;
                }
                else{
                    removeError(element)
                }
            }
        });

        $('[name="upload[lyrics][]"]').each(function(idx, el) {
            if ($($("[name='lyrics[]']")[idx]).val() == ""){
                var browse_art = $(el).val();
                //var royalty_art = $(el.parentElement).children().last().children().last().val()
                var royalty_art = $($(el.parentElement).children()[1]).children().last().val()
                var element = $(el);
                var browse_art_valid = true;
                if (browse_art != ""){
                  var extensions = [ "txt","doc", "docx"]
                  var browse_art_extension = browse_art.split('.').pop();
                  var browse_art_valid = $.inArray(browse_art_extension, extensions) > -1; 
                }
                // if(browse_art == "" && (royalty_art=="" || royalty_art==undefined)){
                //   var message = "Please browse or select artwork"
                //   addError(element,message);
                //   flag = false;
                // }
                if (browse_art_valid != true){
                  var message = "Invalid lyrics format only txt,doc and docx are allowed"
                  addError(element,message);
                  flag = false;
                }
                else{
                    removeError(element)
                }
            }
        });
        $('[name="upload[amount][]"]').each(function(idx, el) {
            var amount = $(el).val();
            var element = $(el);
            if(amount == ""){
                var message = "Amount field can't be blank"
                addError(element,message);
                flag = false;
            }
            else if (!amount == "" && !amount.match(amount_regex)){
                var message = "Please enter a valid amount"
                addError(element,message);
                flag = false;
            }
            else{
                removeError(element)
            }
        });
        $('[name="upload[media_sku_number][]"]').each(function(idx, el) {
            var sku_number = $(el).val();
            var element = $(el);
            if(sku_number == ""){
                var message = "SKU number field can't be blank"
                skuAddError(element.parent(),message);
                flag = false;
            }
            else if (!sku_number == "" && (!sku_number.match(sku_regex)) || (sku_number == "0000")){
                var message = "Please enter a valid SKU number"
                skuAddError(element.parent(),message);
                flag = false;
            }
            else if (!(used_db_skus.indexOf(sku_number) < 0)){
                var message = "SKU already taken"
                skuAddError(element.parent(), message);
                flag = false;
            }
            else if (sku_number.length != 4){
                var message = "SKU Number must be 4 digits long"
                skuAddError(element.parent(), message);
                flag = false;
            }
            else{
                skuRemoveError(element.parent());
            }
        });

        if (check_unique_sku()){
            var element = $("#button_shown");
            var message = "Duplicate SKU number, please try unique SKU number";
            if (!element.next().hasClass("tag_custom_error"))
                element.after("<div class='tag_custom_error'>"+ message +"</div>")
            flag = false;
        }
        if (!flag){
            event.preventDefault();
            return false;
        }
        if (flag) {
            $("button #start_upload").click();
        }
        return true;
    });
});


$('#copyall').click(function(){
    $('[name="upload[amount][]"]').val($($('[name="upload[amount][]"]')[0]).val())
});

$(document).ready(function() 
{
    $("form input[data-role='tagsinput']").keypress(function(event) 
    { 
        if (event.keyCode == 13)
        {
            event.preventDefault();
            $(this).trigger("change");
        }
    });
});

function revert(elem) {
    if (elem.name == "category[]"){
      if ($(elem).val() != ""){
        $(elem).next().next().next().hide();
      }else{
        $(elem).next().next().next().show();
      } 
    };

    if (elem.name == "presenter_name"){
      //$(elem).next().next()
      if ($(elem).val() != ""){
        $(elem).next().next().hide();
      }else{
        $(elem).next().next().show();
      } 
    }else{

    if ($(elem).hasClass("chosen-select")){
        if ($(elem).css("display") == "none")
            $(elem).next().find('div.tag_custom_error').remove();
        else
            $(elem).parent().find('div.tag_custom_error').remove();
    }
    else if ($(elem).hasClass("tags")){
        $(elem).next().next().remove();

    }else if ($(elem).attr("type") == "file"){
        $(elem).parent().find('div.tag_custom_error').remove();
    }else if ($(elem).attr("data-toggle") == "modal"){
        $(elem).parent().parent().find('div.tag_custom_error').remove();
    }else{
        $(elem).next().remove();
    //$("#form_submit").val("Upload All");
    //$("#cancel").hide();
    }
  }
}

function fetch_subcategories (elem) {
    src = $(elem).css("display") == "none" ? ($(elem).parent().children()[2].children[0]) : $(elem).next().children()[0];
    $(src).empty();
    var data = subcategories[elem.value];
    for (var i = 0; i < data.length; i++){
        $(src).append($("<option value='" + data[i][0] + "'>" + data[i][1] + "</option>"));
    }
    $(src).prop("disabled", $(elem).val() == "" ? true : false);
    $(src).chosen().trigger("chosen:updated");
}

function addError(element,message){
    if(!$(element.parent()).find('div.tag_custom_error').length > 0){
        $(element.parent()).append('<div class="tag_custom_error">'+ message + '</div>');
        $(element.parent()).find('div.tag_custom_error').siblings('div').addClass('set_tag_field');
    }
}

function skuAddError(element,message){
    if(!$(element.parent()).find('div.sku_custom_error').length > 0){
        $(element.parent()).append('<div class="sku_custom_error">'+ message + '</div>');
        $(element.parent()).find('div.sku_custom_error').siblings('div').addClass('set_sku_field');
    }
}

//Purpose: To Remove error message for Plans
//Date: 07/01/2015
function removeError(element){
    if($(element.parent()).find('div.tag_custom_error').length > 0){
        $(element.parent()).find('div.tag_custom_error').remove();
    }
}

function skuRemoveError(element){
    if($(element.parent()).find('div.sku_custom_error').length > 0){
        $(element.parent()).find('div.sku_custom_error').remove();
    }
}


last_elem = null;
function modal_action(elem) {
    last_elem = elem;
    var val = $(last_elem).prev().val();
    if (val != "")
        $("input[value='"+val+"'][type='radio']").click();
}

$(document).ready(function(){
    $("button[data-role='set_artwork']").click(function(event) {
        $(last_elem).prev().val($("input[name='royalty']:checked").val());
        if ($("input[name='royalty']:checked").length == 0) {
            //notify("Select an Artwork", "You have not selected an artwork", "error");
            $('.error-msg').remove();
            $("#prepend_error").prepend("<div class='error-msg' style='padding-top: 1px; width:76%'><div class='alert alert-danger'><b>Warning!</b> " + "Please Select an Image" + "</div></div>");
            return false;
        }
        $($(last_elem).parent().parent().children()[1]).val("");
        fileName($(last_elem).parent().parent().children()[1]);
        $('#myModal').modal('hide');
        $("input[name='royalty']:checked").attr("checked", false);
    });

});


$(document).ready(function(){
    $('#button_shown').click(function(e){
        if($('[name="upload[tag][]"]').length == 0) {
            $('.error-msg').remove();
            $("#no_file").prepend("<div class='error-msg' style='padding-top: 1px; width:100%'><div class='alert alert-danger'><b>Warning!</b> " + "Please Browse Media to upload" + "</div></div>");
            e.preventDefault();
            return false;
        }
    })
    setInterval(function(){
        $('.tags').tagsinput();
        $('.chosen-select').chosen();
        $('[name="artwork[]"]').each(function(idx, el) {
            var selected_artwork = $(el).val();
            var element = $(el);
            if(!selected_artwork == ""){
                $.ajax({
                    // the URL for the request
                    url : '/uploaded_mediums/'+selected_artwork+'/get_artwork_name',
                    // the data to send
                    // (will be converted to a query string)
                    data : {
                        id : selected_artwork
                    },
                    // The request type is GET request
                    type : 'GET',
                    // Request for json response
                    dataType: 'json',
                    // Ajax callback for success
                    success : function(json) {
                        $(element.siblings()[0]).next('span').remove();
                        element.siblings().after('<span>'+json.artwork_file_name+'</span>')
                    }
                });
            }
            if(selected_artwork == ""){
                $(element.siblings()[0]).next('span').remove();
            }
        });
        $(".chosen-select-presenter").each(function(i, obj) {
            var select, chosen;
            // Cache the select element as we'll be using it a few times
            select = $(obj);
            // Init the chosen plugin
            select.chosen({ no_results_text: 'Press Enter to add new entry:', search_contains: true });
            // Get the chosen object
            chosen = select.data('chosen');
            // Bind the keyup event to the search box input
            if (chosen != undefined){
                chosen.dropdown.find('input').on('keyup', function(e)
                {
                    // If we hit Enter and the results list is empty (no matches) add the option
                    if (e.which == 13 && chosen.dropdown.find('li.no-results').length > 0)
                    {
                        var option = $("<option>").val(this.value).text(this.value);
                        // Add the new option
                        select.prepend(option);
                        // Automatically select it
                        select.find(option).prop('selected', true);
                        // Trigger the update
                        select.trigger("chosen:updated");
                    }
                });
            }        
        });

    }, 350);
});


function fileName (elem) {
    $(elem).parent().find("i").remove();
    $("span.help").remove();
    if (elem.files[0] != null){
        $(elem).next().find("input").val("");
        $(elem).after("<i class='glyphicon glyphicon-file' style='font-size: x-small;'> "+elem.files[0].name+"</i>");
    }
}
function check_unique_sku(){
    var new_skus = [];
    $('[name="upload[media_sku_number][]"]').each(function(idx, el) {
        new_skus.push($(el).val());
    });
    if (new_skus.filter(function(item, i, ar){ return ar.indexOf(item) === i; }) != ""){
        var unique = (new_skus.filter(function(item, i, ar){ return ar.indexOf(item) === i; }).length != $('[name="upload[media_sku_number][]"]').length)
        return unique;
    }               
};
function remove_uniqueError() {
    var element = $("#button_shown");
    if (element.next().hasClass('tag_custom_error')){
        (element.next()).remove();
    }
};