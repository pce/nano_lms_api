class Api::V1::RegistrationsController < Devise::RegistrationsController

  before_action :ensure_params_exists, only: [:create]

  def create
    user = User.new user_params
    if user.save
      render json: {
          messages: "Success",
          is_success: true,
          data: user
          }, status: :ok
      else
          render json: {
            messages: "Success",
            is_success: false,
        data: {}
      }, status: :unprocessable_entity
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

  def ensure_params_exists
    return  if params[:user].present?
    render json: {
      messages: "Missing params",
      is_success: false,
      data: {}
    }, status: :bad_request
  end

end
