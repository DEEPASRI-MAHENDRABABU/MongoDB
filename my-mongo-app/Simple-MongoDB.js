
db.emp.insertMany([
  {empId: 1, name: 'Clark', age:20,city:'Los' },
  {empId: 2, name: 'Dave', age:30 , city:'India' },
  {empId: 3, name: 'Ava', age:15,city:'New york' }
]);
db.emp.insertOne({
  empId:4 , name:'Deepa' , age:22,city:'Los'
})

db.emp.find(); // retrives all

db.emp.find({age:{$gt:25}}) // display the emp age above 25

db.emp.find({age:{$lte:20}}) //display the emp age less then or equal to 20

db.emp.find({name:{$not:'Ava'}}) // displays the names without ava

db.emp.find({
  $and:[
    {city:'New york'},   // retrives the emp with city and age
    {age:{$gte:15}}
    ]
})

