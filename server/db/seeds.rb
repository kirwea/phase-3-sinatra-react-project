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
      name: Faker::Creature::Animal.name,
      description: Faker::Lorem.sentence,
      breed: Faker::Creature::Animal.name,
      contact: "0702957022",
      image: Faker::LoremFlickr.image,
      status: ["Adopted", "NotAdopted"].sample,
      age: rand(1..15),
      image: Faker::LoremFlickr.image

      
    )
  end


puts "✅ Done seeding!"
