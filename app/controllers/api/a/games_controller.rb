module Api
	module A
		class GamesController < ApplicationController
			protect_from_forgery with: :null_session
			
			def index
				game = Game.all

				render json: GameSerializer.new(game).serialized_json
			end

			def create
				game = Game.new(game_params)

				if game.save
					render json: GameSerializer.new(game).serialized_json
				else 
					render json: {error: game.errors.messages}, status:422
				end
			end

			def destroy
				game = Game.find_by(id: params[:id])

				if game.destroy
					head :no_content
				else 
					render json: {error: game.errors.messages}, 	status:422
				end
			end

			private

			def game_params
				params.require(:game).permit(:title, :image_url, 	:description, :score, :account_id)	
			end
		end
	end
end	