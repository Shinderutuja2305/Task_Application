import { useEffect, useState } from "react";
import { API } from "../service/API";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Tasks from "./Tasks";




const AllTasks=()=>{

    const [tasks,setTask]=useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            let response=await API.getTasks();
           if(response.isSuccess){
            setTask(response.data);
           }
        }
        fetchData();
    },[])


    return(
        <>
        {
            
            tasks && tasks.length>0 ? tasks.map(task=>(
                <Grid item lg={3} sm={4} xs={12} >
                    <Link to={`/views/${task._id}`}  style={{textDecoration:'none',color:'inherit'}}>
                    <Tasks task={task}/>
                  </Link>
                </Grid>
            )): <Box style={{color:'#878787', margin:'30px 80px',fontSize:18}} >
                No data available...</Box>
        }
        </>
    )
};

export default AllTasks;