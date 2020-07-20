import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProjects } from '../../Action/action'
import ProjectsCard from './ProjectsCard'

const ProjectsContainer = (props) => {
  const { fetchProjects, projects } = props
  useEffect(() => {
    fetchProjects()
  }, [])
  console.log('Component ProjectsContainer --> ', projects)
  return (
    <div>
      {projects.map(project => {
        return <ProjectsCard project={project} />
      })}
    </div>
  )
}
const mapStateToProps = state => {
  console.log('Connect ProjectsContainer --> ', state.projects)
  return {
    projects: state.projects
  }
}
export default connect(mapStateToProps, { fetchProjects })(ProjectsContainer)
