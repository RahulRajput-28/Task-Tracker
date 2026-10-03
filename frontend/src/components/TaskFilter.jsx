function TaskFilter({filterTask}){
    return(
        <div className="task-filter">

            {/* It will take the user choice*/}
            <button onClick={()=>filterTask("all")}>All</button>
            <button onClick={()=>filterTask("complete")}>Completed</button>
            <button onClick={()=>filterTask("pending")}>Pending</button>
        </div>
    )
}

export default TaskFilter;