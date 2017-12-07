$("#continue_with_current").click(function () {
  add_to_cart();
})

function add_to_cart(){
  $("input[name='redirect']").val("1");
  $("#new_cart_item").submit();
}

function like_now (elem) {
  showLoader();
  $.get(elem,{})
    .done( function(data){
      if(data) {
        $("#like").find("a").remove();
        $("#like").html("<a href='#' class='unlike like_unlike'><span class='glyphicon glyphicon-heart'></span>unlike</a>");
      }
    })
    .fail(function(data){
      notify('Something Wrong', "Contact Administrator", "error")
    })
    .always(function(){
      hideLoader();
    });
}
function unlike_now (elem) {
  showLoader();
  $.get(elem,{})
    .done( function(data){
      if(data) {
        $("#like").find("a").remove();
        $("#like").html("<a href='#' class='like like_unlike'><span class='glyphicon glyphicon-heart-empty'></span>like</a>");
      }
    })
    .fail(function(data){
      notify('Something Wrong', "Contact Administrator", "error")
    })
    .always(function(){
      hideLoader();
    });
}
// $("source").error(function () {
   // audio playback failed - show a message saying why
   // to get the source of the audio element use $(this).src
   // notify("Unable to Play", "A network error or file not found caused the audio download to fail.", "error");
// });

// $("audio")[0].addEventListener('play', function(e){
//   if (e.target.currentTime == 0)
//     $.get("/listen_media",{uploaded_media_id: $(this).attr("data-id")});
// }, false);

// $("audio")[0].addEventListener('ended', function(e){
//   e.target.currentTime = 0;
// }, false);

// $("audio")[0].addEventListener('canplay', function(e){
//   if (window.location.search.match(/autoplay/))
//      e.target.play();
// }, false);

window.onload = function() {
  $('.rateit-reset').hide();
};


/*
function download_now (elem) {
  showLoader();
  $.get(elem,{})
    .done( function(data){
      if(data)
        //$("#download").html("<a href='/download/media/<%= params"[':uploaded_media_id']"%>?mode=download'><span class='glyphicon glyphicon-download-alt'></span> Downloaded</a>");
        $("#download").html("<a href='/download/media/<%= params[:uploaded_media_id]%>?mode=download'><span class='glyphicon glyphicon-download-alt'></span> Downloaded</a>");
    })
    .fail(function(data){
      notify('Something Wrong', "Contact Administrator", "error")
    })
    .always(function(){
      hideLoader();
    });
}
*/
// To give thin white border to cover art image
$('.thumbnail').css({"border-color": "#fff", "border-width": "0px"});

// To change the colour of lyrics/words toggle button 
setInterval(function(){
  $($(".toggle-group").find('label')[0]).css("background-color", "#6fbbde");
  $(".new-btn").css("border-color", "orange");
  $(".btn-default").css("border-color", "");
},500);