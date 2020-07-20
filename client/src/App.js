import React from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import ProjectForm from './Components/Forms/ProjectForm'
import ActionForm from './Components/Forms/ActionForm'
import ProjectRender from './Components/Render/ProjectRender'
import ActionRender from './Components/Render/ActionRender'

function App() {
  return (
    <Router>
      <Link to="/projects">Projects</Link>
      <Link to="/actions">Actions</Link>
      <ProjectForm />
      <ActionForm />
      <Switch>
        <Route path="/projects" component={ProjectRender} />
        <Route path="/actions" component={ActionRender} />
        {/* <ProjectRender /> */}
        {/* <ActionRender /> */}
      </Switch>
    </Router>
  )
}

export default App
