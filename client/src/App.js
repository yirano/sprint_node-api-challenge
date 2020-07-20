import React from 'react'
import ProjectForm from './Components/Forms/ProjectForm'
import ActionForm from './Components/Forms/ActionForm'
import ProjectRender from './Components/Render/ProjectRender'
import ActionRender from './Components/Render/ActionRender'

function App() {
  return (
    <div className="App">
      <ProjectForm />
      <ActionForm />
      <ProjectRender />
      <ActionRender />
    </div>
  )
}

export default App
