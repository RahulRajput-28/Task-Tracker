const API = "http://localhost:5000/api/tasks";


/**
 * Creates a new task through the API.
 * @param {Object} task - Task details
 */
export const createTask=async(task)=>{
    const result=await fetch(API,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(task)
    })

    return result.json();
}


//fetch the task from backend according to user choice
export const getTask=async(value)=>{
    let url=API;

    if(value==="complete"){
        url=url+"?complete=true";
    }

    if(value==="pending"){
        url=url+"?complete=false";
    }

    const result=await fetch(url);

    return result.json();
}


//update the status of a task in database
export const updateTaskStatus=async(id,complete)=>{
    const result=await fetch(`${API}/${id}/status`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({complete})
    })

    return result.json();
}


//Update the task name and description
export const updateTask=async(id,task)=>{
    const result=await fetch(`${API}/${id}`,{
        method:"PUT",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify(task)
    })

    return result.json();
}


// Delete a task
export const deleteTask=async(id)=>{
    const result=await fetch(`${API}/${id}`,{
        method:"DELETE"
    })

    return result.json();
}