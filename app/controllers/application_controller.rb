class ApplicationController < ActionController::API
  include Response
  include Authenticate

  def noop
    render text: '', content_type: 'text/plain'
  end

end
