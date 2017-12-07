module MyAccountHelper

  def get_super_admin_id
  	UserRole.where(:role => "SUPER_ADMIN").first.id
  end

  def get_content_manager_id
  	UserRole.where(:role => "CONTENT_MANAGER").first.id
  end

  def get_subscription_admin_id
  	UserRole.where(:role => "SUBSCRIPTION_ADMIN").first.id
  end
  
  ##--
  ## Created On: 19/12/2014
  ## Purpose: To change the created_at time into dd month_name, yyyy format.
  #++
  def formatted_date(date)
    date.strftime("%d")+ " " + date.strftime("%B") + ", "+ date.strftime("%Y")
  end
end
