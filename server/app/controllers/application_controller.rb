class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
    get '/pets' do
      pet = Pet.all
      pet.to_json
    end

    get "/users" do
      users = User.all
      users.to_json
    end

    post "/new_pet" do
      new_pet = Pet.create(
        name: params[:name],
        description: params[:description],
        breed: params[:breed],
        status: params[:status],
        age: params[:age],
        image: params[:image]
        
      )
      new_pet.to_json
    end

    patch "/pets/:id" do
      pets = Pet.find(params[:id])
      pets.update(
        name: params[:name],
        description: params[:description],
        breed: params[:breed],
        status: params[:status],
        age: params[:age],
        image: params[:image]
      )
      pets.to_json
    end

    delete "/pets/:id" do
      pets = Pet.find(params[:id])
      pets.destroy
      pets.to_json
    end


end
