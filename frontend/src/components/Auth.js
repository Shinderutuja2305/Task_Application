import { Box, Button, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ManIcon from '@mui/icons-material/Man';
import VpnKey from "@mui/icons-material/VpnKey";
import { useState,useContext } from "react";
import {Link} from 'react-router-dom';
import user from '../user.png';
import {API} from '../service/API.js';
import { DataContext } from "../context/DataProvider";
import { useNavigate } from "react-router-dom";

const loginIntialValues={
    username:"",
    password:""
}

const signupIntialValues={
    username:"",
    name:"",
    email:"",
    password:""
}
const Auth=() =>{

    const [values,setValues]=useState({
        username:"",
        name:"",
        email:"",
        pass:"",
        showPass:false
    });
    const handlePassVisibility=() =>{
        setValues({
            ...values,
            showPass:!values.showPass,
        });
    };

    const [account,toggleAccount]=useState('login');
    const [signup,setSignup]=useState(signupIntialValues);
    const [login,setLogin]=useState(loginIntialValues);
    const [error,setError]=useState('');

    const {setAccount}=useContext(DataContext);
    const navigate=useNavigate();

    const userRegister = async() =>{
        let response= await API.userSignup(signup);
        console.log(response);
        if(response.isSuccess){
            setError("");
            setSignup(signupIntialValues);
            toggleAccount('login');
        }
        else if(response.isError){
            setError("Something went wrong! Please try again later...");
        }
        }
    const loginUser = async() =>{
       let response= await API.userLogin(login);
       console.log(response);
       if(response.isSuccess){
        setError("");
        setAccount({username:response.data.username,name:response.data.name});
        sessionStorage.setItem('accessToken',`Bearer ${response.data.accessToken}`);
        sessionStorage.setItem('refreshToken',`Bearer ${response.data.refereshToken}`); 
        sessionStorage.setItem('username',response.data.username);  
        navigate('/home');
       }
       else{
        setError("Something went wrong! Please try again later...");
       }
    }
    const toggleSignup=() =>{
        account ==='signup' ? toggleAccount('login') :toggleAccount('signup');
    }

    const onInputChange=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value});
    }

    const onvalueChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value});
    }


    return (
        <>
        <div>
            <form>
                {
                    account==='login' ?
            <Box
                maxWidth={400}
                display="flex"
                flexDirection={"column"}
                alignItems="center"
                justifyContent={"center"}
                borderColor="darkblue"
                boxShadow="10px 10px 20px #ccc"
                padding={3}
                margin="auto"
                marginTop={5}
                borderRadius="5"
                >
                <img src={user} height="100" width={100} />
                <Typography  padding={3} textAlign="center" variant="h5">Login</Typography>
                <TextField margin="normal" value={login.username} onChange={(e)=>onvalueChange(e)} name="username" variant="outlined" fullWidth label="Username"  
                placeholder="Enter username" required
                InputProps={{
                    startAdornment:(
                   <>
                   <InputAdornment>
                   <IconButton>
                    <ManIcon/>
                   </IconButton>
                   </InputAdornment>
                   </>
                    )
                 }}/>
                <TextField type={values.showPass ? "text" : "password"} value={login.password} onChange={(e)=>onvalueChange(e)} name="password" margin="normal" variant="outlined" fullWidth 
                label="Password" placeholder="Enter password" required

                InputProps={{
                        startAdornment:(
                            <InputAdornment>
                            <IconButton>
                                <VpnKey/>
                            </IconButton>
                            </InputAdornment>
                        ),
                    endAdornment:(
                        <InputAdornment position="end">
                            <IconButton onClick={handlePassVisibility} aria-label="toggle password" edge="end">
                                {
                                    values.showPass ? (
                                        <VisibilityOffIcon/>
                                    ) : (
                                        <VisibilityIcon/>
                                    )
                                }
                            </IconButton>
                        </InputAdornment>
                       )
                }} />
                {error && <Typography>{error}</Typography>}
                <Button variant="contained" onClick={()=>loginUser()} sx={{borderRadius:3,marginTop:3}} color="warning">Login</Button>
                <Button onClick={()=>toggleSignup()} sx={{borderRadius:3,marginTop:3}}>CHANGE TO SIGNUP</Button>
                </Box>
                :
                <Box
                maxWidth={400}
                display="flex"
                flexDirection={"column"}
                alignItems="center"
                justifyContent={"center"}
                borderColor="darkblue"
                boxShadow="10px 10px 20px #ccc"
                padding={3}
                margin="auto"
                marginTop={5}
                borderRadius="5"
                >
                <img src={user} height="100" width={100} />
                <Typography  padding={3} textAlign="center" variant="h5">Register</Typography>
                <TextField  type="text" margin="normal" onChange={(e) =>onInputChange(e)} name="username" variant="outlined" fullWidth   
                placeholder="Enter Username" required/>
                <TextField margin="normal" onChange={(e) =>onInputChange(e)} name="name" variant="outlined" fullWidth  
                placeholder="Enter Full name" required/>
                <TextField type="Email" margin="normal" onChange={(e) =>onInputChange(e)} name="email" variant="outlined" fullWidth label="Email"
                placeholder="Enter email" required/>
                <TextField type={values.showPass ? "text" : "password"} margin="normal"  name="password"  onChange={(e) =>onInputChange(e)} variant="outlined" fullWidth 
                label="Password" placeholder="Enter password" required
                InputProps={{
                    endAdornment:(
                        <InputAdornment position="end">
                            <IconButton onClick={handlePassVisibility} aria-label="toggle password" edge="end">
                                {
                                    values.showPass ? (
                                        <VisibilityOffIcon/>
                                    ) : (
                                        <VisibilityIcon/>
                                    )
                                }
                            </IconButton>
                        </InputAdornment>
                       )
                }} />
                
                {error && <Typography variant="h6">{error}</Typography>}
                
                <Button onClick={()=>userRegister()} variant="contained"  sx={{borderRadius:3,marginTop:3}} color="warning">Register</Button>
                <Button onClick={()=>toggleSignup()} sx={{borderRadius:3,marginTop:3}}>CHANGE TO LOGIN</Button>
            </Box>
                }
            </form>
            </div>
            <div>
            <Button variant="contained"  LinkComponent={Link} to="/" sx={{borderRadius:3,marginLeft:2,marginBottom:2}}>BACK</Button>
        </div>
        </>

    );
 };
export default Auth;