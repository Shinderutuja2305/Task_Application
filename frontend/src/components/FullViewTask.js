import { AppBar, Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import { API } from "../service/API";

const FullViewTask=()=>{

    const {id}=useParams(); 
    const [task,setTask]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
         const response= await API.getTaskById(id);
            if(response.isSuccess){
                setTask(response.data);
            }
        }
        fetchData();
    },[] )
    return (
            <>
            <div>
            <AppBar position="sticky" sx={{background:"linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
           }}>
    <Box display="flex" marginLeft="auto">
    <Button LinkComponent={Link} to="/dashboard"
    variant="contained"
    sx={{margin:1,borderRadius:10}}
    color="warning">
        Back
    </Button>
    </Box>
    </AppBar>
            </div>
            {
            <Box style={{margin:'50px 100px'}}>
            <Typography style={{fontSize:'38px',fontFamily:"Times New Roman",fontWeight:600,textAlign:'center',margin:'50px 0 10px 0',wordBreak:'break-word'}}>
            Title of Task:{task.title}</Typography>   
            <Box style={{color:'#878787',margin:'20px 0',display:'flex'}}>
            <Typography style={{fontWeight:600,fontFamily:"Times New Roman",color:'blueviolet',fontSize:'20px'}}>User: 
            <Box component="span" style={{fontWeight:600,fontFamily:"Times New Roman",color:'blueviolet',fontSize:'20px'}}>
                {task.username}</Box></Typography>
            <Typography style={{marginLeft:'auto',fontSize:'20px',fontFamily:"Times New Roman",color:'brown',fontWeight:600}}>
                    CreateDate:{new Date(task.createDate).toDateString()}</Typography>
            </Box>
            <Typography style={{wordBreak:'break-word',fontFamily:"Times New Roman",fontSize:'24px'}}>
                Task:{task.description}</Typography>
            </Box>
        }
           <footer className="footer">
           </footer>
            </>
    );
}

export default FullViewTask;