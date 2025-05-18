
// Aggregation Pipeline to illustrate Text search on Catalog data collection


result = db.catalog.aggregate([
    // 1. Match stage: Filter documents by year 2017
  {$match:{year :2017}}, 
    // 2. Group stage: Group by genre and calculate average rating
  {$group:{_id: "$genre", avgRating:{$avg: "$rating"}}}, 
    // 3. Sort stage: Sort by avgRating in descending order
  {$sort: {avgRating:-1}},
    // 4. Project stage: Include specific fields
  {$project:{year:"$year", avgRating:1, genre:1} }, 
    // 5. Limit stage: Limit the output to 5 results
  {$limit:5} ]).toArray()
  print("Top 5 rated movie genres with their average rating")
  printjson(result)





  result2 = db.catalog.aggregate([
    // 1. Match stage: Filter documents by year 2017
  {$match:{year :2017}}, 
    // 2. Group stage: Group by genre and calculate average rating
  {$group:{_id: "$genre", avgRating:{$avg: "$rating"}}}, 
    // 3. Sort stage: Sort by avgRating in descending order
  {$sort: {avgRating:-1}},
    // 4. Project stage: Include specific fields
  {$project:{year:"$year", avgRating:1, genre:1} }, 
    // 5. Limit stage: Limit the output to 7 results
  {$limit:7},
    // 6. Skip stage: Skip the first two results
  {$skip:2} ]).toArray()
  print("Top 7 rated movie genres with their average rating with he firsttwo skipped")
  printjson(result2)