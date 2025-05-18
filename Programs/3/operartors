
//3a. Execute query selectors (comparison selectors, logical selectors ) and list out the results on any collection.



//To create the new database as well as switch the database if not existing
use companyDB


//To insert the multiple values or documents
db.Employees.insertMany([
  { name: "Alice", age: 30, department: "HR", salary: 50000, joinDate: new Date("2015-01-15") },
  { name: "Bob", age: 24, department: "Engineering", salary: 70000, joinDate: new Date("2019-03-10") },
  { name: "Charlie", age: 29, department: "Engineering", salary: 75000, joinDate: new Date("2017-06-23") },
  { name: "David", age: 35, department: "Marketing", salary: 60000, joinDate: new Date("2014-11-01") },
  { name: "Eve", age: 28, department: "Finance", salary: 80000, joinDate: new Date("2018-08-19") }
])


//Queries Using Comparison Selectors:

// 1. $eq (Equal): Find employees in the “Engineering” department.

db.Employees.find({ department: { $eq: "Engineering" } }).pretty()

//2. $ne (Not Equal): Find employees who are not in the “HR” department.

db.Employees.find({ department: { $ne: "HR" } }).pretty()


//3. $gt (Greater Than): Find employees who are older than 30.

db.Employees.find({ age: { $gt: 30 } }).pretty()


//4. $lt (Less Than): Find employees with a salary less than 70000.

db.Employees.find({ salary: { $lt: 70000 } }).pretty()


//5. $gte (Greater Than or Equal): Find employees who joined on or after January 1, 2018.

db.Employees.find({ joinDate: { $gte: new Date("2018-01-01") } }).pretty()

//6. $lte (Less Than or Equal): Find employees who are 28 years old or younger.

db.Employees.find({ age: { $lte: 28 } }).pretty()

//Queries Using Logical Selectors:

//1. $and (Logical AND): Find employees who are in the “Engineering” department and have a salary greater than 70000.

db.Employees.find({ 
  $and: [
    { department: "Engineering" },
    { salary: { $gt: 70000 } }
  ] 
}).pretty()

//2. $or (Logical OR): Find employees who are either in the “HR” department or have a salary less than 60000.

db.Employees.find({ 
  $or: [
    { department: "HR" },
    { salary: { $lt: 60000 } }
  ] 
}).pretty()


