class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :image_url
      t.string :description
      t.string :score
      t.string :slug

      t.timestamps
    end
  end
end
