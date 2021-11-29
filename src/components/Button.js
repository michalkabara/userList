import styled from 'styled-components'

const Button = props => {
  return (
    <StyledButton type={props.type || 'button'} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background-color: #8c00ff;
  color: white;

  width: 150px;
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
  :hover {
    background-color: #7f00e7;
  }
`

export default Button
