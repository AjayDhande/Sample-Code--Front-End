//Purpose: To Update Statistics For tablet
//Date: 07/01/2015
$(document).ready(function(){
    if(WURFL.form_factor == "Tablet"){
        $.ajax({
            url: 'set_tablet',
            type: 'GET'
        });  
    }
});
