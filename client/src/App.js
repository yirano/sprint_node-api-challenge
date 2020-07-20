import React from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import ProjectForm from './Components/Forms/ProjectForm'
import ActionForm from './Components/Forms/ActionForm'
import ProjectRender from './Components/Render/ProjectRender'
import ActionRender from './Components/Render/ActionRender'
import styled from 'styled-components'

const StyledLink = styled.div`
  a {
    color: black;
    padding: 10px 20px;
    margin: 10px;
    font-size: 20px;
    text-decoration: none;
    border: 1px solid blue;
    border-radius: 10px;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`

function App() {
  return (
    <Router>
      <StyledLink>
        <Link to="/projects">Projects</Link>
        <Link to="/actions">Actions</Link>
      </StyledLink>
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
