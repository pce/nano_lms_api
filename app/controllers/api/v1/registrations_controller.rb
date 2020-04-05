class Api::V1::RegistrationsController < Devise::RegistrationsController
  before_action :authenticate_with_token! #, only: [:create, :update]
  before_action :ensure_params_exists, only: [:create]

  def create
    user = User.new user_params
    if user.save
      render_json "Success", true, {user: user}, :ok
    else
      render_json "Error: %s" % [user.errors.full_messages], false, {}, :unprocessable_entity
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

  def ensure_params_exists
    return if params[:user].present?
    render_json "Missing params", false, {}, :bad_request
  end


end
