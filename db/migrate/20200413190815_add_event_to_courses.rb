class AddEventToCourses < ActiveRecord::Migration[6.0]
  def change
    rename_column :events, :courses_id, :course_id
  end
end
