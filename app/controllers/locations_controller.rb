class LocationsController < ApplicationController
  def index
    render json:Location.includes(:user).all
  end

  def create
    location = Location.create(place: params[:location], user_id: current_user.id)
    render json:location
  end
end
