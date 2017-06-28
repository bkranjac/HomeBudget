class CategoriesController < ApplicationController
  def index
    render json:Category.all
  end

  def create
    category = Category.create(name: params[:categoryName],
                               description: params[:categoryDescription]
                               )
    render json:category
  end
end
