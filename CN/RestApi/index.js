import express from "express"
import bodyParser from "body-parser";
const app = express();
const PORT = 5111;

const DATA = [
    {
        titile: "Work One",
        id: 0,
        isCompleted: false,

    }, {
        titile: "Work 2",
        id: 1,
        isCompleted: false,

    },
    {
        titile: "Work 3",
        id: 2,
        isCompleted: false,

    },
    {
        titile: "Work 4",
        id: 3,
        isCompleted: false,

    }
]


// MIDDLEWARE
app.use(bodyParser.json());


// create 
app.post('/todos', (req, res) => {
    console.log('/todos with post has been called');
    const todo = req.body;
    console.log(todo);
    DATA.push(todo);
    res.status(201).send("Data added sucessfully with title");
})


// Read
app.get('/todos', (req, res) => {
    console.log('/todos with get as method called');
    res.status(200).send(DATA);
})


// Update



// Delete
app.delete('/todos', (req, res) => {

    const _id = req.body.id;

    const itemIndex = DATA.findIndex((item) => item.id == _id)

    if (itemIndex != -1) {
        DATA.splice(itemIndex, 1);
        res.status(200).send("Item Deleted Sucessfully");
    }
    else {
        res.status(500).send("Item Not Found");
    }


})








app.all('/*', (req, res) => {
    console.log(req.url)
    // console.log(res)
    res.send("Namaste User !");
})

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT);
})