import styled from 'styled-components'
import {CloseCircle} from 'iconsax-react'
import {useGlobalContext} from '../Context'
import ReactDOM from 'react-dom'

const Modal = props => {
  const {setShowModal} = useGlobalContext()

  return ReactDOM.createPortal(
    <Overlay>
      <StyledModal>
        <div className='title'>
          <h3>{props.title}</h3>
          <CloseCircle
            className='close'
            color='white'
            onClick={() => setShowModal(prevState => !prevState)}
          />
        </div>
        <p>{props.message}</p>
      </StyledModal>
    </Overlay>,
    document.querySelector('#modal')
  )
}

const Overlay = styled.div`
  position: absolute;
  background-color: #00000018;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledModal = styled.div`
  background-color: white;
  border-radius: 10px;
  max-width: 900px;
  width: 90%;
  padding: 0 0px;
  overflow: hidden;
  p {
    padding: 15px 20px;
  }
  .title {
    display: flex;
    background-color: #8c00ff;
    color: white;
    padding: 15px 20px;
    justify-content: space-between;

    .close {
      cursor: pointer;
    }

    h3 {
      padding: 0;
      margin: 0;
    }
  }
`

export default Modal
