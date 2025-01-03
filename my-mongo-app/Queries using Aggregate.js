
db.orders.insertMany([
  { "_id": 1, "customer": "Alice", "items": [ { "product": "Laptop", "price": 1000 }, { "product": "Mouse", "price": 50 } ], "status": "Shipped" },
  { "_id": 2, "customer": "Bob", "items": [ { "product": "Keyboard", "price": 80 }, { "product": "Monitor", "price": 300 } ], "status": "Processing" },
  { "_id": 3, "customer": "Alice", "items": [ { "product": "Tablet", "price": 500 } ], "status": "Shipped" },
  { "_id": 4, "customer": "Charlie", "items": [ { "product": "Laptop", "price": 1200 } ], "status": "Cancelled" }
])

db.orders.find({},{_id:0});

// Aggregate 

db.orders.aggregate([
  {$match:{status:'Shipped'}},
  {$unwind : "$items"},
  {$group : {
    _id:"$customer",
    totalSpent:{$sum:"$items.price"}
  }},
  {$sort:{totalSpent:-1}}
  
  ]);
  
// 1. calculate total revenue

db.orders.aggregate([
  {$unwind:"$items"},
  {$group:{
    _id:null,
    totalRevenue:{$sum:"$items.price"}
    
  }},
  {$project:{_id:0,totalRevenue:1}} // remove the null id field
  
  ]);
  