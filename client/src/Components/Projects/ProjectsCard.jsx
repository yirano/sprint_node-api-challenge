import React from 'react'

const ProjectsCard = (props) => {
  const { project } = props
  const handleDelete = (id) => {
    console.log(id)
  }
  return (
    <div>
      <h4>{project.name}</h4>
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectsCard
