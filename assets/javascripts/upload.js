window.onload = function() {
  $('#files').val('');
  eval_files(($('#files')[0]));
};

function size_in_mb(sizeInBytes) {
  return (sizeInBytes / (1024*1024)).toFixed(2);
}

function eval_files (media) {
  var data = [];
  for (var i = 0; i < media.files.length; i++)
    data[i] = { file_name: baseName(media.files.item(i).name) };
  $("#upload_tbody").loadTemplate($("#template"), data);
  $("#upload_tbody").find("tr:odd").css("background-color","#FFF5EB");
  $('.tags').tagsinput();
  $('.chosen-select').chosen();
  $("#form_submit").val("Upload All");
  $("#cancel").hide();
}

$("#upload").submit(function( event ) {
  var media_content_format = /^audio\/(mpeg|mp3|x-wav|wav|x-mpeg|x-mp3|mpeg3|x-mpeg-3)/;
  var art_content_format = /^image/;
  var amount_format = /^[0-9]+[.]{0,1}[0-9]*$/;
  var error = $("#form_submit").val() == "Upload Valid Files Only" ? false : true;
  var flag = true;
  media = $("#files")[0];
  var media_file_names = $("input[name='media_file_name[]']");
  var ignore = $("input[name='ignore[]']");
  var categories = $("select[name='category[]']");
  var subcategories = $("select[name='subcategory[]']");
  var arts = $("input[name='media_art[]']");
  var artowrks = $("input[name='artwork[]']");
  var artists = $("input[name='artist[]']");
  var descriptions = $("textarea[name='description[]']");
  var amounts = $("input[name='amount[]']");
  var tags = $("input[name='tag[]']");
  var amount = $("input[name='amount[]']");
  if (media.files.length == 0){
    notify("Browse File(s)", "You have no chosen files to upload", "error");
    flag = false;
    event.preventDefault();
  }
  else{
    for (var i = 0; i < media.files.length; i++){
      var value = "0";
      if (!media.files.item(i).type.match(media_content_format)){
        value = "1";
        if (error){
          if(!$($($($("tbody > tr")[i]).children()[0]).children()[0]).next().hasClass("error_validate"))
            $("<span class='error_validate'><br>Only mp3 or wav allowed</span>").insertAfter($($($($("tbody > tr")[i]).children()[0]).children()[0]));
          flag = false;
        }
      }
      else if (size_in_mb(media.files.item(i).size) > 100) {
        value = "1";
        if (error){
          if(!$($($($("tbody > tr")[i]).children()[0]).children()[0]).next().hasClass("error_validate"))
            $("<span class='error_validate'><br>Media size should be less than 101 MB</span>").insertAfter($($($($("tbody > tr")[i]).children()[0]).children()[0]));
          flag = false;
        }
      }
      else {
        if(media_file_names[i].value.length == 0){
          value = "1";
          if (error){
            if(!$(media_file_names[i]).next().hasClass("error_validate"))
              $("<span class='error_validate'>Message title can't be blank</span>").insertAfter($(media_file_names[i]));
            flag = false;
          }
        }
        else if(media_file_names[i].value.length > 255){
          value = "1";
          if (error){
            if(!$(media_file_names[i]).next().hasClass("error_validate"))
              $("<span class='error_validate'>Should be less than 256 characters</span>").insertAfter($(media_file_names[i]));
            flag = false;
          }
        }
      }

      if (categories[i].value.length == 0) {
        value = "1";
        if (error){
          $(categories[i]).parent().find("span#categ").remove();
          $(categories[i]).next().after("<span class='error_validate' id='categ'></br>Category can't be blank</span>");
          flag = false;
        }
      }

      if (subcategories[i].value.length == 0) {
        value = "1";
        if (error){
          $(subcategories[i]).parent().find("span#subcateg").remove();
          $(subcategories[i]).parent().children().last().after("<span class='error_validate' id='subcateg'></br>Subcategory can't be blank</span>");
          flag = false;
        }
      }

      if (artowrks[i].value == "") {
        if (arts[i].files.length == 0) {
          value = "1";
          if (error){
              $(arts[i]).parent().parent().find(".error_validate").remove();
            $("<div class='error_validate'>Artwork can't be blank</div>").insertAfter($(arts[i]).parent().parent().children().last());
            //$($("input[name='media_art[]']").parent().next()).find(".error_validate").prev("br").remove()
            //$($("input[name='media_art[]']").parent().next()).find(".error_validate").remove()
            //$(arts[i]).parent().next().append("<br><span class='error_validate'>Artwork can't be blank</span>")
            flag = false;
          }
        }
        else{
          if (!arts[i].files.item(0).type.match(art_content_format)) {
            value = "1";
            if (error){
              $(arts[i]).parent().parent().find(".error_validate").remove(); 
              $("<div class='error_validate'>Only images allowed</div>").insertAfter($(arts[i]).parent().parent().children().last());
              flag = false;
            }
          }
        }
      }
      else{
        arts[i].files.length = 0;
      }

      if (artists[i].value.length == 0) {
        value = "1";
        if (error){
          if(!$(artists[i]).next().hasClass("error_validate"))
            $("<span class='error_validate'>Presenter name can't be blank</span>").insertAfter($(artists[i]));
          flag = false;
        }
      }
      else if(artists[i].value.length > 255) {
        value = "1";
        if (error){
          if(!$(artists[i]).next().hasClass("error_validate"))
            $("<span class='error_validate'>Should be less than 256 characters</span>").insertAfter($(artists[i]));
          flag = false;
        }
      }
      if (descriptions[i].value.length == 0) {
        value = "1";
        if (error){
          if(!$(descriptions[i]).next().hasClass("error_validate"))
            $("<span class='error_validate'>Description can't be blank</span>").insertAfter($(descriptions[i]));
          flag = false;
        }
      }
      else if (descriptions[i].value.length > 500) {
        value = "1";
        if (error){
          if(!$(descriptions[i]).next().hasClass("error_validate"))
            $("<span class='error_validate'>Should be less than 501 characters</span>").insertAfter($(descriptions[i]));
          flag = false;
        }
      }
      if (amounts[i].value.length == 0) {
        value = "1";
        if (error){
          if(!$(amounts[i]).next().hasClass("error_validate"))
            $("<span class='error_validate'>Amount can't be blank</span>").insertAfter($(amounts[i]));
          flag = false;
        }
      }
      else if (!amounts[i].value.match(amount_format)){
        value = "1";
        if (error){
          if(!$(amounts[i]).next().hasClass("error_validate"))
            $("<span class='error_validate'>Invalid amount</span>").insertAfter($(amounts[i]));
          flag = false;
        }
      }
      if (tags[i].value.length == 0) {
        value = "1";
        if (error){
          if(!$(tags[i]).next().next().hasClass("error_validate"))
            $("<span class='error_validate'>Tags can't be blank</span>").insertAfter($(tags[i]).next());
          flag = false;
        }
      }
      else if (tags[i].value.length > 255) {
        value = "1";
        if (error){
          if(!$(tags[i]).next().next().hasClass("error_validate"))
            $("<span class='error_validate'Should be less than 256 characters</span>").insertAfter($(tags[i]).next());
          flag = false;
        }
      }
      ignore[i].value = value;
    }
  }
  if (flag){
    showLoader();
  }
  else{
    $("#form_submit").val("Upload Valid Files Only");
    $("#cancel").show();
    if (error)
      event.preventDefault();
  }
});

