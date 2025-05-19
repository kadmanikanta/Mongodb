// Step 1: Restore and verify the database
// Use the 'values' database
use values

// Show all collections in the database
show collections

// Count the number of documents in the Stocks collection
db.Stocks.countDocuments()

// Find the most recent document for GOOGL, sorted by date in descending order
db.Stocks.find({"Symbol":"GOOGL"}).sort({date: -1}).limit(1)

// Step 2: Execute a slow query without index
// Run a query to find the document with the highest 'close' value
db.Stocks.find({}).sort({ close: -1 }).limit(1)

// Check the number of documents examined (should be all documents)
db.Stocks.find({}).sort({ close: -1 }).limit(1).explain("executionStats").executionStats.totalDocsExamined

// Check the execution time in milliseconds
db.Stocks.find({}).sort({ close: -1 }).limit(1).explain("executionStats").executionStats.executionTimeMillis

// Step 3: Create an index on the 'close' field
db.Stocks.createIndex({ close: 1 })

// Step 4: Re-run the same query with index
// Re-run the query with the index
db.Stocks.find({}).sort({ close: -1 }).limit(1)

// Check the number of documents examined (should be 1 with the index)
db.Stocks.find({}).sort({ close: -1 }).limit(1).explain("executionStats").executionStats.totalDocsExamined

// Check the execution time in milliseconds (should be faster)
db.Stocks.find({}).sort({ close: -1 }).limit(1).explain("executionStats").executionStats.executionTimeMillis