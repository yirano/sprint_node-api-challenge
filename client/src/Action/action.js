import axios from 'axios'
import API from '../API/api'

export const FETCH_PROJECTS = 'FETCH_PROJECTS'
export const FETCH_ACTIONS = 'FETCH_ACTIONS'
export const POST_PROJECT = 'POST_PROJECT'

export const fetchProjects = () => dispatch => {
  axios.get(`${API}/projects`)
    .then(res => {
      console.log('Action Fetch Project --> ', res.data)
      dispatch({ type: FETCH_PROJECTS, payload: res.data.data })
    })
    .catch(err => {
      console.log(err)
    })
}