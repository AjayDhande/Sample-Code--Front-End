module CustomerHelper

  ##--
  ## Created On: 11/12/2014
  ## Purpose: To get customer record
  #++
  def get_customer(user,user_role )
		User.where("id=? and user_role_id= ?",user,user_role)
  end

  ##--
  ## Created On: 17/12/2014
  ## Purpose: To average rating for media
  #++
	def get_average_rating(message_id)
		ratings = Rating.where("uploaded_media_id =?",message_id)		
		ratings.present? ? ratings.average(:rating).to_s : 0.0
	end  

  ##--
  ## Created On: 27/12/2014
  ## Purpose: To get username by user_id
  #++
  def get_username_by_user_id(user_id)
    User.find(user_id).username
  end

  ##--
  ## Created On: 27/12/2014
  ## Purpose: To get medianame by uploaded_media_id
  #++
  def get_media_name_by_uploaded_media_id(uploaded_media_id)
    uploaded_media = UploadedMedium.find(uploaded_media_id)
    File.basename(uploaded_media.media_file_name,File.extname(uploaded_media.media_file_name))
  end

  ##--
  ## Created On: 27/12/2014
  ## Purpose: To get subdomain name by subdomain_id
  #++
  def get_subdomain_name_by_subdomain_id(subdomain_id)
    Subdomain.find(subdomain_id).subdomain_name
  end

  ##--
  ## Created On: 29/12/2014
  ## Purpose: To get username by user_id
  #++
  def get_username_by_user_id(user_id)
    User.find(user_id).username
  end

  def is_active_media?(media_id)
    media = UploadedMedium.find(media_id)
    !(media.deactive?) && media.subdomain.is_active?
  end
end
