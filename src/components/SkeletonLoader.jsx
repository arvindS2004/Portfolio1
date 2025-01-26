import React, { useEffect } from 'react'

export default function SkeletonLoader (){

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        then(res => res.json())
      .then(json => console.log(json))
    }, [])
  return (
    <div>
      
    </div>
  )
}


