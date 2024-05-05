//import Admin from "../model/Admin";
import dotenv from 'dotenv';

dotenv.config();

const uname=process.env.admin_username;
const pass=process.env.admin_password;


export const loginAdmin=(request,response)=>{
   if(uname===request.body.username){
    let users=request.body;
    if(pass===request.body.password)
    {
        return response.status(200).json({ username:users.username});   
    }
    else{
        return response.status(400).json({msg:"Password does not mattch"});

    }
   }
   else{
    return response.status(500).json({msg:"Username does not match"});
   }
}


