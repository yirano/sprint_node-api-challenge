import React, { useState } from 'react'
import Axios from 'axios'


const Action = () => {

  const [action, setAction] = useState({ "project_id": 2 })

  const handleChange = (e) => {
    setAction({ ...action, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('https://cors-anywhere.herokuapp.com/https://sprint-node-api.herokuapp.com/api/actions', action)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Action Form</h4>
      <input type="text" name="description" placeholder="Action Description" onChange={handleChange} />
      <input type="text" name="notes" placeholder="Action Notes" onChange={handleChange} />
      <input type="submit" />
    </form>
  )
}

export default Action