$("#cancel").click(function () {
  $("#form_submit").val("Upload All");
  $(this).hide();
});

function revert(elem) {
  if ($(elem).hasClass("chosen-select") || $(elem).hasClass("tags"))
    $(elem).parent().find(".error_validate").remove();
  else if ($(elem).attr("type") == "file")
    $(elem).parent().parent().find(".error_validate").remove();
  else if ($(elem).attr("data-toggle") == "modal")
    $(elem).parent().parent().find(".error_validate").remove();
  else if($(elem).next().html() != '<br>Only mp3 or wav allowed' && $(elem).next().html() != '<br>Media size should be less than 101 MB')
    $(elem).next().remove();
  $("#form_submit").val("Upload All");
  $("#cancel").hide();
}

function fetch_subcategories (elem) {
  src = ($(elem).parent().find("select")[1]);
  $(src).empty();
  var data = subcategories[elem.value];
  for (var i = 0; i < data.length; i++){
    $(src).append($("<option value='" + data[i][0] + "'>" + data[i][1] + "</option>"));
  }
  $(src).prop("disabled", $(elem).val() == "" ? true : false);
  $(src).chosen().trigger("chosen:updated");
}

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
last_elem = null;

function modal_action(elem) {
  last_elem = elem;
  var val = $(last_elem).prev().val();
  if (val != "")
    $("input[value='"+val+"'][type='radio']").click();
  $('div.help').remove();
  revert(elem);
}

$("button[data-role='set_artwork']").click(function(event) {
  $(last_elem).parent().find("i#art_name").remove();
  if ($("input[name='royalty']:checked").length == 0) {
    //notify("Select an Artwork", "You have not selected an artwork", "error");
    $('.error-msg').remove();
    $("#prepend_error").prepend("<div class='error-msg' style='padding-top: 1px; width:76%'><div class='alert alert-danger'><b>Warning!</b> " + "Please Select an Image" + "</div></div>");
    return false;
  }
  $(last_elem).prev().val($("input[name='royalty']:checked").val());
  $(last_elem).after("<i class='glyphicon glyphicon-file' id='art_name' style='font-size: x-small;'>" + $("input[name='royalty']:checked").attr('data-name') + "</i>");
  $(last_elem).parent().parent().find("i#browse_name").remove();
  $($(last_elem).parent().parent().find("input[type='file']")).val("");
  $('#myModal').modal('hide');
  $("input[name='royalty']:checked").attr("checked", false);
});

function baseName(str) {
  var base = new String(str).substring(str.lastIndexOf('/') + 1); 
  if(base.lastIndexOf(".") != -1)       
    base = base.substring(0, base.lastIndexOf("."));
  return base;
}

function fileName (elem) {
    $(elem).parent().parent().find("i").remove();
    $("span.help").remove();
    if (elem.files[0] != undefined)
      $(elem).parent().after("<i class='glyphicon glyphicon-file' id='browse_name' style='font-size: x-small;'> "+elem.files[0].name+"</i>");
}

function artwork_file_browser (elem) {
  $(elem).parent().parent().find('div#art_name').remove();
  $('div.help').remove();
  revert(elem);
  fileName(elem);
  $(elem).parent().parent().find("input[type='hidden']").val("")
}