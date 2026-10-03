import TaskForm from '../components/TaskForm';
import {getTask,updateTaskStatus,deleteTask} from '../service/taskService';
import {useState,useEffect} from 'react';
import TaskList from "../components/TaskList";
import TaskFilter from "../components/TaskFilter";

function TaskPage(){
    //it store all task 
    const[task,setTask]=useState([]);

    //it store the user filter choice
    const[filter,setFilter]=useState("all");

    //store the task currently being edited
    const[edit,setEdit]=useState(null);


    //load the task when my filter change
    useEffect(() => {
        loadTasks();
    }, [filter]);

    //Used to fetch the task from backend
    const loadTasks = async () => {
        const data = await getTask(filter);
        setTask(data);
    };


    // Change the status of the task
    const handleChange=async(id,complete)=>{
        await updateTaskStatus(id, complete);
        await loadTasks();
    }


    //it is used to delete the task
    const taskDelete=async(id)=>{
        await deleteTask(id);

        setTask(task.filter((item)=>item.id!==id));
    }

    return(
        <div className="task-container">
            <div className="task-header">
                <div>
                    <h1>Task Tracker</h1>
                    <p>Keep track of your daily tasks</p>
                </div>
            </div>

           <TaskForm edit={edit} loadTasks={loadTasks} setEdit={setEdit}/>

           <TaskFilter filterTask={setFilter}/>

           <h2>Tasks -</h2>

           <TaskList task={task} statusChange={handleChange} editHandel={setEdit} deleteHandel={taskDelete}/>

        </div>
    )
}

export default TaskPage;
