// $(document).ready(function(){
//   $("#crop_button").click(function(event){
//     var duration = toSeconds(secondsTimeSpanToHMS(Math.trunc(wavesurfer.getDuration())))
//     var start_time_val_sec = toSeconds($('#start_time').val());
//     var start_time = $('#start_time').val();
//     if (start_time_val_sec=='' || isNaN(toSeconds($('#start_time').val())) ) {    
//       alert('Please Enter valid format for start time(HH:MM:SS)');
//       event.preventDefault();
//       return;
//     }
//     else if(start_time.match(/([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]/) == null ){
//       alert('Please Enter valid format for start time(HH:MM:SS)');
//       event.preventDefault();
//       return;
//     }
//     else if(duration - start_time_val_sec < 30 ){
//       alert("Can't crop the song, please decrease start time");
//       event.preventDefault();
//       return;
//     }
//     else {
//       $("#crop_button").click(function(){
//         $.ajax({
//           url: '/crop_song',
//           data : { start_time : $('[name="start_time"]').val(),
//             duration : $('[name="duration"]').val(),
//             user: {token: $("#user_token").val() },
//             uploaded_media_id: 
//           },
//           type : 'get',
//           dataType : 'script',
//           cache: false
//         });
//       });
//     }
//   });
// });


function secondsTimeSpanToHMS(s) {
  var h = Math.floor(s/3600); //Get whole hours
  s -= h*3600;
  var m = Math.floor(s/60); //Get remaining minutes
  s -= m*60;
  return (h < 10 ? '0'+h : h)+":"+(m < 10 ? '0'+m : m)+":"+(s < 10 ? '0'+s : s); //zero padding on minutes and seconds
}


function toSeconds(time_str) {
  // Extract hours, minutes and seconds
  var parts = time_str.split(':');
  // compute  and return total seconds
  return parts[0] * 3600 + // an hour has 3600 seconds
  parts[1] * 60 + // a minute has 60 seconds
  +
  parts[2]; // seconds
}

function toResult(a,b){
	var a = a;
	var b = b;
	var difference = Math.abs(toSeconds(a) - toSeconds(b));

	// format time differnece
	var result = [
	    Math.floor(difference / 3600), // an hour has 3600 seconds
	    Math.floor((difference % 3600) / 60), // a minute has 60 seconds
	    difference % 60
	];
	// 0 padding and concatation
	result = result.map(function(v) {
	    return v < 10 ? '0' + v : v;
	}).join(':');
	return result;
}

//SneWan, 20-09-16, To calculate end time using start time
function toAddResult(start){
	var start = start;
	var duration = '00:00:60';
	var end = Math.abs(toSeconds(start) + toSeconds(duration));
	// format time addition
	var result = [
	    Math.floor(end / 3600), // an hour has 3600 seconds
	    Math.floor((end % 3600) / 60), // a minute has 60 seconds
	    end % 60
	];
	// 0 padding and concatation
	result = result.map(function(v) {
	    return v < 10 ? '0' + v : v;
	}).join(':');
	return result;
}
