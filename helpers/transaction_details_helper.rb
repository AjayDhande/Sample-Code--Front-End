module TransactionDetailsHelper

  ##--
  ## Created On: 14/12/2014
  ## Purpose: To get all transaction details of customer
  #++
  def get_transaction_details(customer_transaction_id)
	  TransactionDetail.where(transaction_id: customer_transaction_id)
  end


  ##--
  ## Created On: 14/12/2014
  ## Purpose: To get media name from its id
  #++
  def get_media_name(media_id)
	  UploadedMedium.find(media_id).media_file_name rescue nil
  end
end
