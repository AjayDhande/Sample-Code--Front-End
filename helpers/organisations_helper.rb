module OrganisationsHelper
	
  ##--
  ## Created On: 21/12/2014
  ## Purpose: To get  organisation info
  #++	
  def subdomain_info(subdomain_name)
	User.where(:username => subdomain_name, deactive: false, :cancelled_on => nil).first 
  end
end
