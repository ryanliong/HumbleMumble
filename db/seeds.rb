# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'database_cleaner'

DatabaseCleaner.clean_with(:truncation)

movies = Movie.create([
	{
		title: 'Testing movie title',
		image_url: 'https://store-images.s-microsoft.com/image/apps.23351.64828036868441790.79978c50-d657-45e2-9dd7-f132b22f3122.3ce2b04c-f38a-4e9d-aab9-b1a2812c0e33',
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit sapiente dignissimos at aut perferendis sequi repellendus vero eveniet velit eius.",
		score: "Average Score: 77"
	}
	
])

movieReviews = MovieReview.create([
	{
		name: "TESTING MOVIE",
		publication: "Test Public",
		date: "19/10/2020",
		description: "Lorem Ipsum",
		score: "Orignial Score = 4/4",
		link: "https://someurl.com",
		movie: movies.find {|mov| mov.title == "Testing movie title"}
	}
])
