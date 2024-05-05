import React from 'react';
import { AppBar, Box, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import AllTasks from './AllTasks';

const DashBoard = () => {
  return (
        <>
           <AppBar position="sticky" sx={{background:"linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
           }}>
            <Box display="flex" marginLeft="auto">
    
    <Button LinkComponent={Link} to="/"
    variant="contained"
    sx={{margin:1,borderRadius:10}}
    color="warning" >
        Logout
    </Button>
    </Box>
        </AppBar>
        <div>
        <Grid style={{margin:'30px'}} container item xs={12} sm={10} lg={10}>
            <AllTasks/>
        </Grid>
        </div>
        <footer className="footer">
    </footer>
    </>

  )
}

export default DashBoard