import React, { useState } from 'react'
import Axios from 'axios'


const Project = () => {

  const [project, setProject] = useState({})

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    Axios.post('https://cors-anywhere.herokuapp.com/https://sprint-node-api.herokuapp.com/api/projects', project)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Project Form</h4>
      <input type="text" name="description" placeholder="Project Description" onChange={handleChange} />
      <input type="text" name="name" placeholder="Project Name" onChange={handleChange} />
      <input type="submit" />
    </form>
  )
}

export default Project
