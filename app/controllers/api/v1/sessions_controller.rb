class Api::V1::SessionsController < Devise::SessionsController
  before_action :sign_in_params, only: [:create]
  before_action :find_user, only: [:create]

  # sign_in (start session)
  def create
    if @user.valid_password?(sign_in_params[:password])
      sign_in "user", @user
      render_json "Success", true, {user: @user}, :ok
    else
      render_json "Error: %s" % [user.errors.full_messages], false, {}, :unauthorized
    end
  end

  private
  def sign_in_params
    params.require(:sign_in).permit(:email, :password)
  end

  def find_user
    @user = User.find_for_database_authentication(email: sign_in_params[:email])
    if @user
      return @user
    else
      render_json "User not found", false, {}, :failure
    end
  end

end