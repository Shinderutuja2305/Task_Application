import React from 'react'
import {AppBar, Toolbar, Typography, Box, Button} from '@mui/material'
import { Link } from "react-router-dom";
import welcome from '../Capture.PNG';


const Home = () => {
  return (
    <>
            <AppBar
		 position="sticky"
		sx={{
			background:"linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
				}}
		>
		<Toolbar>
		<Typography variant="h4" style={{fontFamily:'Times New Roman'}}> Task Application</Typography>
		<Box display="flex" marginLeft="auto">
		<Button LinkComponent={Link} to="/admin"
		variant='contained' 
		sx={{margin:1,boderRadius:10}} 
		 color="warning">
			Admin
		</Button>
		<Button LinkComponent={Link} to="/loginuser"
		variant='contained' 
		sx={{margin:1,boderRadius:10}}  
		color="warning">
			Login
		</Button>
		</Box>
		</Toolbar>
		</AppBar>
        <div>
			<center>
				<img src={welcome} height={400} width={500} style={{marginTop:'60px'}}/>
			</center>
        </div>
        <footer className="footer">
	    </footer>
    </>
    
  )
}

export default Home;