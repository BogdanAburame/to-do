import React from 'react'
import Project from '../Project/Project'
import { useSelector } from 'react-redux'

const selectProjects = state => state.tasks.projects

const Projects = () => {
  const projects = useSelector(selectProjects)
  return (
    <div>
      {projects.map(project => {
        return <Project title={project.title} id={project.id} key ={project.id}/>
      })}
    </div>
  )
}

export default Projects