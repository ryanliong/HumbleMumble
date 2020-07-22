class AddLinkToTvShow < ActiveRecord::Migration[6.0]
  def change
    add_column :tv_shows, :link, :string
  end
end
