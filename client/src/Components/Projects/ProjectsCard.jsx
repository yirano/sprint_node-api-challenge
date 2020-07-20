import React from 'react'

const ProjectsCard = (props) => {
  const { project } = props
  return (
    <div>
      <h4>{project.name}</h4>
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectsCard
