class CreateRobots < ActiveRecord::Migration[6.1]
  def change
    create_table :robots do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :title
      t.string :city
      t.string :address
      t.string :avatar

      t.timestamps
    end
  end
end
