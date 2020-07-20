import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import styled from 'styled-components'

const StyledProjectCard = styled.div`
  border: 1px solid gray;
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

const ProjectRender = () => {

  const [projData, setProjData] = useState([])

  useEffect(() => {
    Axios.get('https://cors-anywhere.herokuapp.com/https://sprint-node-api.herokuapp.com/api/projects')
      .then(res => {
        console.log(res.data.data)
        setProjData(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <StyledProjectContainer>
      {projData.map(proj => {
        return (
          <StyledProjectCard>
            <h3>Project</h3>
            <p>{proj.description}</p>
            <p>{proj.notes}</p>
          </StyledProjectCard>
        )
      })}
    </StyledProjectContainer>
  )
}

export default ProjectRender
