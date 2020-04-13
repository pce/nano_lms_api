class Course < ApplicationRecord
  has_many :events

  self.per_page = 10

end
