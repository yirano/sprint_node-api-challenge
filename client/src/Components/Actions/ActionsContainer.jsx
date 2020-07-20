import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchActions} from '../../Action/action'
import ActionsCard from './ActionsCard'

const ActionsContainer = (props) => {
  const {fetchActions, actions} = props
  const id = useParams().id
  useEffect(()=> {
    fetchActions(id)
  }, [])
  console.log('Component ActionsContainer --> ', actions)
  console.log('Params ID from ActionsContainer --> ', id)
  return (
    <div>
      {actions.map(action=> <ActionsCard action={action} />)}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    actions: [] || state.actions 
  }
}
export default connect(mapStateToProps, {fetchActions})(ActionsContainer)
