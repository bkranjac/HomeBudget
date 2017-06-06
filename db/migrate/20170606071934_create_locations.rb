class CreateLocations < ActiveRecord::Migration[5.0]
  def change
    create_table :locations do |t|
      t.integer :user_id
      t.text :place
      t.timestamps
      t.timestamps
    end
  end
end
