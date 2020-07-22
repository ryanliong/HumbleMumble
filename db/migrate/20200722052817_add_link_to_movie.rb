class AddLinkToMovie < ActiveRecord::Migration[6.0]
  def change
    add_column :movies, :link, :string
  end
end
