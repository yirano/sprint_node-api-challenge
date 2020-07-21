import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { postProject, editProject } from '../../Action/action'
import Axios from 'axios'
import API from '../../API/api'
import e from 'express'

const initialForm = {
  name: '',
  description: ''
}

const ProjectsForm = (props) => {
  const history = useHistory()
  const id = useParams().id
  const { postProject } = props
  const [form, setForm] = useState(initialForm)
  const [editing, setEditing] = useState(false)

  const handleChange = e => {
    console.log(e.target.value)
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!editing) {
      postProject(form)
    } else {
      editProject(form, id)
    }
    setEditing(!editing)
    // props.history.push('/')
  }

  useEffect(() => {
    console.log(id)
    if (id) {
      setEditing(!editing)
      Axios.get(`${API}/projects/${id}`)
        .then(res => {
          console.log(res.data.data)
          const project = res.data.data
          setForm({
            description: project.description,
            name: project.name,
            project_id: project.id
          })
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      setForm(initialForm)
    }
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} placeholder="Name of Project" value={form.name} />
      <input type="text" name="description" onChange={handleChange} placeholder="Description of Project" value={form.description} />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default connect(null, { postProject, editProject })(ProjectsForm)
