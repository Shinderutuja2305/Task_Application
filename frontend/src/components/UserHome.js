import { AppBar, Button, Toolbar,Box } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CardView from "./CardView";
import { API } from "../service/API";

const UserHome=() =>{

const [tasks,setTasks] = useState([]);

useEffect(()=>{
    const fetchData = async ()=>{
        let response=await API.getMyTask();
       if(response.isSuccess){
        setTasks(response.data);
       }
    }
    fetchData();
},[]) 
    return(
    <><div>
        <AppBar position="sticky" 
    sx={{
			background:"linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
        }}>
            <Toolbar>
            <Box display="flex" marginRight="auto">
            <Button LinkComponent={Link} to="/create"
            variant="contained"
            sx={{margin:1,borderRadius:10}}
            color="warning">
                Create Task
            </Button>
            </Box>
            <Box display="flex" marginLeft="auto">
            <Button LinkComponent={Link} to="/"
            variant="contained"
            sx={{margin:1,borderRadius:10}}
            color="warning">
                LOGOUT
            </Button>
            </Box>
            </Toolbar>
        </AppBar>
    </div>
    {           
            tasks && tasks.length>0 ? tasks.map(task=>(
               <CardView task={task}/>
            )): <Box style={{color:'#878787', margin:'30px 80px',fontSize:18}} >
                No data available...</Box>
    }
    <footer className="footer" position="sticky">
    </footer>
    </>)
};
export default UserHome;
