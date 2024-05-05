import { AppBar, Box, Button, FormControl, InputBase, TextareaAutosize } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataProvider.js";
import { API } from "../service/API";

const intialPost={
    title:"",
    description:"",
    username:"",
    createDate:new Date()
}

const UpdateTask=()=>{

    const [task,setTask]=useState(intialPost);

    //const account=useContext(DataContext);

    const navigate=useNavigate();

    const {id}=useParams();
 
    useEffect(()=>{

        const fetchData = async()=>{
            let response=await API.getTaskById(id);
            if(response.isSuccess){
                setTask(response.data);
            }
        }
        fetchData();
      },[]) 

      const handleChange =(e)=>{
        setTask({...task,[e.target.name]:e.target.value})
        task.username=sessionStorage.getItem('username')

    } 

    const updatetask=async()=>{
        let response=await API.updatesTask(task);
        if(response.isSuccess){
            navigate('/home');
        }
    }
    
    return(

        <>
        <AppBar position="sticky" >
        <Box display="flex" marginLeft="auto">
    <Button LinkComponent={Link} to="/home"  variant="contained"
            sx={{margin:1,borderRadius:10}}
            color="warning"> BACK</Button>
    </Box>
        </AppBar>
        <div>
            <Box style={{margin:"50px 100px"}}>
                <FormControl style={{marginTop:"45px",display:"flex",flexDirection:"row"}}>
                    <InputBase style={{flex:"1",margin:"0px 30px",fontSize:"18px"}}
                    onChange={(e) => handleChange(e)}  name="title" value={task.title} placeholder="Title"/>
                    <Button variant="contained" onClick={()=>updatetask()}>Update Task</Button>
                </FormControl>
                <TextareaAutosize  minRows={5} onChange={(e) => handleChange(e)}  name="description" value={task.description} placeholder="Tell your Task..." 
                   style={{width:"100%",marginTop:"50px",fontSize:"18px",border:"none",outline:"none"}} />
            </Box>
        </div>
        <footer className="footer">

        </footer>
        </>
    )
};
export default UpdateTask;
