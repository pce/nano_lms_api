class Api::V1::EventsController < ApplicationController
  before_action :authenticate_with_token!, only: [:create, :update]
  before_action :find_event, only: [:show, :update]

  def index
    @events = Event.all
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

  private

  def find_event
    @event = Event.find_by id: params[:id]
    unless @event.present?
      render_json "Event not found", false, {}, :not_found
    end
  end

  def event_params
    params.require(:event).permit :title, :start, :end
  end

end
