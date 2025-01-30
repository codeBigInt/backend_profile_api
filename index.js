import express from 'express';
import { PORT } from './utils/config.js';
import { data } from './utils/data.js';
import cors from "cors"
const app = express();

// Middleware to enable cross origin resource sharing
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send(`Welcome to Elliot's Personal information API`);
});

app.get("/fetch-data", (_, res) => {
  res.status(200).send(data)
})

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
})