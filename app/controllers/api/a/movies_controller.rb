module Api
	module A
		class MoviesController < ApplicationController
			protect_from_forgery with: :null_session
			
			def index
				movie = Movie.all

				render json: MovieSerializer.new(movie).serialized_json
			end

			def create
				movie = Movie.new(movie_params)

				if movie.save
					render json: MovieSerializer.new(movie).serialized_json
				else 
					render json: {error: movie.errors.messages}, status:422
				end
			end

			def destroy
				movie = Movie.find_by(movie_params[:id])

				if movie.destory
					head :no_content
				else 
					render json: {error: movie.errors.messages}, 	status:422
				end
			end

			private

			def movie_params
				params.require(:movie).permit(:title, :image_url, 	:description, :score, :account_id)	
			end
		end
	end
end	