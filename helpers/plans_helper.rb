module PlansHelper
  
  ##--
  ## Created On: 12/12/2014
  ## Purpose: To get plan amount of user
  #++	
  def get_plan_amount(plan_id)
  	Plan.find(plan_id).plan_amount
  end
  
  ##--
  ## Created On: 12/12/2014
  ## Purpose: To get username
  #++	
  def get_user_names(subscription_id)
    subscribed_user_id = Subscription.find(subscription_id).subdomain_user_id
    user_id = SubdomainUser.find(subscribed_user_id).user_id
    User.find(user_id).username
  end

  ##--
  ## Created On: 02/01/2015
  ## Purpose: To get plan type
  #++ 
  def get_plan_type(plan)
    plan_type_id = plan.plan_type_id
    PlanType.find(plan_type_id).type_name rescue nil
  end

  ##--
  ## Created On: 02/01/2015
  ## Purpose: To get subdomain type
  #++ 
  def get_subdomain_type(plan)
    plan_id = plan.id
    subdomain_type_id = SubdomainPlan.where(plan_id: plan_id).last.subdomain_type_id rescue nil
    if subdomain_type_id == nil
      "CUSTOMER"
    else 
      SubdomainType.find(subdomain_type_id).subdomain_type rescue nil
    end
  end

  def get_previous_grace_value
    grace = YAML.load_file("#{Rails.root}/config/grace_period.yml")
    grace["grace_value"]
  end
end
