class TransactionsController < ApplicationController
  def index
    render json: Transaction.includes(:location, :subcategory).order(created_at: :desc).all
  end

  def create
    transaction = Transaction.create(transaction_params)
    render json:transaction
  end

  private
  def transaction_params
    params.permit(:description, :tdate, :amount, :isfixed, :isrecurring, :location_id, :subcategory_id)
  end

end
