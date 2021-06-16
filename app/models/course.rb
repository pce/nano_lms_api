class Course < ApplicationRecord
  has_many :events
  scope :latest, -> { order(updated_at: :desc) }
end
