import styled from 'styled-components'
import {useGlobalContext} from '../Context'

const Form = () => {
  const {user, handleSubmit, setUser} = useGlobalContext()

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type='text'
          value={user.name}
          onChange={e => setUser({...user, name: e.target.value})}
        />
        <label>Age</label>
        <input
          type='number'
          value={user.age}
          onChange={e => setUser({...user, age: e.target.value})}
        />
        <button>Add user</button>
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
  button {
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
  }
`

export default Form
