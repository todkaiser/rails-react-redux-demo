Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/demo", to: "demo#index"
  get "/data", to: "data#index"

  match '*path', to: 'single_page_app#index', via: :get
end
