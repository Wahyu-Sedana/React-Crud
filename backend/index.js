import express, { urlencoded } from "express";
import db from "./utils/database.js";
import mahasiswaRoute from "./routes/index.js";
import cors from "cors";

const app = express();

try{
    await db.authenticate();
    console.log('Database connected...');
}catch (error){
    console.error('Connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/data', mahasiswaRoute);


app.listen(5000, () => console.log("server running at port 5000"));