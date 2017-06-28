class CreateTransactions < ActiveRecord::Migration[5.0]
  def change
    create_table :transactions do |t|
      t.text :description
      t.datetime :tdate
      t.money :amount
      t.boolean :isfixed
      t.boolean :isrecurring
      t.integer :location_id
      t.integer :subcategory_id
      t.timestamps
      t.timestamps
    end
  end
end
