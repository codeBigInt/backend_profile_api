import express from 'express';
import { PORT } from './utils/config.js';
import router from "./routes/route.js"

import cors from "cors"
const app = express();

// Middleware to enable cross origin resource sharing
app.use(cors())
app.use(express.json())
// Router middleware
app.use("/", router)


app.listen(PORT, () => {
    console.log('Server is running on port 3000');
})


export default app;