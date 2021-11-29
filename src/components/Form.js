import styled from 'styled-components'
import {useGlobalContext} from '../Context'
import Button from './Button'

const Form = () => {
  const {handleSubmit, userAge, userName} = useGlobalContext()

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' ref={userName} />
        <label>Age</label>
        <input type='number' ref={userAge} />
        <Button type='submit'>Add user</Button>
      </StyledForm>
    </>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  label {
    margin: 15px 0;
  }
  input {
    border-radius: 10px;
    border: 1px solid #dadada;
    padding: 10px;
  }
`

export default Form
