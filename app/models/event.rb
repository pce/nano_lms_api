class Event < ApplicationRecord
  belongs_to :courses, optional: true
end
