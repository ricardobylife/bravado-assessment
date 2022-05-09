Rails.application.routes.draw do
  resources :robots
  root 'robots#index'
  get 'search', to: 'search#search'
end
