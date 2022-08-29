import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import { useState, useEffect } from 'react';
import '../Style/Navbar.css'


function Navbar() {
    const[expand,setExpand]=useState(false)
    const location = useLocation();

    useEffect(() => {
      setExpand(false);
    }, [location]);
    
  return (
    <div className=' navbar w-100 h-100 bg-dark text-light' id={expand ? 'open': 'close'}>
        <div className='toggleButton w-100 d-flex align-items-center justify-content-end'>
            <button className=' me-2 ' onClick={()=>setExpand((prev=>!prev))}><ReorderIcon/></button>
        </div>
        <div className='links w-100 h-100 d-flex align-items-center justify-content-center'>
            <Link className='li' to={"/"}>Home</Link>
            <Link className='li' to={"/experience"}>Experience</Link>
            <Link className='li' to={"/project"}>Projects</Link>
            <Link className='li' to={"/about"}>About</Link>
        </div> 
    </div>
  )
}

export default Navbar