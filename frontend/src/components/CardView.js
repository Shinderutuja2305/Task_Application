import {Card,CardHeader,CardMedia,Typography,CardContent,Avatar, Box} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { API } from "../service/API";
import { Link, useNavigate } from "react-router-dom";


  const CardView =({task})=>{
  const account=sessionStorage.getItem('username');
  const navigate=useNavigate();

  const deleteTask=async()=>{
    let respone=await API.deletesTask(task._id);
    if(respone.isSuccess){
        navigate('/home');
    }
}
    return(
<>

     {
        account === task.username &&
      <>
   <Card sx={{ width:'40%',margin:'auto',mt:2,padding:2,boxShadow:"5px 5px 10px #ccc"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red"}} aria-label="blogs">
          </Avatar>
        }
        title= {task.title}
        subheader={new Date(task.createDate).toDateString()}
        />
      <CardContent>
        <Box style={{float:'right'}}>
          <Link to={`/update/${task._id}`}>
          <EditIcon color='primary' style={{margin:'5px',padding:'5px',border:'1px solid #878787',borderRadius:'10px'}}/>
          </Link>
          <DeleteIcon color='error' style={{margin:'5px',padding:'5px',border:'1px solid #878787',borderRadius:'10px'}} 
          onClick={()=>deleteTask()}/>
        </Box>
      </CardContent>
     <CardContent>
        <Typography variant="body2" color="text.secondary">
         Task:{task.description}
        </Typography>
      </CardContent>
    </Card>
    </>
      }
</>
);
}

export default CardView;