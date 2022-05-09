Rails.application.routes.draw do
  resources :robots
  root 'robots#index'  
end
