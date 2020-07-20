import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { StyledCard, StyledContainer } from '../../StyledComponents'


const API = 'https://cors-anywhere.herokuapp.com/https://sprint-node-api.herokuapp.com'
const ActionRender = () => {

  const [actionData, setActionData] = useState([])

  useEffect(() => {
    Axios.get(`${API}/api/actions`)
      .then(res => {
        console.log(res.data.data)
        setActionData(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleClick = id => {
    console.log(id)
  }

  return (
    <StyledContainer>
      {actionData.map(action => {
        return (
          <StyledCard onClick={() => handleClick(action.id)}>
            <h3>Action</h3>
            <p>{action.description}</p>
            <p>{action.notes}</p>
          </StyledCard>
        )
      })}
    </StyledContainer>
  )
}

export default ActionRender
