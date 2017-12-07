
var _URL = window.URL || window.webkitURL;
$(function(){
    $('.demo').colorpicker();
});
$("input[value='Back']").click(function () {
  $(".myaccount_tab[value='theme_management']").click();
});

$("input[name='theme[logo_image_path]']").change(function () {
    // if ((file = this.files[0])) {
    //     image = new Image();
    //     image.onload = function() {
    //         window.logo_image = {"width": this.width, "height": this.height}  
    //         if ((window.logo_image.width < 260) || (window.logo_image.height < 60)){
    //             console.log("width is less");    
    //             var  logo_image_element =  $("[name='theme[logo_image_path]']")
    //             var message = "Please upload image with minimum width of 260 and minimum height of 60"
    //             addError(logo_image_element,message)
                
    //         }else{
    //             console.log("width is more");    
    //         }
    //     };
    //     image.src = _URL.createObjectURL(file);
    // }
    var extensions = [ "jpg","JPG","png","PNG", "gif","GIF","ico","ICO", "jpeg","JPEG"]
    var logo_file_path = $("[name='theme[logo_image_path]']").val();
    var logo_file_extension = logo_file_path.split('.').pop();
    var logo_valid = $.inArray(logo_file_extension, extensions) > -1;
    if (logo_valid == false){
        var  logo_image_element =  $("[name='theme[logo_image_path]']")
        var message = "Please browse image only jpg/JPG, png/PNG,ico/ICO, jpeg/JPEG or gif/GIF"
        addError(logo_image_element,message)
    }
    if (logo_valid == true){
        var  logo_image_element =  $("[name='theme[logo_image_path]']")
        removeError(logo_image_element,message)
    }
});

$("input[name='theme[favicon_logo]']").change(function () {
    if ((file = this.files[0])) {
        image = new Image();
        image.onload = function() {
            window.logo_image = {"width": this.width, "height": this.height}  
            if ((window.logo_image.width > 16) || (window.logo_image.height > 16)){
                console.log("width is less");    
                var  logo_image_element =  $("[name='theme[favicon_logo]']")
                var message = "Please upload image with width of 16 and  height of 16"
                addError(logo_image_element,message)
                
            }else{
                console.log("width is more");    
            }
        };
        image.src = _URL.createObjectURL(file);
    }
    var extensions = ["png","ico"]
    var logo_file_path = $("[name='theme[favicon_logo]']").val();
    var logo_file_extension = logo_file_path.split('.').pop();
    var logo_valid = $.inArray(logo_file_extension, extensions) > -1;
    if (logo_valid == false){
        var  logo_image_element =  $("[name='theme[favicon_logo]']")
        var message = "Please browse image only png,ico"
        addError(logo_image_element,message)
    }
    if (logo_valid == true){
        var  logo_image_element =  $("[name='theme[favicon_logo]']")
        removeError(logo_image_element,message)
    }
});


// $("input[name='theme[background_image_path]']").change(function () {
//     if ((file = this.files[0])) {
//         image = new Image();
//         image.onload = function() {
//             window.background_image = {"width": this.width, "height": this.height}
//             if (!(window.background_image === undefined) && (!(window.background_image["width"] >= 1300) || !(window.background_image["height"] >= 900))) {
//                 var  background_image_element =  $("[name='theme[background_image_path]']")
//                 var message = "Minimum 1300x900 required"
//                 removeErrors(background_image_element)
//                 addErrors(background_image_element,message)
//             }
//             if (!(!(window.background_image === undefined) && (!(window.background_image["width"] >= 1300) || !(window.background_image["height"] >= 900)))){
//                 var  background_image_element =  $("[name='theme[background_image_path]']")
//                 removeErrors(background_image_element)
//             }
//         };
//         image.src = _URL.createObjectURL(file);
//     }
//     var extensions = [ "jpg", "png", "gif"]
//     var background_image_path = $('[name="theme[background_image_path]"]').val();
//     var background_image_extension = background_image_path.split('.').pop(); 
//     var background_valid = $.inArray(background_image_extension, extensions) > -1;
//     if (background_image_path !=""){
//         if (background_valid == false){
//           var  background_image_element =  $('[name="theme[background_image_path]"]')
//           var message = "Please browse image only jpg, png or gif"
//           removeError(background_image_element) 
//           addError(background_image_element,message)
//           flag = true;
//         }
//         if (background_valid == true && !(!(window.background_image === undefined) && (!(window.background_image["width"] >= 1300) || !(window.background_image["height"] >= 900)))){
//           var  background_image_element =  $('[name="theme[background_image_path]"]')
//           removeError(background_image_element)
//         } 
//     } 
// });


//Purpose: To Add error message for Plans
//Date: 07/01/2015
function addErrors(element,message){
  if(!$(element.parent()).find('div.theme_image_error').length > 0){
    $(element.parent()).append('<div class="theme_image_error">'+ message + '</div>');
    $(element.parent()).find('div.theme_image_error').siblings('div').addClass('set_tag_field');
  }
}

//Purpose: To Remove error message for Plans
//Date: 07/01/2015
function removeErrors(element){
  if($(element.parent()).find('div.theme_image_error').length > 0){
    $(element.parent()).find('div.theme_image_error').remove();
  }
}