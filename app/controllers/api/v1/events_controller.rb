class Api::V1::EventsController < ApplicationController

  before_action :find_event, only: [:show]

  def index
    @events = Event.all
    render_json "Success", true, {events: @events}, :ok
  end

  def show
    render_json "Success", true, {event: @event}, :ok
  end

  private

  def find_event
    @event = Event.find_by id: params[:id]
    unless @book.present?
      render_json "Event not found", false, {}, :not_found
    end
  end

end
