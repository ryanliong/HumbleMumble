class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :image_url, :description, :score, :link, :account_id
end
