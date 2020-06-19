class CreateMovieReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :movie_reviews do |t|
      t.string :name
      t.string :publication
      t.string :date
      t.string :description
      t.string :score
      t.string :link
      t.belongs_to :movie, null: false, foreign_key: true

      t.timestamps
    end
  end
end
