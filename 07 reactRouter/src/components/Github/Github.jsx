import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    
    const data = useLoaderData()

    //    const [data , setData] = useState([])

    //    useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res)=> res.json())
    //     .then((res)=>{
    //         setData(res)
    //     })
    //    },[])

    return (
        <div>
            Github Followers: {data.followers}
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response =  await fetch ('https://api.github.com/users/hiteshchoudhary')

    return response.json()
}
