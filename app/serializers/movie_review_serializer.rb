class MovieReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :publication, :date, :description, :score, :link, :movie_id
end
