//Purpose: To set and remove opacity of homepage video on play and stop
//Date: 29/01/2015

$(document).ready(function(){
  $(".custom-message1").css({'height':($("video").height()+'px')});
  $("#banner").css({'height':($("#example_video_1").height()+'px')});
  $("iframe").contents().find("video").css("width", "100%");
  var video = document.getElementsByTagName('video')[0];
  video.onended = function(e) 
  {
    $('video').css({'opacity': '.45'});
    // $('video').css({'opacity': '9'});

  };

  //for chrome
  if ($.browser.chrome){
    video.onloadstart = function(e) { 
      $('video').css({'opacity': '.45'});
    };
  }   

  //for firefox
  if ($.browser.mozilla){
    $('video').css({'opacity': '.45'});
  }

  $(document).on('click', '.vjs-play-control', function() {
    click_on_video();
  });
  $(document).on('click', '#example_video_1_html5_api', function() {
    click_on_video();
  });
});

function click_on_video() {
  var v = document.getElementsByTagName("video")[0];
    if (v.paused == true){
      $('video').css({'opacity': '.45'});
    }
    if (v.paused == false){ 
      $('video').css({'opacity': '0.75'});  
    }
}

$(document).ready(function(){
  window.setTimeout(function() {
    var v = document.getElementsByTagName("video")[0];
    v.play();
    $('video').css({'opacity': '0.75'}); 
    //$('#custom-message').hide();
  }, 2000);
  $(".vjs-play-control").siblings().hide();
})

function click_video1() {
  var v = document.getElementsByTagName("video")[0];
  if (v.paused == true){
      v.play();
      $('video').css({'opacity': '0.75'});
  }
  else if (v.paused == false){
      v.pause();
       $('video').css({'opacity': '5'}); 
   
  }
}

$(window).resize(function() {
  $(".custom-message1").css({'height':($("video").height()+'px')});
  $("#banner").css({'height':($("#example_video_1").height()+'px')});
});


$(document).ready(function(){
  $("video").css({'opacity': '.45'});


});

// Video in iframe Modal box
$(document).ready(function(){ 
  var youtube_url = $("#video_iframe").attr('src');

  $("#myModal").on('hide.bs.modal', function(){
    // $("#video_iframe").attr('src', '');
    var v = $("iframe").contents().find("video")[0];
    v.pause();
  });

  $('#myModal').on('show.bs.modal', function() {
    // $("#video_iframe").attr('src', youtube_url);
    setInterval(function(){
      $('.modal-content').css('height',$( window ).height()*0.6);
      $('#video_iframe').css('height',$( window ).height()*0.57);
    }, 200);

    //$('#video_iframe').css('height',$("iframe").contents().find("video").height());
    window.setTimeout(function(){
      $('#video_iframe').css('height',$("iframe").contents().find("video").height());
      $('.modal-content').css('height',$("iframe").contents().find("video").height());
    }, 0250);

    video_in_landscape_mode();
    
    $(window).resize(function(){
      if( $('#myModal').hasClass('in') ) {
        video_in_landscape_mode();
      }
    });

    var v = $("iframe").contents().find("video")[0];
    // if (v.paused == true){
    v.play();
    // }
    // else if (v.paused == false){
    //     v.pause();
    // }
  });
})

// View fullscreen video in landscape mobile view.
function video_in_landscape_mode() {
  if ((!isPortrait()) && (WURFL.form_factor == "Smartphone" && screen.width < 768)) {                
    $.confirm({
        text: "Want to view in Fullscreen ?",
        confirm: function() {
          if (BigScreen.enabled) {
            var iframe = document.getElementById('video_iframe');
            var element = iframe.contentDocument.getElementsByTagName("video")[0];
            BigScreen.request(element);
            // BigScreen.toggle();
          }                        
        }
    });
  }
}

function isPortrait() {
  return window.innerHeight > window.innerWidth;
}

//Purpose: To stop video to autoplay
//Date: 23/06/2016
$(document).ready(function(){
  setInterval(function(){ 
    if ($('#myModal').hasClass('in') == false) {
      $('#video_iframe').contents().find("video")[0].pause();
    }
  }, 300);          
});