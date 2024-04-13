import express from "express"

const app = express();
const PORT = 5111;


app.all('/*', (req, res) => {
    console.log(req.url)
    // console.log(res)
    res.send("Namaste User !");
})

app.listen(PORT, () => {
    console.log("Server is running at https://localhost:" + PORT);
})