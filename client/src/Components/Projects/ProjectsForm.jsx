import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { postProject } from '../../Action/action'

const initialForm = {
  name: '',
  description: ''
}

const ProjectsForm = (props) => {
  const history = useHistory()
  const { postProject } = props
  const [form, setForm] = useState(initialForm)

  const handleChange = e => {
    console.log(e.target.value)
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    postProject(form)
    props.history.push('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} placeholder="Name of Project" value={form.name} />
      <input type="text" name="description" onChange={handleChange} placeholder="Description of Project" value={form.description} />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default connect(null, { postProject })(ProjectsForm)
