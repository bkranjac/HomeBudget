class SubcategoriesController < ApplicationController
  def index
    render json: Subcategory.all
  end

  def create
    subcategory = Subcategory.create(subcategory_params)
    render json:subcategory
  end

  private
  def subcategory_params
    params.permit(:name, :description, :category_id)
  end

end
