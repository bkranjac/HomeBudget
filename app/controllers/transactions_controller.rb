class TransactionsController < ApplicationController
  def index
    render json: Transaction.includes(:location, :subcategory).order(created_at: :desc).all
  end

  def create
    transaction = Transaction.create(transaction_params)
    if transaction.save
      render json:transaction
    else
      render json:transaction.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
   transaction = Transaction.find(params[:id])
   render json:transaction
  end

  def destroy
    transaction = Transaction.find(params[:id])
    transaction.destroy
    head :ok
  end

  def update
    transaction = Transaction.find(params[:id])
    if transaction.update_attributes (transaction_params)
      render json:transaction
    else
      render json:transaction.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def transaction_params
    params.require(:transaction).permit(:description, :tdate, :amount, :isfixed, :isrecurring, :location_id, :subcategory_id)
  end

end
