import './App.css'
import TextField from '@mui/material/TextField'
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

    return (
    <>
    <div id = "main">
      <h1>Resume</h1>
        <div id = "body">
          <TextField class="inp" label="First Name" variant="outlined" margin="dense" onChange={e => {setFirstName(e.target.value)}}/>
          <TextField class="inp" label="Last Name" variant="outlined" margin="dense" onChange={e => {setLastName(e.target.value)}}/>
        </div>
    </div>
    <div id = "cv-body">
      <h1>{firstName + " " + lastName}</h1>
    </div>
    </>
  )
}

export default App
