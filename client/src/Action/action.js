import axios from 'axios'
import API from '../API/api'

export const FETCH_PROJECTS = 'FETCH_PROJECTS'
export const FETCH_ACTIONS = 'FETCH_ACTIONS'
export const POST_PROJECT = 'POST_PROJECT'
export const POST_ACTION = 'POST_ACTION'

export const fetchProjects = () => dispatch => {
  axios.get(`${API}/projects`)
    .then(res => {
      console.log('Action Fetch Project --> ', res.data.data)
      dispatch({ type: FETCH_PROJECTS, payload: res.data.data })
    })
    .catch(err => {
      console.log(err)
    })
}

export const fetchActions = (id) => dispatch => {
  axios.get(`${API}/actions/${id}/projects`)
    .then(res => {
      console.log('Action Fetch Actions --> ', res.data.data)
      dispatch({ type: FETCH_ACTIONS, payload: res.data.data })
    })
    .catch(err => console.log(err))
}

export const postProject = (project) => dispatch => {
  axios.post(`${API}/projects`, project)
    .then(res => {
      console.log(res)
      dispatch({ type: POST_PROJECT, payload: res.data.data })
      window.location.reload()
    })
    .catch(err => {
      console.log(err.response)
    })
}

export const editProject = (project, id) => dispatch => {
  axios.put(`${API}/projects/${id}`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

export const removeProject = (id) => dispatch => {
  axios.delete(`${API}/projects/${id}`)
    .then(res => {
      console.log(res)
      window.location.reload()
    })
    .catch(err => {
      console.log(err)
    })
}

export const postAction = action => dispatch => {
  axios.post(`${API}/actions`, action)
    .then(res => {
      dispatch({ type: POST_ACTION, payload: res.data.data })
      window.location.reload()
    })
}