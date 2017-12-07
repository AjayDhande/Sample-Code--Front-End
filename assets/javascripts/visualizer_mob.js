/* Comment box validation */
jQuery("#myform").validate({
  errorElement:'div',
  errorPlacement: function (error, element) {
    error.insertAfter(element.parent());
  },
  rules: {
    "comment":{
      required:true,
      maxlength:500
    }
  },
  messages: {
    "comment":{
      required:"Comment field can't be blank",
      maxlength:"Should be less than 500 characters"
    }
  }
});

/* flags to sync functions */
window.visualizer = {listen: false, playing: false};
/* All Events */
window.visualizer.events = {
  /* Listener for wavesurfer load event */
  onLoading: function () {
  },

  /* Listener for wavesurfer ready event */
  onReady: function (argument) {
    readyToPlayFlag = true;
  },

  /* Listener for wavesurfer play finish event */
  onFinish: function () {
    window.visualizer.playing = false;
    window.visualizer.listen = false;
    $('input[name="comment"]').attr("disabled", true);
    $('#save_comment').attr("disabled", true);
  },

  /* Listener for wavesurfer play event */
  onPlay: function () {
    window.visualizer.playing = true;
    $('input[name="comment"]').removeAttr("disabled");
    $('#save_comment').removeAttr("disabled");
    if (!window.visualizer.listen){
      $.get("/listen_media",{uploaded_media_id: window.visualizer.uploaded_media_id});
      window.visualizer.listen = true;
    }
  },

  /* Listener for wavesurfer pause event */
  onPause: function () {
    window.visualizer.playing = false;
    $('input[name="comment"]').attr("disabled", true);
    $('#save_comment').attr("disabled", true);
  },

  /* Listener for comment box focus event */
  onFocus: function () {
    $('#audio_timing').val(soundManager.getSoundById("ui360Sound0").position);
  }

};
soundManager.onready(function () {
  window.visualizer.events.onReady();
  $("span.sm2-360btn").click(function () {
    soundManager.play("ui360Sound0", {
      onplay: window.visualizer.events.onPlay,
      onfinish: window.visualizer.events.onFinish,
      onpause: window.visualizer.events.onPause
    })
  });
})

//soundManager.play("ui360Sound0");
/* Registering wavesurfer events */
// wavesurfer.on('loading', window.visualizer.events.onLoading);
// wavesurfer.on('ready', window.visualizer.events.onReady);
// wavesurfer.on('finish', window.visualizer.events.onFinish);
// wavesurfer.on('play', window.visualizer.events.onPlay);
// wavesurfer.on('pause', window.visualizer.events.onPause);

$('input[name="comment"]').focus(window.visualizer.events.onFocus);