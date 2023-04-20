import React from 'react'
import { useParams } from 'react-router-dom'

export default function SinglePage(props) {


  const {id}=useParams()
  
  return (
    <div>SinglePage

      <h1>{id}</h1>
    </div>
  )
}
