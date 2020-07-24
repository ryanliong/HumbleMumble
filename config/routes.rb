Rails.application.routes.draw do
  root 'pages#index'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :a do 
      resources :accounts, param: :slug
      resources :movies, param: :id
      resources :games, param: :id
      resources :tv_shows, param: :id
    end
  end

  resources :movie, param: :slug
  resources :tv, param: :slug
  
  match '*path', to: 'pages#index', via: :all
end
