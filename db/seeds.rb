puts "🌱 Seeding spices..."

# Seed your database here

50.times do
    user = User.create(
      name: Faker::Name.name,
      email: Faker::Internet.email,
      password: "password"
    )
  end

  50.times do
    pet = Pet.create(
      name: Faker::Creature::Animal.name
      
    )
  end


puts "✅ Done seeding!"
