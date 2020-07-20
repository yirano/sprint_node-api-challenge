import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postAction } from '../../Action/action'
import { useRouteMatch, useParams } from 'react-router-dom'

const initialFormState = {
  description: '',
  notes: ''
}
const ActionsForm = (props) => {
  const url = useRouteMatch().url
  const id = useParams().id
  console.log('URL', url)
  const { postAction } = props
  const [form, setForm] = useState(initialFormState)

  const handleSubmit = (e) => {
    e.preventDefault()
    postAction(form)
    setForm(initialFormState)
  }

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value, project_id: id })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="description" value={form.description} placeholder="Action Description" onChange={handleChange} />
        <input type="text" name="notes" value={form.notes} placeholder="Action Description" onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default connect(null, { postAction })(ActionsForm)
