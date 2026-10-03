import {useState,useEffect} from 'react';
import {createTask,updateTask} from '../service/taskService';

function TaskForm({edit, loadTasks,setEdit}){
    const[taskname,setTaskname]=useState("");
    const[about,setAbout]=useState("");

    //this will fill the form with the task detail which we want to edit
    useEffect(()=>{
        if(edit){
            setTaskname(edit.task_name);
            setAbout(edit.about);
        }
    },[edit]);


    // decide whether to add a new task or update an existing one
    function handelSubmit(event){
        event.preventDefault();

        if(!taskname || !about){
            console.log("Please enter a new task or description");
            return;
        }

        if(edit){
            update(edit);
        }else{
            add();
        }

    }


    //add a task
    async function add(){
        if(!taskname || !about){
            console.log("Please enter a new task or description ")
            return ;
        }

        await createTask({
            title:taskname,
            description:about
        })

        await loadTasks();

        setTaskname("");
        setAbout("");
        
    }

    //update a task
    async function update(edit){
        await updateTask(edit.id,{
            title:taskname,
            description:about
        })

        await loadTasks();

        setTaskname("");
        setAbout("");
        setEdit(null);
    }

    return(
        <div>
            <form onSubmit={handelSubmit} className="task-form">
                <input value={taskname} type="text" onChange={(e)=>setTaskname(e.target.value)} placeholder="enter new task"></input>

                <input value={about} type="text" onChange={(e)=>setAbout(e.target.value)} placeholder="enter detail of task"></input>

                <button type="submit">{edit ? "Update Task" : "Add Task"}</button>
            </form>
        </div>
    )
}

export default TaskForm;