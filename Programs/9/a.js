
// a. Develop a query to demonstrate Text search using catalog data collection for a given word.


# Import CSV data into the catalog collection

Download from Datasets

# Switch to the database
use kannadaMoviesDB

# Create a text index on 'name' and 'genre'
db.catalog.createIndex({ Name: "text", Genre: "text" })

# Perform a text search for the word "maga"
db.catalog.find({ $text: { $search: "maga" } })

# Perform a text search for the word "raju"
db.catalog.find({ $text: { $search: "raju" } })

# Perform a text search for the phrase "tappida Maga"
db.catalog.find({ $text: { $search: "\"tappida Maga\"" } })
