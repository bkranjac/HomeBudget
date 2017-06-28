class CreateSubcategories < ActiveRecord::Migration[5.0]
  def change
    create_table :subcategories do |t|
      t.text :name
      t.text :description
      t.integer :category_id
      t.timestamps
      t.timestamps
    end
    add_index :subcategories, :category_id
    add_foreign_key :subcategories, :categories
  end
end
