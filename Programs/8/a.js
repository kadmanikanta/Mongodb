// MongoDB Script (Run in mongosh)
// 1. Switch to a new database
use EcommerceDB

// 2. Insert sample data into Products collection
db.Products.insertMany([
  {
    product_id: "P001",
    name: "Gaming Laptop",
    category: "Electronics",
    stock: 10,
    tags: ["laptop", "gaming", "high-performance"],
    price: 120000
  },
  {
    product_id: "P002",
    name: "Smartphone",
    category: "Electronics",
    stock: 25,
    tags: ["smartphone", "android", "5G"],
    price: 35000
  },
  {
    product_id: "P003",
    name: "T-Shirt",
    category: "Clothing",
    stock: null,
    tags: ["clothing", "casual", "cotton"],
    price: 500
  },
  {
    product_id: "P004",
    name: "Jeans",
    category: "Clothing",
    tags: ["clothing", "denim"],
    price: 2000
  }
])

// 3. Create different types of indexes
// Unique Index on product_id
db.Products.createIndex({ product_id: 1 }, { unique: true })

// Sparse Index on stock
db.Products.createIndex({ stock: 1 }, { sparse: true })

// Compound Index on category and name
db.Products.createIndex({ category: 1, name: 1 })

// Multikey Index on tags
db.Products.createIndex({ tags: 1 })

// 4. Verify the indexes
db.Products.getIndexes()