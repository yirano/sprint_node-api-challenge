import axios from 'axios'
import API from '../API/api'

export const FETCH_PROJECTS = 'FETCH_PROJECTS'
export const FETCH_ACTIONS = 'FETCH_ACTIONS'
export const POST_PROJECT = 'POST_PROJECT'

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