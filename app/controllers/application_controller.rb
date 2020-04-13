class ApplicationController < ActionController::API
  include Response
  include Authenticate

  # protect_from_forgery with: :exception

  def pagination_dict(collection)
    {
      current_page: collection.current_page,
      next_page: collection.next_page,
      prev_page: collection.previous_page,
      total_pages: collection.total_pages,
      total_count: collection.total_entries
    }
  end

  def noop
    render text: '', content_type: 'text/plain'
  end

  def fallback_index_html
    render :file => 'public/index.html'
  end

end
