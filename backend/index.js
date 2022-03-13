import express from "express";  
import cors from "cors";
import mongoose from "mongoose";
import { MONGO_URI, PORT } from "./constants/environment.js";
import Todo from "./routes/todos.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log("MongoDB database connection established successfully"));

app.use(Todo);

app.listen( PORT, () => console.log(`Server is running on port ${PORT}`));
