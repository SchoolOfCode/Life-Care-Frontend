import React from 'react'
import AddNewNote from './AddNewNote'
import SubmitNotes from './SubmitNotes'

export default function TasksNotes() {
  return (
      <div>
        <div>
        <AddNewNote/>
        <h1>Tasks</h1>
        <p>Brief overview of your visit:</p>
        <input></input>
        <p>Incidents / concerns?</p>
        <input></input>
        <p>Additional Information:</p>
        <input></input>
        <SubmitNotes/>
        </div>
      <h1>PREVIOUS NOTES</h1>
        <div>
          <p>Carer:</p>
          <p>Date:</p>
          <p>Time:</p>
          <h1>Tasks</h1>
          <p>Brief overview of your visit:</p>
          <div>
            <p>overview</p>
          </div>
          <p>Incidents / concerns?</p>
          <div>
            <p>Incidents / concerns?</p>
          </div>
          <p>Additional Information:</p>
          <div>
            <p>Additional Information</p>
          </div>
        </div>

    </div>
    
  )
}
