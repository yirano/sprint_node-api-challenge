import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { StyledCard, StyledContainer } from '../../StyledComponents'

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
    <StyledContainer>
      {projData.map(proj => {
        return (
          <StyledCard>
            <h3>Project</h3>
            <p>{proj.description}</p>
            <p>{proj.notes}</p>
          </StyledCard>
        )
      })}
    </StyledContainer>
  )
}

export default ProjectRender
