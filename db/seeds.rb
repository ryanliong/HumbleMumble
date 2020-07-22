# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'database_cleaner'

DatabaseCleaner.clean_with(:truncation)

accounts = Account.create([
	{
		name: "Sara Doe",
		password: "123456",
		bio: "Lorem Ipsum",
		image_url: 'https://i.pinimg.com/originals/82/de/68/82de688ad93c71d5f1703316ec3a354b.jpg'
	}
])

movies = Movie.create([
	{
		title: 'Movie Title',
		image_url: 'https://store-images.s-microsoft.com/image/apps.23351.64828036868441790.79978c50-d657-45e2-9dd7-f132b22f3122.3ce2b04c-f38a-4e9d-aab9-b1a2812c0e33',
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit sapiente dignissimos at aut perferendis sequi repellendus vero eveniet velit eius.",
		score: "Average Score: 77",
		link: "temp",
		account: accounts.find {|acc| acc.name == "Sara Doe"}
	}
	
])

tv_shows = TvShow.create([
	{
		title: 'TvShow Title',
		image_url: 'https://store-images.s-microsoft.com/image/apps.23351.64828036868441790.79978c50-d657-45e2-9dd7-f132b22f3122.3ce2b04c-f38a-4e9d-aab9-b1a2812c0e33',
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit sapiente dignissimos at aut perferendis sequi repellendus vero eveniet velit eius.",
		score: "Average Score: 69",
		link: "temp",
		account: accounts.find {|acc| acc.name == "Sara Doe"}
	}
	
])

games = Game.create([
	{
		title: 'Game Title',
		image_url: 'https://store-images.s-microsoft.com/image/apps.23351.64828036868441790.79978c50-d657-45e2-9dd7-f132b22f3122.3ce2b04c-f38a-4e9d-aab9-b1a2812c0e33',
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit sapiente dignissimos at aut perferendis sequi repellendus vero eveniet velit eius.",
		score: "Average Score: 42",
		link: "temp",
		account: accounts.find {|acc| acc.name == "Sara Doe"}
	}
	
])


