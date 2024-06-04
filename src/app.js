const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
    res.send("Hello World");
});

app.get('/jenkins', (req, res) => {
    res.send("Hello Jenkins")
});

app.get('/bye', (req, res) => {
    res.send("Bye World")
});

app.listen(port, () => {
    console.log(`SERVER RUNNING IN http://localhost:${port}.`);
});