class ApplicationController < ActionController::API
  include Response
  include Authenticate
  include Pagy::Backend

  # protect_from_forgery with: :exception

  def noop
    render text: '', content_type: 'text/plain'
  end

  def fallback_index_html
    render :file => 'public/index.html'
  end

end
