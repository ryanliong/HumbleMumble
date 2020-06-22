module Api
	module M
		class MovieReviewsController < ApplicationController
			def index
				movieReviews = MovieReviews.all

				render json: MovieReviewSerializer.new(movieReviews).serialized_json
			end

			def create
				movieReview = MovieReviews.new(movieReview_params)

				if movieReview.save
					render json: MovieReviewSerializer.new(movieReview).serialized_json
				else 
					render json: {error: review.errors.messages}, status:422
				end
			end

			def destroy
				movieReview = MovieReviews.find_by(movieReview_params[:id])

				if movieReview.destory
					head :no_content
				else 
					render json: {error: review.errors.messages}, 	status:422
				end
			end

			private

			def movieReview_params
				params.require(:movieReview).permit(:name, :publication, 	:date, :description, :movie_id)	
			end
		end
	end
end	