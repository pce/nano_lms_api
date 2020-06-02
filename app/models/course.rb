class Course < ApplicationRecord
  has_many :events
  default_scope { order(updated_at: :desc) }
end
