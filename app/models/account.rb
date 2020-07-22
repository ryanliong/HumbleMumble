class Account < ApplicationRecord
	has_many :movies
	has_many :games
	has_many :tv_shows

	before_create :slugify
	
	def slugify
		self.slug = name.parameterize
	end

	def movies_count
		movies.count
	end

	def games_count
		games.count
	end

	def tv_shows_count
		tv_shows.count
	end
end
