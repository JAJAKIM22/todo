import express from "express";
import {
    createTodo, 
    getAllTodos,
    getTodoById,
    updateTodo, 
    deleteTodo,
} from "../controllers/todoController.js";



const router = express.Router();

router.post("/posttodo", createTodo);

router.get("/todos", getAllTodos);

router.get("/todo/:todoId", getTodoById);

router.put("/todo/:todoId", updateTodo);

router.delete("/todo/:todoId", deleteTodo);


export default router;