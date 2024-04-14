import express from "express"

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

// create 


// Read
app.get('/todos',(req,res)=>{
    res.status(200).send(DATA);
})


// Update



// Delete








app.all('/*', (req, res) => {
    console.log(req.url)
    // console.log(res)
    res.send("Namaste User !");
})

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT);
})