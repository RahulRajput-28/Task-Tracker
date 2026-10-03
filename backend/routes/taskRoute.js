const express=require('express');
const {addTask,getTask,updateTaskStatus,deleteTask,updateTask}=require('../controllers/taskController');

const router=express.Router();

//used to get tasks
router.get("/",getTask);

//used to add a new task
router.post("/",addTask);

//use to change the status for a particular task
router.patch("/:id/status",updateTaskStatus);

// Delete a task
router.delete("/:id",deleteTask);

// Edit task details
router.put("/:id",updateTask);

module.exports=router;