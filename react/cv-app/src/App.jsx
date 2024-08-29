import './App.css'
import TextField from '@mui/material/TextField'

function App() {
    return (
    <>
    <div id = "main">
        <div id = "title">
            <h1>Resume</h1>
            <TextField id="outlined-basic" label="First Name" variant="outlined" />
            <TextField id="outlined-basic" label="Last Name" variant="outlined" />
          </div>
        <div id = "grid-body">
        </div>
    </div>
    </>
  )
}

export default App
