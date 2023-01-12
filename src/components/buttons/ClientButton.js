import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ClientButton() {
  const navigate = useNavigate()

  return (
    <button onClick={()=> navigate('ClientProfilePage')}>Client</button>
  )
}
