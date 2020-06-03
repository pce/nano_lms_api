class Api::V1::EventsController < ApplicationController
  before_action :authenticate_with_token! #, only: [:create, :update]
  before_action :find_event, only: [:show, :update, :destroy]
  load_and_authorize_resource

  def index
    find_events
    render_json "Success", true, {events: @events}, :ok
  end

  def show
    render_json "Success", true, {event: @event}, :ok
  end

  def create
    @event = Event.new event_params
    @event.start = params[:start]
    @event.end = params[:end]
    @event.title = params[:title]
    @event.user_id = current_user.id

    if @event.save
      render_json "Success", true, {event: @event}, :ok
    else
      render_json "Error", true, {}, :unprocessable_entity
    end
  end

  def update
    # if can_update @event.user
    if @event.update event_params
      render_json "Success", true, {event: @event}, :ok
    else
      render_json "Error", true, {}, :unprocessable_entity
    end
    # else
    # render_json "Error", true, {}, :unauthorized
  end

  def destroy
    # if can_update @event.user
    if @event.destroy
      render_json "Success", true, {}, :ok
    else
      render_json "Error", true, {}, :unprocessable_entity
    end
    # else
    # render_json "Error", true, {}, :unauthorized
  end

  private


  def find_events
    if params.has_key?(:order_by)
      od = params[:order_direction]  || 'desc'
      @events = Event.order(params[:order_by] => od)
    else
      unless params[:page]
        # todo optimize calendar (and set paging higher etc.)
        @events = Event.all
      else
        @events = pagy(Event.all)
      end
    end
  end


  def find_event
    @event = Event.find_by id: params[:id]
    unless @event.present?
      render_json "Event not found", false, {}, :not_found
    end
  end

  def event_params
    params.require(:event).permit :title, :start, :end, :course_id
  end

end
