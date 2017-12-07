$(document).ready(function(){
    $("select").change(function(){
        value = $("#device_statistics").val();
        showLoader();
		$.ajax({
			// the URL for the request
			url : 'device_accesses/show_device_statistic',
			// the data to send
			// (will be converted to a query string)
			data : { checked_value : value },
			// The request type is GET request
			type : 'GET'
		});
    });
});
