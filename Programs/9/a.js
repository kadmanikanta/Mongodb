
// a. Develop a query to demonstrate Text search using catalog data collection for a given word.


# Import CSV data into the catalog collection
mongoimport --db=kannadaMoviesDB --collection='catalog' --file=kan_movies.csv --type=csv --fields="name","year","duration","rating","genre","lang"

# Switch to the database
use kannadaMoviesDB

# Create a text index on 'name' and 'genre'
db.catalog.createIndex({ name: "text", genre: "text" })

# Perform a text search for the word "maga"
db.catalog.find({ $text: { $search: "maga" } })

# Perform a text search for the word "raju"
db.catalog.find({ $text: { $search: "raju" } })

# Perform a text search for the phrase "tappida Maga"
db.catalog.find({ $text: { $search: "\"tappida Maga\"" } })
