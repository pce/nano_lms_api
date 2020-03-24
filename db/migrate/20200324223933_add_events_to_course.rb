class AddEventsToCourse < ActiveRecord::Migration[6.0]
  def change
    # add_column :events, :courses_id, :integer, null: true
    add_reference :events, :courses, null: true
  end
end
