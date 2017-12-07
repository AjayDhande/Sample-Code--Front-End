$(document).ready(function(){	
	$(".report").hover(function () {
	   $(this).toggleClass("active");
	});

	$(".billing").hover(function () {
	    $(this).toggleClass("active");
	});	

	$(".subscription").hover(function () {
	    $(this).toggleClass("active");
	});
	$(".incomplete_registration").hover(function () {
	    $(this).toggleClass("active");
	});	
	$(".exchange").hover(function () {
	    $(this).toggleClass("active");
	});	
})

$(document).ready(function(){
  var currentLocation = window.location;
  if (currentLocation.pathname == "/show_incomplete_registration"){
    $("#dashboard").removeClass("active");
    $("#incomplete_registration").addClass("active");
  }
});

