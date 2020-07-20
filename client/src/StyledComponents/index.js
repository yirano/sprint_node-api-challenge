import styled from 'styled-components'

export const StyledCard = styled.div`
  border: 1px solid green;
  padding: 2%;
  min-width: 200px;
  border-radius: 10px;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
    background-color: green;
    color: white;
  }
`

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`