const express = require("express");
const Todo = require("../models/todoSchema");

const router = express.Router();
//* GET - get all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find(); // get all todos
    res.status(200).json(todos); // send back all todos
  } catch (err) {
    // if there is an error:
    console.error(err.message);
    res.status(400).json({ msg: "Server Error" });
  }
});

//* POST - Create a new todo
router.post("/", async (req, res) => {
  const todoData = req.body; // get the body of the todo
  try {
    const todo = await Todo.create(todoData); // create the todo
    res.status(200).json({ todo_item: todo }); // send back the todo
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ msg: "Server Error" });
  }
});

//* GET - get a single todo by id
router.get("/:id", async (req, res) => {
  const id = req.params.id; // get the todo id
  // find the todo using th id
  try {
      const todo = await Todo.findById(id);
    // if the todo is NOT found
    if (!todo) {
      return res.status(404).json({ msg: "Todo not found" });
    }
    // if todo is found send back the todo
    res.status(200).json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ msg: "Server Error" });
  }
});

//* PUT - update a todo by its id
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id; // get the todo id
    const newTodoData = req.body; // get the new data

    // find the todo to update and pass the new data
    const todo = await Todo.findByIdAndUpdate(id, newTodoData, {new: true});
    // send back the updated todo
    res.status(202).json({ todo_item: todo });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ msg: "Server Error" });
  }
});

//* DELETE - delete a todo by its id
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findOneAndDelete(id);
    res.status(204).json({ msg: "Todo deleted" });
  } catch (err) {}
});

module.exports = router;
