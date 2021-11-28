import React, {useState, useContext} from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [user, setUser] = useState({
    name: '',
    age: '',
  })

  const [showModal, setShowModal] = useState(false)

  const [userList, setUserList] = useState([])
  const [modalInfo, setModalInfo] = useState({
    title: '',
    message: '',
  })

  const handleSubmit = e => {
    e.preventDefault()
    if (user.name === '' || user.age === '') {
      setModalInfo({
        title: 'Warning',
        message: 'You cannot leave name and age empty',
      })
      setShowModal(prevState => !prevState)
    } else if (user.age < 0) {
      setModalInfo({
        title: 'Warning',
        message: 'Age cannot be an negative number ',
      })
      setShowModal(prevState => !prevState)
    } else {
      setUserList(prevState => [...prevState, user])
      setUser({name: '', age: 0})
    }
  }

  return (
    <AppContext.Provider
      value={{
        user,
        userList,
        setUser,
        handleSubmit,
        showModal,
        setShowModal,
        modalInfo,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}
