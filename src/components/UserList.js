import React from 'react'
import {useGlobalContext} from '../Context'

const UserList = () => {
  const {userList} = useGlobalContext()

  return (
    <div>
      {userList.map(user => {
        return (
          <div>
            <h3>{user.name}</h3>
            <h4>{user.age}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default UserList
