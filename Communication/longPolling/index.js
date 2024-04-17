import express from "express"
import bodyParser from "body-parser";
import path from "path"
import { fileURLToPath } from "url";
const app = express();
const PORT = 5111;


app.get('/', (req, res) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    res.status(200).sendFile(__dirname + '/index.html');
})




let data = 'initial Data';
const clientWaitingList = [];

app.get('/getData', (req, res) => {

    // if the data doesnot match then send new data 
    if (data !== req.query.data)
        res.json({ data });
    else {
        // else store the res object somewhere
        // by default the request is in hold
        clientWaitingList.push(res); 

    }
});

app.get('/updateData', (req, res) => {
    data = req.query.data;
    // whenever we get data update we send the response using that res obj.
    
    while(clientWaitingList.length>0)
    {
        const client = clientWaitingList.pop();
        client.json({data});
    }
    res.status(200).send({ data })
})




app.all('/*', (req, res) => {
    console.log(req.url)
    // console.log(res)
    res.send("Let's Explore short Polling !");
})


app.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT);
})