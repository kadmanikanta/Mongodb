// Switch to the restaurantDB database
use restaurantDB

// Insert sample documents into the restaurants collection
db.restaurants.insertMany([
  {
    name: "Biryani House",
    cuisine: "Indian",
    location: "Downtown",
    reviews: [
      { user: "Aarav", rating: 5, comment: "Amazing biryani!" },
      { user: "Bhavana", rating: 4, comment: "Great place!" }
    ],
    contact: { phone: "1234567890", email: "contact@biryanihouse.com" }
  },
  {
    name: "Curry Palace",
    cuisine: "Indian",
    location: "Downtown",
    reviews: [
      { user: "Gaurav", rating: 4, comment: "Spicy and tasty!" },
      { user: "Harini", rating: 5, comment: "Best curry in town!" }
    ],
    contact: { phone: "0987654321", email: "contact@currypalace.com" }
  },
  {
    name: "Taco Stand",
    cuisine: "Mexican",
    location: "Downtown",
    reviews: [
      { user: "Ishaan", rating: 5, comment: "Fantastic tacos!" },
      { user: "Jaya", rating: 4, comment: "Very authentic" }
    ],
    contact: { phone: "1122334455", email: "contact@tacostand.com" }
  }
])

// Create a unique index on the contact.email field
db.restaurants.createIndex({ "contact.email": 1 }, { unique: true })

// Create a sparse index on the location field
db.restaurants.createIndex({ location: 1 }, { sparse: true })

// Create a compound index on the name and location fields
db.restaurants.createIndex({ name: 1, location: 1 })

// Create a multikey index on the reviews field
db.restaurants.createIndex({ reviews: 1 })

// Verify the created indexes
db.restaurants.getIndexes()

