import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    
    const {user} = useContext(UserContext)

    if(!user) return <p>Please login</p>
    return <p>welcome : {user.username} ,Your password :{user.password}</p>
}

export default Profile
