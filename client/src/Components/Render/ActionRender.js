import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import styled from 'styled-components'

const StyledProjectCard = styled.div`
  border: 1px solid green;
  padding: 2%;
  min-width: 200px;
  border-radius: 10px;
  margin-top: 20px;
`

const StyledProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const ActionRender = () => {

  const [actionData, setActionData] = useState([])

  useEffect(() => {
    Axios.get('https://cors-anywhere.herokuapp.com/https://sprint-node-api.herokuapp.com/api/actions')
      .then(res => {
        console.log(res.data.data)
        setActionData(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <StyledProjectContainer>
      {actionData.map(action => {
        return (
          <StyledProjectCard onClick={console.log(action.id)}>
            <h3>Action</h3>
            <p>{action.description}</p>
            <p>{action.notes}</p>
          </StyledProjectCard>
        )
      })}
    </StyledProjectContainer>
  )
}

export default ActionRender
