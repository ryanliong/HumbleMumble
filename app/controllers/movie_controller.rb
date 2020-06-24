class MovieController < ApplicationController
	require_relative "../scraper/movie_scraper.rb"
	def index
	end

	def show
		render json: Movie_scraper.scraper(params[:slug])
	end

	def create
		
	end

	def update
		
	end

	def destroy
		
	end
end 
