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




let data = 'initial Data'

app.get('/getData', (req, res) => {

    res.status(200).send({
        data,

    });
});

app.get('/updateData', (req, res) => {
    data = "updated Data"
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