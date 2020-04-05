class Api::V1::UsersController < ApplicationController
  before_action :authenticate_with_token! #, only: [:create, :update]
  before_action :find_user, only: [:show, :update, :destroy]
  load_and_authorize_resource

  def index
    @users = User.all
    render_json "Success", true, {users: @users}, :ok
  end

  def show
    render_json "Success", true, {user: @user}, :ok
  end

  def create
    @user = User.new user_params
    # @user.created_by = current_user.id
    if @user.save
      render_json "Success", true, {user: @user}, :ok
    else
      render_json "Error", true, {}, :unprocessable_entity
    end
  end

  def update
    # if can_update @user.user
    if @user.update user_params
      render_json "Success", true, {user: @user}, :ok
    else
      render_json "Error", true, {}, :unprocessable_entity
    end
    # else
    # render_json "Error", true, {}, :unauthorized
  end

  def destroy
    # if can_update @user.user
    if @user.destroy
      render_json "Success", true, {}, :ok
    else
      render_json "Error", true, {}, :unprocessable_entity
    end
    # else
    # render_json "Error", true, {}, :unauthorized
  end

  private

  def find_user
    @user = User.find_by id: params[:id]
    unless @user.present?
      render_json "user not found", false, {}, :not_found
    end
  end

  def user_params
    params.require(:user).permit :email
  end


end
