module Api
	module A
		class AccountsController < ApplicationController
			def index
				accounts = Account.all

				render json: AccountSerializer.new(accounts, options).serialized_json
			end

			def show
				account = Account.find_by(slug: params[:slug])

				render json: AccountSerializer.new(account, options).serialized_json
			end

			def create
				account = Account.new(account_params)

				if account.save
					render json: AccountSerializer.new(account).serialized_json
				else 
					render json: {error: account.errors.messages}, status: 422
				end
			end

			def update
				account = Account.find_by(slug: params[:slug])

				if account.update(account_params)
					render json: AccountSerializer.new(account, options).serialized_json
				else 
					render json: {error: account.errors.messages}, status: 422
				end
			end

			def destroy
				account = Account.find_by(slug: params[:slug])

				if account.destroy
					head :no_content
				else 
					render json: {error: account.errors.messages}, status: 422
				end
			end

			private

			def account_params
				params.require(:account).permit(:name, :password, :image_url, :bio)
			end

			def options
				@options || {include: %i[movies games tv_shows]}
			end
		end 
	end
end	