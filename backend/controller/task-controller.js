import Task from '../model/Task.js';

export const createTask=async(request,response)=>{
    try{
        const task=await new Task(request.body);
        task.save();
        return response.status(200).json({msg:"Task saved successfully"});
    }catch(error){
        return response.status(500).json(error);
    }
}

export const getTasks=async(request,respone)=>{
    try{
        const tasks=await Task.find({});
        return respone.status(200).json(tasks);
    }
    catch(error){
        return respone.status(500).json({msg:error.message});
    }
}

export const getTask=async(request,response)=>{
    try{
        const task=await Task.findById(request.params.id);
        return response.status(200).json(task);
     }catch(error){
         return response.status(500).json({msg:error.message});
     }
}


export const show=async(request,response)=>{
    try{
        const task=await Task.find({});
        return response.status(200).json(task);
    }
    catch(error){
        return response.status(500).json({msg:error.message}); 
    }
}

export const deletesTask=async(request,response)=>{
    try{
        const task=await Task.findById(request.params.id);
        if(!task)
        {
            return response.status(400).json({msg:"post not found"});
        }
        await task.deleteOne();
        return response.status(200).json({msg:"post deleted successfully"});
    
    }catch(error){
        return response.status(500).json({msg:error.message});

    }

}

export const updatesTask=async(request,response)=>{
    try{
        const task=await Task.findById(request.params.id);
        if(!task){
            return response.status(400).json({msg:"post not found"});
        }
        await Task.findByIdAndUpdate(request.params.id,{ $set :request.body});
        return response.status(200).json({msg:"post updated successfully"});
    }
    catch(error){
        return response.status(500).json({msg:error.message});
    }
}