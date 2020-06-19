//First Initialize Express and invoke express method
let express = require("express")
let app= express();


//lets generate the port
let port = process.env.NODE_ENV || 4800;
app.listen(port, ()=> {console.log(`port is working on ${port}`)});



let courses = [
    {id:1 , name:"Angualar"},
{id:2 , name:"React"},
{id:3 , name:"Javascript"},
{id:4 , name:"Node"},
{id:5 , name:"Express"}
];


// app.get("/api/courses", (req,res) => {
//     res.send(courses)
// });

app.get("/api/courses/:id", (req,res) =>{
    let data = courses.find( item => item.id === parseInt(req.params.id))
    if(!data)
    {
        return res.status(404).send({message : "Invalid course id"})
    } 
   else
   {
       let {id,name} = data;
       return  res.send(name);
   }
})