function TaskItem({task,statusChange,editHandel,deleteHandel}){
    return(
        <div className="task-item">
            <h3 className={task.complete ? "task-completed" :""}>{task.task_name}</h3>
            <p>{task.about}</p>

            {/* show the current status*/}
            <p className={task.complete ? "completed" : "pending"}>
                {task.complete? "Complete" : "Pending"}
            </p>

            <div className="task-actions">

                {/*it will toggel my status value*/}
                <button onClick={() => statusChange(task.id, !task.complete)}>
                    Change Status
                </button>

                <button onClick={()=>editHandel(task)}>
                    Edit
                </button>

                <button onClick={()=>deleteHandel(task.id)} className="delete-button">
                    Delete
                </button>
            </div>
            
        </div>
    )
}

export default TaskItem;
