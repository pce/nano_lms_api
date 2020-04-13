class Api::V1::CoursesController < ApplicationController
  before_action :authenticate_with_token! #, only: [:create, :update]
  before_action :find_course, only: [:show, :update, :destroy]
  load_and_authorize_resource

  def index
    if params.has_key?(:page)
      @courses = Course.page(params[:page]).order('updated_at DESC')
      render_json "Success", true, {
        courses: @courses,
        pager: pagination_dict(@courses)
      }, :ok
    else
      @courses = Course.all.order('updated_at DESC')
      render_json "Success", true, {courses: @courses}, :ok
    end
  end

  def show
    render_json "Success", true, {course: @course, events: @course.events}, :ok
  end

  def create
    # raise params.inspect
    @course = Course.new course_params
    # @course.title = params[:course][:title]
    # @course.description = params[:course][:description]

    # todo add users_id
    # @course.user_id = current_user.id

    if @course.save
      render_json "Success", true, {course: @course}, :ok
    else
      render_json "Error", true, {}, :unprocessable_entity
    end
  end

  def update
    # raise params.inspect
    # if can_update @course.user
    if @course.update course_params
      render_json "Success", true, {course: @course}, :ok
    else
      render_json "Error", true, {}, :unprocessable_entity
    end
    # else
    # render_json "Error", true, {}, :unauthorized
  end

  def destroy
    # if can_update @course.user
    if @course.destroy
      render_json "Success", true, {}, :ok
    else
      render_json "Error", true, {}, :unprocessable_entity
    end
    # else
    # render_json "Error", true, {}, :unauthorized
  end

  private

  def find_course
    @course = Course.find_by id: params[:id]
    unless @course.present?
      render_json "Course not found", false, {}, :not_found
    end
  end

  def course_params
    params.require(:course).permit :title, :description
  end


end
