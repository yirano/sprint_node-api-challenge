import React from 'react'

const ActionsCard = (props) => {
  const {action} = props
  return (
    <div>
      <h4>{action.description}</h4>
      <p>{action.notes}</p>
    </div>
  )
}

export default ActionsCard
