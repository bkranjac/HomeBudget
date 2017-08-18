class CategoriesController < ApplicationController
  def index
    render json:Category.all
  end

  def create
    category = Category.create(category_params
                              )
    if category.save
      render json:category
    else
      render json:category.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    category = Category.find(params[:id])
    category.destroy
    head :ok
  end

  def show
    category = Category.find(params[:id])
    render json:category
  end

   def update
     category = Category.find(params[:id])
     if category.update_attributes (category_params)
       render json:category
     else
       render json:category.errors.full_messages, status: :unprocessable_entity
     end
   end

  private
   def category_params
     params.permit(:name, :description)
   end
end
