import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import ProjectsContainer from './Components/Projects/ProjectsContainer'

const App = () => {
  return (
    <div>
      <Link to="/">Project</Link>
      <Switch>
        <Route exact path ='/'>
          <ProjectsContainer />
        </Route>
      </Switch>
    </div>
  )
}

export default App
