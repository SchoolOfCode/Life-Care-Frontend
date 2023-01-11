import React from 'react'
import AddNewNote from './AddNewNote'
import SubmitNotes from './SubmitNotes'

export default function TasksNotes() {
  return (
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
    
  )
}
