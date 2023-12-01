import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data , setdata] = useState([])
    //    useEffect(()=>{
    //     fetch('https://api.github.com/users/PremveerSingh195')
    //     .then((res)=>res.json())
    //     .then((res)=>{setdata(res)})
    //    },[])

    return (
        <div className='flex justify-center items-center bg-gray-600 text-white p-4 text-xl'>Github followers : {data.followers}
        <img src={data.avatar_url} alt="Profile picture" width={300} />
        </div>
    )
}

export default Github


export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/PremveerSingh195')
    return response.json()
 }
