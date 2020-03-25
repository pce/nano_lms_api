class AddRolesToUsers < ActiveRecord::Migration[6.0]
  def change
    # alternative to enum or string...
    add_column :users, :admin_role, :boolean
    add_column :users, :supervisor_role, :boolean
    add_column :users, :user_role, :boolean
  end
end
