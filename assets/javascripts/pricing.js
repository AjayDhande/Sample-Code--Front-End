$(document).ready(function(){
    $("input[type=checkbox]").prop("checked", false);
    $("input[type=radio]").prop("checked", false);
    setTimeout(function(){
        var match;
        if (match = window.location.search.match(/plan=(.*?)&/)){
            $("#role4").click();
            $($("input[name='customer_plan'][value='"+match[1]+"']")[0]).click()
            planChange();
            roleChange();
        }
    }, 500);
    $("#registration_btn").click(function () {
       $("#registration").submit();
    });



    $('input[name="user[role]"]').click(function(){
        $("input[name='customer_plan']").prop("checked", false);
        $("input[name='subdomain_plan']").prop("checked", false);
        $("#plans").html("");
        $("#addon-area").html("");
        if ($(this).attr("value") == "CUSTOMER"){
            //$("#subdomain_add_elem").remove();
            //$("#subdomain_add").removeClass("input-group");
            var customer_plans = $("div.customer_plans");
            var customer_addons = $("div.customer_addons");
            $.each(customer_plans, function(index, value) {
                $("#plans").append($(value).html());
            });
            $.each(customer_addons, function(index, value) {
                $("#addon-area").append("<hr>");
                $("#addon-area").append($(value).html());
            });
            $("#addon-area").show();
            $("input[name='customer_plan']").click(function(){
                if (this.value == "0"){
                    $("input[type=checkbox]").prop("checked", false);
                    $("#addon-area").hide();
                }
                else{
                    $("input[type=checkbox]").prop("checked", false);
                    $("#addon-area").show();
                }
                planChange();
            });
        }
        else{
            //$("#subdomain_add").addClass("input-group");
            //if ($("#subdomain_add_elem").length == 0)
            //$("#subdomain_add").append("<span class='input-group-addon' id='subdomain_add_elem'>.ocm.com</span>");
            $("#addon-area").hide();
            var id = $(this).attr("data-id");
            var plans = subdomain_types_and_plans[id];
            if (plans.length == 0) {
                $("#plans").html($("#no_plan").html());
            }
            else {
                $.each(plans, function(index, value) {
                    $("#plans").append($("#subdomain_plans_"+id+"_"+value).html());
                });
            }
            $("input[name='subdomain_plan']").click(function(){
                planChange();
            });
        }
        $(".Monthly-Pricing-two").show();
        //roleChange();
    });
});

$(function () {
    $(document).on('click', '.subdomain_plan_button' ,function (event) {
       $(this).closest(".monthly-pricing ").find("#subdomain_plan").prop('checked',true)
       $("#registration").submit();
    });
});

 $(function () {
    $(document).on('click', '.customer_plan_button' ,function (event) {
       $(this).closest(".monthly-pricing").find("#customer_plan").prop('checked',true)
       $("#registration").submit();
    });
});

 



$("#registration").submit(function(e){
    roleChange(e);
    planChange(e);
    var addons = $("input[type='checkbox']:checked");
    $.each(addons, function(index, value) {
        $("input[name='addons']").val($("input[name='addons']").val()+$(value).val()+',');
    });
});

$('#radio-button').click(function (e) {
    roleChange();
});

function planChange (event) {
    flag = true
    var plan = undefined;
    if ($("input[name='customer_plan']:checked").val() != undefined){
        plan = $("input[name='customer_plan']:checked").val();
        $("input[name='customer[plan]']").val(plan);
    }
    if ($("input[name='subdomain_plan']:checked").val() != undefined){
        plan = $("input[name='subdomain_plan']:checked").val();
        $("input[name='subdomain[plan]']").val(plan);
    }
    if (plan == undefined) {
        //notify("Plan Required!", "Please select any plan", "error");
        var element = $("#plans");
        var message = "Please select any plan"
        planError(element,message);
        flag = false;
    }
    if(plan != undefined){
        var element = $("#plans");
        removePlanError(element)
    }
    if (!flag && event != undefined){
        event.preventDefault();
        return false;
    }
    return true; 
}

function roleChange (event) {
    var flag = true;
    var role = $("[name='user[role]']:checked").val();
    if(role == undefined){
        var element = $("[name='user[role]']")
        var message = "Please select any role"
        roleError(element,message)
        flag = false;
    }
    if(role != undefined){
        var element = $("[name='user[role]']")
        removeRoleError(element)
    }
    if (!flag && event != undefined){
        event.preventDefault();
        return false;
    }
    return true;
}

function roleError(element,message){
  if(!$(element.parent().parent()[1]).find('div.tag_custom_error').length > 0){
    $(element.parent().parent()[1]).append('<div class="tag_custom_error">'+ message + '</div>');
    $(element.parent().parent()[1]).find('div.tag_custom_error').siblings('div').addClass('set_tag_field');
  }
}

function removeRoleError(element){
  if($(element.parent().parent()[1]).find('div.tag_custom_error').length > 0){
    $(element.parent().parent()[1]).find('div.tag_custom_error').remove();
  }
}

function planError(element,message){
  if(!$(element).find('div.tag_custom_error').length > 0){
    $(element).prepend('<div class="tag_custom_error" style="padding-left: 15px">'+ message + '</div>');
    $(element).find('div.tag_custom_error').siblings('div').addClass('set_tag_field');
  }
}

function removePlanError(element){
  if($(element).find('div.tag_custom_error').length > 0){
    $(element).find('div.tag_custom_error').remove();
  }
}
