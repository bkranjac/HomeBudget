class LocationsController < ApplicationController
  def index
    render json:Location.includes(:user).all
  end

  def create
    #location = Location.create(place: params[:place], user_id: current_user.id)
    location = Location.create(location_params)
    render json:location
  end
  def destroy
    location = Location.find(params[:id])
    location.destroy
    head :ok
  end

  def show
    location = Location.find(params[:id])
    render json:location
  end

   def update
     location = Location.find(params[:id])
     if location.update_attributes (location_params)
       render json:location
     else
       render json:location.errors.full_messages, status: :unprocessable_entity
     end

   end

   private
    def location_params
      params.permit(:place).merge(user_id: current_user.id)
    end
end
