import { FETCH_PROJECTS, FETCH_ACTIONS, POST_PROJECT } from '../Action/action'

const initialState = {
  projects: [],
  actions: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      console.log('Reducer Fetch Project --> ', action.payload)
      return { projects: action.payload }
    case FETCH_ACTIONS:
      return { actions: action.payload }
    case POST_PROJECT:
      return { state }
    default:
      return state
  }
}
