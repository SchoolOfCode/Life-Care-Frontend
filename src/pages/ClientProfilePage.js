import React from 'react'
import ClientProfile from '../components/clientProfile/ClientProfile'

export default function ClientProfilePage() {
  return (
    <div>
        <ClientProfile
    name={'John Doe'}
    address={'123 Main St'}
    DOB={'01/01/2000'}
    emergency_contact={'555-555-5555'}
    overview={'John is a good client'}
    medical_history={'John has a history of high blood pressure'}
/>
  
    </div>
  )
}
