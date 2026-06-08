import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import geminiRoutes from './routes/gemini.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" })) // Fixed typo from 'limig' to 'limit'

app.use("/api/v1/gemini", geminiRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello from DALL.E" })
})

app.listen(8080, () => console.log('Server has started on port 8080'))