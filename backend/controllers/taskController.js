const pool=require("../config/db");

// Add a new task
const addTask= async(req,res)=>{
    try{
        const{title,description}=req.body;

        if(!title){
            return res.send("Please enter a new task !!")
        }

        const query="INSERT INTO tasks (task_name,about) VALUES ($1,$2)RETURNING *";

        const result=await pool.query(query,[title,description]);

        res.status(201).json(result.rows[0]);

    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"something went wrong"
        })
    }
    
}

//used to get the task according to used need from database
const getTask=async(req,res)=>{
    try{
        const {complete}=req.query;

        let result;

        if(complete==="true"){

            result=await pool.query("SELECT * FROM tasks WHERE complete=true");

        }else if(complete==="false"){

            result=await pool.query("SELECT * FROM tasks WHERE complete=false");
            
        }else{
            //if complete value is not given then i will fetch all tasks
            result=await pool.query("SELECT * FROM tasks")
        }

        res.status(200).json(result.rows);

    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"server issue..."
        })
    }
}


// Update the complete/pending status
const updateTaskStatus=async(req,res)=>{
    try{
        const {id}=req.params;
        const {complete}=req.body;

        const query="UPDATE tasks SET complete=$1 WHERE id=$2 RETURNING *";

        const result=await pool.query(query,[complete,id]);

        if(result.rows.length===0){
            return res.send("task not found ");
        }

        res.json(result.rows[0]);
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"internal isuue.."
        })
    }   
}

// Update task name and description
const updateTask=async(req,res)=>{
    try{
        const{id}=req.params;
        const{title,description}=req.body;

        const query="UPDATE tasks SET task_name=$1,about=$2 WHERE id=$3 RETURNING *";

        const result=await pool.query(query,[title,description,id]);

        if(result.rows.length===0){
            return res.send("task not found !")
        }

        res.json(result.rows[0]);

    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"internal server issue..."
        })
    }
    
}

// Delete a task
const deleteTask=async(req,res)=>{
    try{
        const {id}=req.params;

        const query="DELETE FROM tasks WHERE id=$1 RETURNING *";

        const result=await pool.query(query,[id]);

        if(result.rows.length===0){
            return res.send("task not found !")
        }

        res.json(result.rows[0]);

    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"some internal issue..."
        })
    } 
}

module.exports={addTask,getTask,updateTaskStatus,updateTask,deleteTask}