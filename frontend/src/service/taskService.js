const API = "http://localhost:5000/api/tasks";


/**
 * Creates a new task through the API.
 * @param {Object} task - Task details
 */
export const createTask=async(task)=>{
    try{
        const result=await fetch(API,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(task)
        })

        if (!result.ok) {
            throw new Error("Failed to create task");
        }

        return result.json();
    }catch(error){
        console.log(error);
        throw error;
    }
    
}


//fetch the task from backend according to user choice
export const getTask=async(value)=>{
    try{
        let url=API;

        if(value==="complete"){
            url=url+"?complete=true";
        }

        if(value==="pending"){
            url=url+"?complete=false";
        }

        const result=await fetch(url);

        if (!result.ok) {
            throw new Error("Failed to get a task");
        }

        return result.json();
    }catch(error){
        console.log(error);
        throw error;
    }
    
}


//update the status of a task in database
export const updateTaskStatus=async(id,complete)=>{
    try{
        const result=await fetch(`${API}/${id}/status`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({complete})
        })

        if (!result.ok) {
            throw new Error("Failed to update a task status");
        }

        return result.json();
    }catch(error){
        console.log(error);
        throw error;
    }
    
}


//Update the task name and description
export const updateTask=async(id,task)=>{
    try{
        const result=await fetch(`${API}/${id}`,{
            method:"PUT",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify(task)
        })

        if (!result.ok) {
            throw new Error("Failed to update a task");
        }

        return result.json();
    }catch(error){
        console.log(error);
        throw error;
    }
    
}


// Delete a task
export const deleteTask=async(id)=>{
    try{
        const result=await fetch(`${API}/${id}`,{
            method:"DELETE"
        })

        if (!result.ok) {
            throw new Error("Failed to delete a task");
        }

        return result.json();
    }catch(error){
        console.log(error);
        throw error;
    }
}
