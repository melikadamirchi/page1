import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProjectItem({name,image,id}) {
    const nav=useNavigate()
  return (
    <div className='projectItem ' onClick={()=>{nav("/project/"+ id)}}>

    <div style={{backgroundImage: `url(${image})`}} className="bgImage"></div>
       <br /> <h1>{name}</h1>
    
    </div>
  )
}
