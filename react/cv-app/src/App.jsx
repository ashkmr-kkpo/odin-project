import './App.css'
import TextField from '@mui/material/TextField'
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [university, setUniversity] = useState('');
  const [location, setLocation] = useState('');

    return (
    <>
    <div id = "main">
      <h1>Resume</h1>
        <div id = "body">
          <div className = "sec">
          <TextField class="inp" label="First Name" variant="outlined" margin="dense" onChange={e => {setFirstName(e.target.value)}}/>
          <TextField class="inp" label="Last Name" variant="outlined" margin="dense" onChange={e => {setLastName(e.target.value)}}/>
          </div>
          <div className = "sec">
          <TextField class="inp" label="University" variant="outlined" margin="dense" onChange={e => {setUniversity(e.target.value)}}/>
          <TextField class="inp" label="Location" variant="outlined" margin="dense" onChange={e => {setLocation(e.target.value)}}/>
          </div>
        </div>
    </div>
    <div id = "cv-body">
      <h1 id="cv-title">{firstName + " " + lastName}</h1>
      <div id="cv-cont">
        <p>{university}</p>
        <p>{location}</p>
      </div>
    </div>
    </>
  )
}

export default App
