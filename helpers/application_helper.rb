module ApplicationHelper

  ##--
  ## Created On: 13/09/2016
  ## Purpose: To check milestone
  #++
  def milestone(subdomain)
    milestone = Milestone.where(subdomain_id: subdomain.id).map(&:milestone_number)
  end

  def notify(title, message, type = :notice, time = 4000)
    #type should be :success or :warning or :notice or :error or :progress
    js add_gritter(message, title: title, image: type, time: time)
  end

  def crypt(message)
    ActiveSupport::MessageEncryptor.new(Rails.configuration.secret_key_base).encrypt_and_sign(message.to_s)
  end

  def decrypt(message)
    ActiveSupport::MessageEncryptor.new(Rails.configuration.secret_key_base).decrypt_and_verify(message)
  end

  def most_popular2
    active_subdomain_id = Subdomain.get_active_subdomains
    if current_subdomain.is_ocm?
      UploadedMedium.joins(:likes).select("uploaded_media.id, uploaded_media.media_file_name, uploaded_media.media_art_file_name, uploaded_media.presenter_name, uploaded_media.media_amount, uploaded_media.subdomain_id, count(likes.id) as count").where("uploaded_media.status != 1 AND subdomain_id in (?)", active_subdomain_id).group("likes.uploaded_media_id").sort_by(&:count).reverse.first(3)
    else
      UploadedMedium.joins(:likes).select("uploaded_media.id, uploaded_media.media_file_name, uploaded_media.media_art_file_name, uploaded_media.presenter_name, uploaded_media.media_amount, uploaded_media.subdomain_id, count(likes.id) as count").where("uploaded_media.subdomain_id = ? AND uploaded_media.status != 1 AND subdomain_id in (?)", current_subdomain.id, active_subdomain_id).group("likes.uploaded_media_id").sort_by(&:count).reverse.first(3)
    end
  end


  ##--
  ## Created On: 12/05/2015
  ## Purpose: To redirect to medialist path to home url for different subdomain other than ocm on view page.
  #++
  def medialist_path
    if current_subdomain.is_ocm?
      "/medialist"
    else
      "/home"
    end
  end

  def get_average_rating(message_id)
    ratings = Rating.where("uploaded_media_id =?",message_id)   
    ratings.present? ? ratings.average(:rating).to_s : 0.0
  end
  
  ##--
  ## Created On: 21/12/2014
  ## Purpose: To get subdomain current plan
  #++   
  def get_subdomain_plan(subdomain)
    subdomain.current_plan
  end

  ##--
  ## Created On: 21/12/2014
  ## Purpose: To get subdomain current subscription
  #++ 
  def get_subdomain_subscription(subdomain)
    subdomain_user_id = SubdomainUser.where(:user_id => subdomain).last.id
    Subscription.where(:subdomain_user_id => subdomain_user_id).last
  end

  ##--
  ## Created On: 21/12/2014
  ## Purpose: To get subdomain address
  #++ 
  def get_subdomain_address(subdomain)
    Address.where(:user_id => subdomain).last
  end
 
  ##--
  ## Created On: 21/12/2014
  ## Purpose: To get username by id
  #++ 
  def get_username_by_id(id)
    User.find(id).username
  end

  def subdomain_title
    subdomain = User.find_by(username: current_subdomain.subdomain_name)
    if subdomain.title.nil?
      ""
    else
      return subdomain.title.abbreviation.blank? ? subdomain.title.title : subdomain.title.abbreviation
    end
  end


  ##--
  ## Created On: 22/12/2014
  ## Purpose: To get duration of a song
  #++
  def calculate_duration(song_path)
    ffmpeg_path = YAML.load_file("#{Rails.root}/config/ffmpeg.yml")
    FFMPEG.ffmpeg_binary = ffmpeg_path["ffmpeg_original"]
    song_response = FFMPEG::Movie.new("#{song_path}") rescue nil
    seconds = song_response.duration != 0.0 ? Time.at(song_response.duration).utc.strftime("%H:%M:%S") : 0.0 rescue nil
  end

  ##--
  ## Created On: 22/02/2015
  ## Purpose: To get minimum customer plan for the subdomain.
  #++
  def minimal_customer_plan
    Plan.where("plan_type_id in (?)", PlanType.where("type_name like '%RENEW%'").map(&:id)).order("plan_amount ASC").first.plan_amount rescue nil
  end

  ##--
  ## Created On: 16/04/2015
  ## Purpose: To convert integer to HH:MM:SS format
  #++
  def calculate_sec_to_time(sec = nil)
    if sec.present?
      time = sec rescue nil
      Time.at(time).utc.strftime("%H:%M:%S")
    else
      time= 0
      Time.at(time).utc.strftime("%H:%M:%S")
    end
  end

  ##--
  ## Created On: 11/05/2015
  ## Purpose: To get the current subdomain name
  #++
  def subdomain_name
    current_subdomain.subdomain_name
  end

  def device_name
    user_agent =  request.env['HTTP_USER_AGENT'].downcase
    user_agent_data = AgentOrange::UserAgent.new(user_agent)
    device = user_agent_data.device
  end
end
