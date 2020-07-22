class AccountSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image_url, :bio, :slug

  has_many :movies
  has_many :games
  has_many :tv_shows
end
