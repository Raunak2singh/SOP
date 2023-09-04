import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Navbar() {
  return (
    <AppBar position='static' sx={{background:"#fff",boxShadow:"none",borderBottom:"2px solid #000"}}>
        <Toolbar sx={{background:"none"}}>
       <Typography sx={{textTransform:"uppercase",letterSpacing:"2px",fontWeight:"800",color:"#000"}}>Effizient</Typography> 
        </Toolbar>
    </AppBar>
  )
}

export default Navbar