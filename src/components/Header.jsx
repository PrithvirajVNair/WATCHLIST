import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Header = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1, position:'fixed', width:'100%', zIndex:'999' }}>
                <AppBar position="static" sx={{ backgroundColor: "#000000ff"}}>
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" component="div">
                            <Link to={'/'}><Button variant="text" sx={{color:'white'}}>Home</Button></Link>
                            <Link to={'/list'}><Button variant="text" sx={{color:'white'}}>List</Button></Link>
                            <Link to={'/planning'}><Button variant="text" sx={{color:'white'}}>PLANNING</Button></Link>
                            <Link to={'/watching'}><Button variant="text" sx={{color:'white'}}>WATCHING</Button></Link>
                            <Link to={'/completed'}><Button variant="text" sx={{color:'white'}}>COMPLETED</Button></Link>
                            <Link to={'/onhold'}><Button variant="text" sx={{color:'white'}}>ON HOLD</Button></Link>
                            <Link to={'/dropped'}><Button variant="text" sx={{color:'white'}}>DROPPED</Button></Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Header