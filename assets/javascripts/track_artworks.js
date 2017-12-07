jQuery(document).ready(function() {
  $.validator.addMethod(
    "regex",
      function(value, element, regexp) {
        var re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
        },
    "Please check your input."
  );
  jQuery("#royalty_image_form").validate({
    errorElement:'div',
    rules: {
      "track_artwork[artwork]":{
        required:true,
        extension: "jpg|png|gif"
      }
    },
    messages: {
      "track_artwork[artwork]":{
        required:"Please browse file to upload",
        extension:"Please browse image only jpg,png or gif"
      }
    } 
  });
});

