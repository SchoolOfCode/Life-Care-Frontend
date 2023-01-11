import React from 'react'


export default function ClientProfile() {
  return (
    <div>
        <img src ={""} alt ="Client Image"/>
        <h1 className='client_name'>name: {name}</h1>
        <button className='tasks_notes'>Task/ Notes</button>
        <h2 className='client_information'>Client Information</h2>
        <div className="contact_details">
            <ul>
                <li>Address : {Address}</li>
                <li>DOB : {DOB}</li>
                <li>Emergency_Contact: {Emergency_Contact}</li>
            </ul>
        </div>
        <div className='overview_med'>
            <li>Overview : {overview}</li>
            <li>Medical_History : {medical_history}</li>
        </div>
    </div>
  )
}
