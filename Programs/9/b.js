

// b. Develop queries to illustrate excluding documents with certain words and phrases

use kannadaMoviesDB

show collections

db.catalog.countDocuments()



// to check which index are there 

db.catalog.getIndexes()

// Create a text index on the name and description fields
db.catalog.createIndex({ Name: "text", Description: "text" })


// to check which index are there 

db.catalog.getIndexes()

// Exclude documents containing the phrase "da maga"
db.catalog.find({$text: {$search: "maga -\"da maga\""}})




