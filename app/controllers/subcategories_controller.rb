class SubcategoriesController < ApplicationController
  def index
    render json: Subcategory.all
  end

  def create
    subcategory = Subcategory.create(subcategory_params)
    render json:subcategory
  end
  def destroy
    subcategory = Subcategory.find(params[:id])
    subcategory.destroy
    head :ok
  end

  def show
    subcategory = Subcategory.find(params[:id])
    render json:subcategory
  end

   def update
     subcategory = Subcategory.find(params[:id])
     if subcategory.update_attributes (subcategory_params)
       render json:subcategory
     else
       render json:subcategory.errors.full_messages, status: :unprocessable_entity
     end
   end
  private
  def subcategory_params
    params.permit(:name, :description, :category_id)
  end

end
