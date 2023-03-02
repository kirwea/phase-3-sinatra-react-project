class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |w|
      w.string :name
      w.string :email
      w.string :password
    end
  end
end
