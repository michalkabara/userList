import React, {useState, useContext, useRef} from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const userName = useRef()
  const userAge = useRef()

  const [showModal, setShowModal] = useState(false)

  const [userList, setUserList] = useState([])
  const [modalInfo, setModalInfo] = useState({
    title: '',
    message: '',
  })

  const handleSubmit = e => {
    e.preventDefault()
    const userNameValue = userName.current.value
    const userAgeValue = userAge.current.value
    if (userNameValue.trim().length === 0 || userAgeValue === '') {
      setModalInfo({
        title: 'Warning',
        message: 'You cannot leave name and age empty',
      })
      setShowModal(prevState => !prevState)
    } else if (+userAgeValue < 0) {
      setModalInfo({
        title: 'Warning',
        message: 'Age cannot be an negative number ',
      })
      setShowModal(prevState => !prevState)
    } else {
      setUserList(prevState => [
        ...prevState,
        {name: userNameValue, age: userAgeValue},
      ])
      userName.current.value = ''
      userAge.current.value = ''
      console.log(userList)
    }
  }

  return (
    <AppContext.Provider
      value={{
        userList,
        handleSubmit,
        showModal,
        setShowModal,
        modalInfo,
        userName,
        userAge,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}
