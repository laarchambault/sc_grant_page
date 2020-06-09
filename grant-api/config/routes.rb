Rails.application.routes.draw do
  resources :foundations
  resources :categories, only: [:index]
  post '/grants/filter', to: 'grants#filter'
  resources :grants, only: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
