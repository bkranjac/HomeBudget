class Transaction < ApplicationRecord
  belongs_to :location
  belongs_to :subcategory
  
  def as_json(options={})
    super(methods: [:loc_name, :subcat_name])
  end
  def loc_name
    location.place
  end

  def subcat_name
    subcategory.name
  end
end
