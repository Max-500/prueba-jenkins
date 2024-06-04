import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.get('/hello', (req:Request, res:Response) => {
    res.send("Hello World");
});

app.get('/api/v1/welcome', (req: Request, res: Response) => {
    res.send("Welcome to the updated Node.js application!");
});

app.get('/bye', (req:Request, res:Response) => {
    res.send("Bye World");
});

app.listen(port, () => {
    console.log(`SERVER RUNNING IN http://localhost:${port}.`);
});