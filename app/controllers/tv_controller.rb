class TvController < ApplicationController
	require_relative "../scraper/tv_scraper.rb"
	def index
	end

	def show
		render json: Tv_scraper.scraper(params[:slug])
	end

	def create
		
	end

	def update
		
	end

	def destroy
		
	end
end 
