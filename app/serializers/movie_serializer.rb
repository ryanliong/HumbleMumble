class MovieSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :image_url, :description, :score, :slug

  has_many :movie_reviews
end
