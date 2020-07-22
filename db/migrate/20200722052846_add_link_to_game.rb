class AddLinkToGame < ActiveRecord::Migration[6.0]
  def change
    add_column :games, :link, :string
  end
end
