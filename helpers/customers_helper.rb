module CustomersHelper

  ##--
  ## Created On: 18/12/2014
  ## Purpose: To get customer current plan
  #++ 	
  def get_customer_plan(customer)
  	customer.current_plan
  end

  ##--
  ## Created On: 18/12/2014
  ## Purpose: To get customer current subscription
  #++ 
  def get_customer_subscription(customer)
    subdomain_user_id = SubdomainUser.where(:user_id => customer).last.id
    Subscription.where(:subdomain_user_id => subdomain_user_id).last
  end

  ##--
  ## Created On: 18/12/2014
  ## Purpose: To get customer address
  #++ 
  def get_customer_address(customer)
    Address.where(:user_id => customer).last
  end
end
