// b. Demonstrate optimization of queries using indexes


// Step 1: Restore and verify the database
mongorestore -d stocks dump/stocks

use stocks
show collections
db.values.findOne()
db.values.countDocuments()

// Step 2: Execute a slow query without index
db.values.find({}).sort({ close: -1 }).limit(1)
db.values.find({}).sort({ close: -1 }).limit(1).explain("executionStats").executionStats.totalDocsExamined
db.values.find({}).sort({ close: -1 }).limit(1).explain("executionStats").executionStats.executionTimeMillis

// Step 3: Create an index on the 'close' field
db.values.createIndex({ close: 1 })

// Step 4: Re-run the same query with index
db.values.find({}).sort({ close: -1 }).limit(1)
db.values.find({}).sort({ close: -1 }).limit(1).explain("executionStats").executionStats.totalDocsExamined
db.values.find({}).sort({ close: -1 }).limit(1).explain("executionStats").executionStats.executionTimeMillis
