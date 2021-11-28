import styled from 'styled-components'
import Form from './components/Form'
import UserList from './components/UserList'
import {useGlobalContext} from './Context'
import './App.css'
import StyledModal from './components/Modal'

function App() {
  const {userList, showModal, modalInfo} = useGlobalContext()

  return (
    <>
      {showModal && (
        <StyledModal title={modalInfo.title} message={modalInfo.message} />
      )}
      <StyledContainer>
        <Form />
      </StyledContainer>
      {userList.length >= 1 && (
        <StyledContainer>
          <UserList />
        </StyledContainer>
      )}
    </>
  )
}

const StyledContainer = styled.div`
  margin: 70px auto;
  max-width: 900px;
  width: 90%;
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export default App
