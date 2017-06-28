Rails.application.routes.draw do
  resources :transactions
  resources :subcategories
  resources :categories
  resources :locations
  get 'profile' => 'profile#index'
  patch 'profile' => 'profile#update'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "home#index"
end
