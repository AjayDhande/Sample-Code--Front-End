$(document).ready(function(){
  $('.rateit-reset').each(function(){
    $(this).remove();
  })
  $('.rateit').each(function(){
    rated_value = $(this).attr('data-rate');
    $(this).rateit('value', rated_value);
    $(this).rateit('readonly',true)
  })
});

function rate_now(){
	$('.rateit-reset').each(function(){
    $(this).remove();
  })
  $('.rateit').each(function(){
    rated_value = $(this).attr('data-rate');
    $(this).rateit('value', rated_value);
    $(this).rateit('readonly',true)
  })
}