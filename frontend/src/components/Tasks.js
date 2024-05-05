import { Box, Typography } from "@mui/material";
import { addElipsis } from "../utils/common-utils";



const Tasks=({task})=>{
    return (
        <Box style={{border:'1px solid #d3cede',borderRadius:'10px',margin:'10px',height:'150px',display:'flex',alignItems:"center",flexDirection:'column'}}>
            <Typography style={{padding:'5px 5px 5px 5px',fontSize:'20px',fontFamily:"Times New Roman",fontWeight:600}}>
                Title of Task:{addElipsis(task.title,20)}</Typography>
            <Typography style={{padding:'0 5px 5px 5px',fontSize:'14px',fontFamily:"Times New Roman",color:"red",fontWeight:600}}>
                User:{task.username}</Typography>
            <Typography style={{padding:'0 5px 5px 5px',fontFamily:"Times New Roman",fontSize:'16px',color:"green"}}>
                Task:{addElipsis(task.description,100)}</Typography>
        </Box>
    );
}


export default Tasks;