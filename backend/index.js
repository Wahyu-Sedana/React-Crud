import express from "express";
import db from "./utils/database.js";
import mahasiswaRoute from "./routes/index.js";
import cors from "cors";

import 'dotenv/config'

const app = express();

const PORT = process.env.PORT || 5000

try{
    await db.authenticate();
    console.log('Database connected...');
}catch (error){
    console.error('Connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.use('/data', mahasiswaRoute);


app.listen(PORT, () => console.log("server running at port 5000"));