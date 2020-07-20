import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchActions } from '../../Action/action'
import ActionsCard from './ActionsCard'
import ActionsForm from './ActionsForm'

const ActionsContainer = (props) => {
  const { fetchActions, actions } = props
  const id = useParams().id
  useEffect(() => {
    console.log('Params ID from ActionsContainer --> ', id)
    fetchActions(id)
  }, [])
  console.log('Component ActionsContainer --> ', actions)
  return (
    <div>
      <ActionsForm />
      {actions.map(action => <ActionsCard action={action} />)}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    actions: state.actions || []
  }
}
export default connect(mapStateToProps, { fetchActions })(ActionsContainer)
