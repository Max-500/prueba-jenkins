const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
    res.send("Hello World");
});

app.get('/api/v1/welcome', (req, res) => {
    res.send("Welcome to the updated Node.js application!");
});

app.get('/bye', (req, res) => {
    res.send("Bye World");
});

app.listen(port, () => {
    console.log(`SERVER RUNNING IN http://localhost:${port}.`);
});


