import React from "react";
import { Container, Button, Grid, TextField, Paper, Typography, InputAdornment, IconButton } from '@mui/material'
import {Link, useNavigate} from 'react-router-dom';
import user from '../user.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ManIcon from '@mui/icons-material/Man';
import VpnKey from "@mui/icons-material/VpnKey";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { useState } from "react";
import { API } from "../service/API";

const loginIntialValues={
    username:"",
    password:""
}

const Loginadmin =() =>{
    const [values,setValues]=useState({
        username:" ",
        pass:" ",
        showPass:false
    });
    const handlePassVisibilty =() =>{
        setValues({
            ...values,
            showPass:!values.showPass,
        });
    };
    
    const [login,setLogin]=useState(loginIntialValues);
    const [error,setError]=useState('');

    const navigate=useNavigate();


    const loginUser = async() =>{
        let response= await API.adminLogin(login);
        console.log(response);
        if(response.isSuccess){
         setError("");
         navigate('/dashboard');
        }
        else{
         setError("Something went wrong! Please try again later...");
        }
     }



    const onvalueChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value});
    }

    

    return(
        <><div style={{background:"linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)",
         height:60}}>
        </div>
        <div style={{ background:"orange"}}>
           <Container maxWidth="sm">
            <Grid container spacing={2}
            direction="column"
            justifyContent="center"
            style={{minHeight:"100vh" }}>
                <Paper elevation={2} sx={{ padding:5}}>
                    <Grid container direction="column" spacing="2">
                   <Grid item>
                    <center><img src={user} height="100" width={100} />
                   </center></Grid>
                   <Grid item>
                        <TextField fullWidth label="Username" name="username" value={login.username}
                         placeholder="Enter Username" onChange={(e) =>onvalueChange(e)}
                          variant="outlined" required 

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
                         }}
                          />
                    </Grid>
                    <Grid item>
                    </Grid>
                    <Grid item>
                        <TextField type={values.showPass ? "text" : "password"} variant="outlined" name="password" value={login.password} onChange={(e) =>onvalueChange(e)}
                        fullWidth label="Password" placeholder="Enter Password" required
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
                               <IconButton onClick={handlePassVisibilty} aria-label="toggle password" edge="end">
                                {values.showPass ? (                             
                               <VisibilityOffIcon/>
                                ) : (
                                  <VisibilityIcon/>
                                    )}
                                </IconButton>
                            </InputAdornment>
                          )
                        }}
                        />
                    </Grid>
                    <Grid item>
                    </Grid>
                    <Grid item>
                        <Button fullWidth variant="contained" onClick={()=>loginUser()} color="warning">LOGIN</Button>
                     </Grid>
                    </Grid>
                    {error && <Typography>{error}</Typography>}
                </Paper>
                <Button LinkComponent={Link} to="/"
            sx={{margin:1,borderRadius:10}}><Typography variant="h6" color="#ffffff">Back To Home Page</Typography></Button>     
           </Grid>
           </Container>
        </div>
        <div className="footer">
        </div>
        </>
    );
};
export default Loginadmin;