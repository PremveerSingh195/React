import React from 'react'
import {useParams} from 'react-router-dom'

function User() {

     const {userid} = useParams()

    return (
        <div className='flex justify-center items-center bg-gray-600 text-white p-4 text-xl'>User:{userid} </div>
    )
}

export default User
