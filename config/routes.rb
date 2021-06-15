Rails.application.routes.draw do


  devise_for :users

  namespace :api, defaults: {format: :json} do
    namespace :v1 do

      devise_scope :user do
        post "/sign_up", to: "registrations#create"
        post "/sign_in", to: "sessions#create"
        delete "/sign_out", to: "sessions#destroy"
      end

      resources :events #, only: [:index, :show]
      resources :courses #, only: [:index, :show]
      resources :users #, only: [:index, :show]
    end
  end

  # todo optimize to one regex?
  match '/api/v1/(:anything)' => 'application#noop', via: [:options]
  match '/api/v1/(:anything)/(:anything)' => 'application#noop', via: [:options]

  # deliver the frontend
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
