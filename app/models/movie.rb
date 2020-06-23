class Movie < ApplicationRecord
	has_many :movie_reviews

	before_create :slugify
	
	def slugify
		self.slug = title.parameterize
	end
end
