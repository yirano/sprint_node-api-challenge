import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProjects, removeProject } from '../../Action/action'
import ProjectsCard from './ProjectsCard'
import ProjectsForm from './ProjectsForm'

const ProjectsContainer = (props) => {
  const { fetchProjects, removeProject, projects } = props

  useEffect(() => {
    fetchProjects()
  }, [])

  const handleDelete = (id) => {
    console.log(id)
    removeProject(id)
  }
  console.log('Component ProjectsContainer --> ', projects)
  return (
    <div>
      <ProjectsForm />
      {projects.map(project => {
        return (
          <>
            <Link to={`/actions/${project.id}/projects`}>
              <ProjectsCard project={project} />
            </Link>
            <Link to={`/projects/${project.id}/edit`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => handleDelete(project.id)}>Delete</button>
          </>
        )
      }
      )}
    </div>
  )
}
const mapStateToProps = state => {
  console.log('Connect ProjectsContainer --> ', state.projects)
  return {
    projects: state.projects
  }
}
export default connect(mapStateToProps, { fetchProjects, removeProject })(ProjectsContainer)
