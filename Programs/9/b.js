

// b. Develop queries to illustrate excluding documents with certain words and phrases

use kannadaMoviesDB

show collections

db.catalog.countDocuments()


// Create a text index on the name and description fields
db.catalog.createIndex({ name: "text", description: "text" })

// Exclude documents containing the word "action"
db.catalog.find({ $text: { $search: "crime romance -action" }, year:2021 } )

// Exclude documents containing the phrase "da maga"
db.catalog.find({$text: {$search: "maga -"da maga""}})

// Perform a text search query to find documents containing the phrase "maga"
db.catalog.find({$text: {$search: ""tappida Maga""}})



