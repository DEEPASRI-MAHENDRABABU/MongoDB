db.createCollection('students')
db.students.insertOne({name:'John',age:22,grade:'A'});

db.students.insertMany([
{name:'Petter',age:21,grade:'B'},
{name:'Soban',age:30,grade:'A'},
{name:'Jackcline',age:35,grade:'C'},
{name:'Sidd',age:25,grade:'E'}
])

db.students.find({},{_id:0}).pretty();  // id is used to hide a Object id in console


// Find the student with the age greater than 25
db.students.find(
{age:{$gt:25}},{_id:0}).pretty(); 

// Find the student having grade A
db.students.find(
  {grade:'A'},{_id:0}        
  ).pretty();


// Find the student whose name starts with S
db.students.find(
  {name:{$regex:'^S'}},{_id:0}
  ).pretty();
  
  
//Find all sutudents who or either 25 or grade is B 
db.students.find({
  $or:[
    {age:25} , {grade:'B'}
    ]
  },{_id:0});
  

//Find the students who are older then 18 and have a grade A
db.students.find({
  $and:[
    {age:{$gt:18}},
      {grade:'A'}
    ]
},{_id:0})
  
  
//Find all the students who do not have grade console
db.students.find({
  grade:{$ne:'C'}
},{_id:0})

//Find students who are NOT alder then 30

db.students.find({age:{$not:{$gt:30}}},{_id:0})

// Update the Grade 

db.students.updateOne(
  {name:'John'},
  {$set:{grade:'A+'}}  // UPDATED BY A+
  )
























  
  