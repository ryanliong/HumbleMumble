module Api
	module A
		class TvShowsController < ApplicationController
			protect_from_forgery with: :null_session
			
			def index
				tvShow = TvShow.all

				render json: TvShowSerializer.new(tvShow).serialized_json
			end

			def create
				tvShow = TvShow.new(tvShow_params)

				if tvShow.save
					render json: TvShowSerializer.new(tvShow).serialized_json
				else 
					render json: {error: tvShow.errors.messages}, status:422
				end
			end

			def destroy
				tvShow = TvShow.find_by(id: params[:id])

				if tvShow.destroy
					head :no_content
				else 
					render json: {error: tvShow.errors.messages}, 	status:422
				end
			end

			private

			def tvShow_params
				params.require(:tv_show).permit(:title, :image_url, 	:description, :score, :account_id)	
			end
		end
	end
end	