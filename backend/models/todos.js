import mongoose from "mongoose";

const Todo = new mongoose.Schema({
    description: {
        type: String
    },
    responsible: {
        type: String
    },
    priority: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

export default mongoose.model("Todo", Todo);