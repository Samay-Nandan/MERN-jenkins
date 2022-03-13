import Todo from "../models/todos.js";

export const getAll = async (req, res) => res.json(await Todo.find())

export const getById = async (req, res) => {
    const { id } = req.params;
    res.json(await Todo.findById(id))
}

export const add = async (req, res) => {
    const todo = new Todo(req.body);
    try {
        await todo.save()
        res.status(200).json({todo: 'todo added successfully'});
    } catch (error) {
        res.status(400).send('adding new todo failed');
    }
}

export const update = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findById(id);
        if(!todo) return res.status(404).send('Data is not found');
        await Todo.findByIdAndUpdate(id, req.body);
        res.json('Todo updated');
    } catch (error) {
        res.status(400).send("Update not possible");
    }
}