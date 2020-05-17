class Event < ApplicationRecord
  belongs_to :course, optional: true

  def serializable_hash(options={})
    options = {
      :include => {:course => {:only => [:title, :id]}},
      # :only => [:title, :id]
    }.update(options)
    super(options)
  end

end
