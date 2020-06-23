Rails.application.routes.draw do
  root 'pages#index'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :m do 
      resources :movies, param: :slug
      resources :movie_reviews
    end
  end
  
  match '*path', to: 'pages#index', via: :all
end
