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
    end
  end

  match '/api/v1/(:anything)' => 'application#noop', via: [:options]

end
