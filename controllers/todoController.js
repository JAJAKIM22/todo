
import Todos from "../models/todoModel.js";

const createTodo = async (req, res) => {
  try {
   
    const { title, description} = req.body;

    const newTodo = await Todos.create({
        title,
        description,
    });

    res.status(201).send({
      message: "Todo Created Successfully!",
      data: newTodo,
    });
  } catch (error) {
    console.error("Error posting todo:", error);
    res.status(500).send({
      error: "Internal Server Error",
    });
  }
};

const getTodoById = async (req, res) => {
    try {
      const todoId = req.params.userId; 
      
      const todo = await Todos.findOne({ todoId });
  
      if (!todo) {
        return res.status(404).send({ message: 'Todo not found' });
      }
  
      res.status(200).send({
        message: 'Todo retrieved successfully',
        todo,
      });
    } catch (error) {
      console.error('Error fetching todo:', error.message);
      return res.status(500).json({
        error: 'Internal Server Error',
        message: error.message,
      });
    }
  };

const getAllTodos = async (req, res) => {
    try {
      const todos = await Todos.find();
        res.status(200).send({
        message: 'Todos retrieved successfully',
        todos,
      });
    } catch (error) {
      console.error('Error fetching todos:', error.message);
      res.status(500).json({
        error: 'Internal Server Error',
        message: error.message,
      });
    }
  };


  const updateTodo = async (req, res) => {
    try {
      const todoId = req.params.jobId;
      const todo = await Todos.findOneAndUpdate({ todoId}, req.body, {
        new: true,
      });
      if (!todo) {
        return res.status(404).send({ message: "Todo not found" });
      }
      res.status(200).send({
        message: "Todo Updated Successfully!",
        data: todo,
      });
    } catch (error) {
      console.error("Error updating todo:", error.message);
      res.status(500).send({
        error: "Internal Server Error",
      });
    }
  };
  
  const deleteTodo = async (req, res) => {
    try {
      const todoId = req.params.jobId;
     
      const todo = await Todos.findOneAndDelete({ todoId });
  
      if (!todo) {
        return res.status(404).send({ message: "Todo not found" });
      }
  
      res.status(200).send({
        message: "Todo Deleted Successfully!",
      });
    } catch (error) {
      console.error("Error deleting todo:", error.message);
      res.status(500).send({
        error: "Internal Server Error",
      });
    }
  };
  

export { createTodo, getAllTodos, getTodoById, updateTodo, deleteTodo  };
