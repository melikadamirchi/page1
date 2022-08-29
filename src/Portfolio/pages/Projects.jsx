import React from 'react'
import ProjectItem from '../components/ProjectItem'
import {ProjecrList} from '../../helpers/ProjecrList'
import '../Style/Projects.css'

function Projects() {
  return (
    <div className='projects '>
        <h1>My Personal Projects</h1>
        <div className='projectList '>
      {ProjecrList.map((val,key)=>{return <ProjectItem id={key} name={val.name} image={val.image}/>})}
        </div>
    </div>
  )
}

export default Projects