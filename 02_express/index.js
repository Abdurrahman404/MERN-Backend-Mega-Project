import express from 'express';

const app = express();
const port = 3000;

app.use(express.json())

let teaData = []
let nextID =[]

//  add  a new tea 
app.post('/teas',(req,res) => {
   const {name , price } = req.body 
   const newTea = {id: nextID++ , name , price}
   teaData.push(newTea)
   res.status(201).send(newTea)
})

// get all teas
app.get('/teas' , (req,res) => {
    res.send(teaData)
    
})

//get single tea 
app.get('/teas/:id', (req,res) => {
   const tea =  teaData.find(t => t.id == parseInt(req.params.id))  // params use to get the id from the url
    if (!tea) {
        res.status(404).send("Tea not found")
    } else {
        res.send(tea)
        
    }
})

//update tea
app.put('/teas/:id' , (req,res) => {
  const tea =  teaData.find(t => t.id == parseInt(req.params.id))  // params use to get the id from the url
  if (!tea) {
      res.status(404).send("Tea not found")}
      
      const {name , price } = req.body //deconstract if didnt do this we should code like ex : req.body.name
      tea.name  = name 
      tea.price = price 
      res.send(200).send(tea)
}
)

//delete  tea 
app.delete('/teas/:id', (req, res) => {
    // Find the index of the tea with the matching ID
    const index = teaData.findIndex(t => t.id === parseInt(req.params.id, 10));

    // If no tea is found, send a 404 response
    if (index === -1) {
        return res.status(404).send("Tea not found");
    }

    // Remove the tea from the array using its index
    teaData.splice(index, 1);

    // Send a 200 response to confirm successful deletion
    res.status(200).send('Deleted');
});


app.listen(port , () => {
    console.log(`Server is running at port ${port}....`)
    console.log("http://localhost:3000/teas")
})