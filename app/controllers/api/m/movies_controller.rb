module Api
	module M
		class MoviesController < ApplicationController
			def index
				movies = Movies.all

				render json: MovieSerializer.new(movies, options).serialized_json
			end

			def show
				movie = Movie.find_by(slug: params[:slug])

				render json: MovieSerializer.new(movie, options).serialized_json
			end

			def create
				movie = Movie.new(account_params)

				if movie.save
					render json: MovieSerializer.new(movie).serialized_json
				else 
					render json: {error: movie.errors.messages}, status: 422
				end
			end

			def update
				movie = Movie.find_by(slug: params[:slug])

				if movie.update(account_params)
					render json: MovieSerializer.new(movie, options).serialized_json
				else 
					render json: {error: movie.errors.messages}, status: 422
				end
			end

			def destroy
				movie = Movie.find_by(slug: params[:slug])

				if movie.destroy
					head :no_content
				else 
					render json: {error: movie.errors.messages}, status: 422
				end
			end

			private

			def movie_params
				params.require(:movie).permit(:title, :image_url, :description)
			end

			def options
				@options || {include: %i[movie_reviews]}
			end

	end
end	