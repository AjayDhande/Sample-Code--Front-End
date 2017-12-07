module UploadedMediumsHelper

  def get_number_of_likes(message_id)
	  likes = Like.where("uploaded_media_id= ?",message_id).count
  end

  def get_rated_value_for_media(message_id,user_id)
	  rating = Rating.where("uploaded_media_id =? and user_id=?",message_id,user_id)
	  rated_value = rating.present? ? rating.first.rating : 0
  end

  ##--
  ## Created On: 19/12/2014
  ## Purpose: To get all tags for a song
  #++
  def get_tag(upload_id)
  	tag =[]
    uploaded_media_id = UploadedMedium.find(upload_id)
    tag_ids = TagUploadedMedium.joins(:tag).where("uploaded_media_id = ?",uploaded_media_id).map{|tag_data| "#{tag_data.tag_id}"}
    tag_ids.each do |tag_id|
       tag <<	Tag.find(tag_id).tag_name
    end
    tag.join(",")
  end

  ##--
  ## Created On: 19/12/2014
  ## Purpose: To get category from subcategory
  #++
  def get_category(subcategory_id)
    category_id = Subcategory.find(subcategory_id).category_id
    Category.find(category_id)
  end


  ##--
  ## Created On: 19/12/2014
  ## Purpose: To get subcategory
  #++
  def get_subcategory(subcategory_id)
    Subcategory.find(subcategory_id)
  end

  ##--
  ## Created On: 21/12/2014
  ## Purpose: To get user name
  #++
  def get_user_name(user_id)
    User.find(user_id).name rescue nil
  end

  ##--
  ## Created On: 19/06/2015
  ## Modified On: 04/07/2015
  ## Purpose: To get time instances of all the comments made for media with id=media_id
  ## Input: media_id(encrypted id of media for which we want to get the time instances of comments).
  ## Return: An array which will contain the time instances and comments of media.
  #++
  def get_all_comment_instances(media_id)
    if media_id.include? "mp3"
      media_id = media_id.split('++').first
    end  
    comments_array = [[0], [" "]]
    Comment.eager_load(:user).where(uploaded_media_id: decrypt(media_id)).order(:audio_timing).map do |comment|
      unless comment.audio_timing.nil?
        comments_array[0] << comment.audio_timing
        comments_array[1] << "#{comment.user.name} says #{comment.comment}"
      end
    end
    comments_array[0] << UploadedMedium.find(decrypt(media_id)).duration
    comments_array[1] << " "
    comments_array
  end

  def get_points_color(comments_count)
    color_array = ["#8A0808", "#003366", "#8A0808", "#FE2EF7", "#01DF3A", "#FA58D0", "#3399FF", "#6600FF", "#FF00FF", "#99CC00", "#CC3300", "#CCCC00", "#FFFF66", "#B24700", "#991F7A", "#3D0099", "#143D14", "#336464", "#990000", "#1F5C99"]

    new_color_array = color_array
    if comments_count < color_array.length
      color_array
    else
      number = comments_count / color_array.length
      number = number+1 if (comments_count%color_array.length > 0)
      number.times do
        new_color_array = new_color_array+color_array
      end
      new_color_array
    end
  end

  ##--
  ## Created On: 15/04/2015
  ## Purpose: To get used Sku numbers used in database.
  #++
  def get_next_sku_number
    active_sku_numbers = UploadedMedium.where("subdomain_id = ? and status != ?", current_subdomain.id, 1).map(&:sku_number).compact
    if active_sku_numbers.present?
      used_sku = []
      active_sku_numbers.each do |sku|
        used_sku << [sku[0..3], sku[4..-1]]
      end
      used_sku = used_sku.map{|k,v| v}
      used_sku = ["0000"]+used_sku if !used_sku.include?("0001")
      used_sku.compact.sort
    else
      used_sku = ["0000"]
    end
  end
end

