import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import ProjectsContainer from './Components/Projects/ProjectsContainer'
import ActionsContainer from './Components/Actions/ActionsContainer'
import ProjectsForm from './Components/Projects/ProjectsForm'

const App = () => {
  return (
    <div>
      <Link to="/">Project</Link>
      <Switch>
        <Route exact path='/'>
          <ProjectsContainer />
        </Route>
        <Route path='/actions/:id/projects'>
          <ActionsContainer />
        </Route>
        <Route path='/projects/:id/edit'>
          <ProjectsForm />
        </Route>
      </Switch>
    </div>
  )
}

export default App
