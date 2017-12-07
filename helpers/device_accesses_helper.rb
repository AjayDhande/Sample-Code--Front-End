module DeviceAccessesHelper
  ##--
  ## Created On: 08/11/2014
  ## Purpose: To get devise statistics report
  #++	
  def get_access_device(device_access)
    total_device_count = device_access.count  
    iphone_count = device_access.where(:access_device => "Iphone").count
    ipod_count = device_access.where(:access_device => "Ipod").count
    iphone_ipod_count = iphone_count + ipod_count
    iphone_ipod_count_percent = ((iphone_ipod_count.to_f  * 100) / total_device_count).round(2)
    android_count = device_access.where(:access_device => "Android").count 
    android_count_percent = ((android_count.to_f  * 100) / total_device_count).round(2) 
    ipad_count = device_access.where(:access_device => "Ipad").count
    ipad_count_percent = ((ipad_count.to_f  * 100) / total_device_count).round(2)
    other_count = device_access.where(:access_device => "Other").count
    other_count_percent = ((other_count.to_f  * 100) / total_device_count).round(2)
    access_device_data = Hash[
    	                     "iphone_ipod_count_data" => iphone_ipod_count, "android_count_data" => android_count,
    	                     "ipad_count_data" => ipad_count, "other_count_data" => other_count,
    	                     "iphone_ipod_percent" => iphone_ipod_count_percent, "android_percent" => android_count_percent,
                             "ipad_percent" => ipad_count_percent, "other_percent" => other_count_percent
                             ]
  end

  ##--
  ## Created On: 08/11/2014
  ## Purpose: To get operating system statistics report
  #++	
  def get_access_operating_system(device_access)
    total_device_count = device_access.count
	  computer_count = device_access.where(:access_operating_system=>"Computer").count
	  computer_count_percent = ((computer_count.to_f * 100) / total_device_count).round(2)
	  mobile_count = device_access.where(:access_operating_system=>"Mobile").count
    mobile_count_percent = ((mobile_count.to_f  * 100) / total_device_count).round(2)
	  tablet_count = device_access.where(:access_operating_system=>"Tablet").count 
	  tablet_count_percent = ((tablet_count.to_f  * 100) / total_device_count).round(2)
	  access_operating_system_data = Hash[
		                                   "computer_count_data" => computer_count, "mobile_count_data" => mobile_count,
                                        "tablet_count_data" => tablet_count, "computer_percent" => computer_count_percent, 
                                        "mobile_percent" => mobile_count_percent, "tablet_percent" => tablet_count_percent  
	                                     ]
  end

  ##--
  ## Created On: 08/11/2014
  ## Purpose: To get browser statistics report
  #++	
  def get_access_browser(overall_device_access)
    device_access = overall_device_access.where(access_operating_system: "Computer")
    total_device_count = device_access.count
    chrome_count = device_access.where(:access_browser => "Chrome").count 
    chrome_count_percent = ((chrome_count.to_f  * 100) / total_device_count).round(2)
    internet_explorer_count = device_access.where("access_browser like ?", "%#{"ie"}%").count
    internet_explorer_count_percent = ((internet_explorer_count.to_f  * 100) / total_device_count).round(2) 
    safari_count = device_access.where(:access_browser => "Safari").count
    safari_count_percent = ((safari_count.to_f  * 100) / total_device_count).round(2) 
    other_count = device_access.where(:access_browser => "Other").count
    other_count_percent = ((other_count.to_f  * 100) / total_device_count).round(2)
    access_browser_data = Hash[
    	                       "chrome_count_data" => chrome_count, "internet_explorer_count_data" => internet_explorer_count,
    	                       "safari_count_data" => safari_count, "chrome_percent" => chrome_count_percent,
    	                       "internet_explorer_percent" => internet_explorer_count_percent, "safari_percent" =>  safari_count_percent,
    	                       "other_count_data" => other_count, "other_percent" => other_count_percent  
                              ]
  end
  
  ##--
  ## Created On: 08/11/2014
  ## Purpose: To get country statistics report
  #++ 
  def get_country_statistics_report(country_list, device_access)
    @country_hash = {}
    country_list.each do |country|
      country_count = device_access.where(:access_country => country).count
      @country_hash[country] = country_count 
    end
    country_stat = @country_hash.sort_by {|_key, value| value}.reverse
    hash = Hash[*country_stat.flatten]
  end

  ##--
  ## Created On: 08/11/2014
  ## Purpose: To get city statistics report
  #++
  def get_city_statistics_report(city_list, device_access)
    @city_hash = {}
    city_list.each do |city|
      city_count = device_access.where(:access_city => city).count
      @city_hash[city] = city_count
    end
    city_stat = @city_hash.sort_by {|_key, value| value}.reverse
    hash = Hash[*city_stat.flatten]
  end

  ##--
  ## Created On: 21/11/2014
  ## Purpose: To get country name for listen song
  #++
  def get_country(device_access_id)
    DeviceAccess.find(device_access_id).access_country
  end

  ##--
  ## Created On: 21/11/2014
  ## Purpose: To get count of listen for a particaular country
  #++
  def get_listen_count(device_access_id,listen_medias)
    listen_medias.where(:device_access_id => device_access_id).count rescue nil
  end
  
  ## Created On: 20/12/2014
  ## Purpose: To get song by id
  #++  
  def find_media_by_id(message_id)
    UploadedMedium.find(message_id)
  end

  ##--
  ## Created On: 05/01/2014
  ## Purpose: To get listen media count country vice
  #++
  def play_count_country_vice(country_lists,device_accesses,listen_medias,sorted_array = [])
    @device_accesses = device_accesses
    @listen_medias = listen_medias
    country_lists.each do |country_name|
      id_lists = @device_accesses.where(:access_country => country_name).map(&:id)
      add_count=[]
      id_lists.each do |id|
        add_count << @listen_medias.where(device_access_id: id).count
      end
      sorted_array << [country_name,add_count.sum]
    end
    sorted_array
    play_hash = Hash[*sorted_array.flatten]
    sorted_play_hash = play_hash.sort_by {|_key, value| value}.reverse
  end
  
  ##--
  ## Created On: 05/01/2014
  ## Purpose: To get state from city
  #++
  def get_city_state(city)
    DeviceAccess.where(access_city: city).last.access_state rescue nil
  end
end
