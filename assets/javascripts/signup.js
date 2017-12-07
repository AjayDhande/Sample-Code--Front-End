$("#continue").click(function(event) {
	planSelect(event);
});

function planSelect(event) {
	var flag = true;
	var plan = undefined;
	if ($("input[name='user[role]']:checked").val() != undefined){
        plan = $("input[name='user[role]']:checked").val();
        //$("input[name='customer[plan]']").val(plan);
    }
  if (plan == undefined) {
		var element = $('#continue');
		var message = "Please select any account"
		plan1Error(element,message);
	  flag = false;
	}
	if(plan != undefined){
    var element = $("#plans");
    removePlan1Error(element)
  }
  if (!flag && event != undefined){
    event.preventDefault();
    return false;
  }
  return true;
}

function plan1Error(element,message){
  if(!$(element.parent().parent()).find('div.tag_custom_error').length > 0){
    $(element.parent().parent()).append('<div class="tag_custom_error">'+ message + '</div>');
    $(element.parent().parent()).find('div.tag_custom_error').siblings('div').addClass('set_tag_field');
  }
}

function removePlan1Error(element){
  if($(element.parent().parent()).find('div.tag_custom_error').length > 0){
    $(element.parent().parent()).find('div.tag_custom_error').remove();
  }
}

$("input[type='radio']").click(function (event){
	var element = $('#continue');
	$(element.parent().parent()).find('div.tag_custom_error').remove();
});