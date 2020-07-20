import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postProject } from '../../Action/action'

const initialForm = {
  name: '',
  description: ''
}

const ProjectsForm = (props) => {
  const { postProject } = props
  const [form, setForm] = useState(initialForm)

  const handleChange = e => {
    console.log(e.target.value)
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    postProject(form)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} placeholder="Name of Project" value={form.name} />
      <input type="text" name="description" onChange={handleChange} placeholder="Description of Project" value={form.description} />
      <input type="submit" value="Submit" />
    </form>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.projects
  }
}

export default connect(mapStateToProps, { postProject })(ProjectsForm)
