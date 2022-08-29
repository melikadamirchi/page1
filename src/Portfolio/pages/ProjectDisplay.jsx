import React from 'react'
import { useParams } from 'react-router-dom';
import { ProjecrList } from './../../helpers/ProjecrList';
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectDisplay() {
  const{id}=useParams()
  const project=ProjecrList[id]
  return (
    <div className=' mt-5 d-flex flex-column align-items-center justify-content-center'>
      <h1>{project.name}</h1>
      <img src={project.image} alt="" />
     <a href={project.link} target="_blank" title='Click me'><GitHubIcon style={{width:"600px", height:"7vh", color:"#ac6565",marginTop:"3%"}}/></a>
     <p style={{fontSize:"0.7rem"}}>Click on the  <a target='blank' style={{color:'black', paddingLeft:'2px',paddingRight:'2px'}} href={project.link}> GitHub </a>  Icon above </p> 
    </div>
  )
}

export default ProjectDisplay