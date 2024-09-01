import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from './slices/userSlice';

function Users() {
    const users = useSelector((state)=>state.usersInfo.users);
    const dispatch = useDispatch();
    console.log(users)

    const deleteUserInfo = (index)=>{
        dispatch(deleteUser(index))
    }
  return (
    <div>
    <h2>Users List:</h2>
    {users?.map((user,index)=>{
      return(
        <div key={index}>
          <h2>User:{user.name}</h2>
          <h4>{user.contact}</h4>
          <h4>{user.age}</h4>
          <button onClick={()=>deleteUserInfo(index)} type="button">Delete</button>
        </div>
      )
    })}
</div>
  )
}

export default Users;