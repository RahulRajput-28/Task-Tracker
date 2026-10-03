import TaskItem from './TaskItem';

function TaskList({task,statusChange,editHandel,deleteHandel}){
    return(
        <div>

            {/* Create one TaskItem for each task */}
            {task.map((item)=>{
                return <TaskItem key={item.id} task={item} statusChange={statusChange} editHandel={editHandel} deleteHandel={deleteHandel}/>
            })}
        </div>
    )
}

export default TaskList;