class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :description
      t.string :breed
      t.integer :contact
      t.string :status
      t.integer :age

    end
  end
end
