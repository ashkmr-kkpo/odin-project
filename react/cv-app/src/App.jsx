import './App.css'
import TextField from '@mui/material/TextField'
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [university, setUniversity] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [company, setCompany] = useState('');
  const [loc, setloc] = useState('');
  const [bul1, setbul1] = useState('');
  const [bul2, setbul2] = useState('');
  const [bul3, setbul3] = useState('');

    return (
    <>
    <div id = "main">
      <h1 className="displ">Resume</h1>
        <div id = "body">
          <div className = "sec">
          <TextField class="inp" id = "test" label="First Name"  variant="outlined" margin="dense" onChange={e => {setFirstName(e.target.value)}}/>
          <TextField class="inp" label="Last Name"defaultValue="" variant="outlined" margin="none" onChange={e => {setLastName(e.target.value)}} />
          </div>
          <div className = "sec">
          <TextField class="inp" label="University" variant="outlined" margin="none" onChange={e => {setUniversity(e.target.value)}}/>
          <TextField class="inp dateInp" label="Start" variant="outlined" margin="none" onChange={e => {setStart(e.target.value)}}/>
          <TextField class="inp dateInp" label="End" variant="outlined" margin="none" onChange={e => {setEnd(e.target.value)}}/>
          </div>
          <CompanyInput 
            setCompany={setCompany} 
            setLocation={setloc}
            setBullet1={setbul1}
            setBullet2={setbul2}
            setBullet3={setbul3}
          />
        </div>
    </div>
    <div className= "displ" id = "cv-body">
      <h1 className="cv-title">{firstName + " " + lastName}</h1>
      <div id="cv-cont">
        <div className='placeLoc'>
        <p>{university}</p>
        <p className="date">{start} - {end}</p>
        </div>
        <h2 className="cv-title">EXPERIENCE</h2>
        <div className="exp">
          <CompanyHtml comp={company} loc={loc} bul1={bul1} bul2={bul2} bul3={bul3}></CompanyHtml>
          <CompanyHtml></CompanyHtml>
        </div>
      </div>
    </div>
    </>
  )
}

function CompanyInput({setCompany, setLocation, setBullet1, setBullet2, setBullet3})
{
  return (
    <>
    <div className = "exp-sec">
      <div className="expTop">
    <TextField class="inp" label="Company" variant="outlined" margin="normal" onChange={e => {setCompany(e.target.value)}}/>
    <TextField class="inp" label="Location" variant="outlined" margin="normal" onChange={e => {setLocation(e.target.value)}}/>
    </div>
    <div className="exp">
    <TextField class="inp" label="Bullet1" variant="outlined" margin="normal" onChange={e => {setBullet1(e.target.value)}}/>
    <TextField class="inp" label="Bullet2" variant="outlined" margin="normal" onChange={e => {setBullet2(e.target.value)}}/>
    <TextField class="inp" label="Bullet3" variant="outlined" margin="normal" onChange={e => {setBullet3(e.target.value)}}/>
    </div>
    </div>
    </>
  )
}

function CompanyHtml({comp, loc, bul1, bul2, bul3})
{
  return (
    <>
      <div className="exp">
        <div className="placeLoc"> 
        <p>{comp ?? "Company Name"} </p>
        <p>{loc ?? "Location"} </p>
        </div>
        <ul>
        <li>{bul1 ?? "Bullet 1 Bullet 1Bullet 1Bullet 1Bullet 1Bullet 1"}</li>
        <li>{bul2 ?? "Bullet 2 Bullet 2Bullet 2Bullet 2Bullet 2Bullet 2"}</li>
        <li>{bul3 ?? "Bullet 3 Bullet 3Bullet 3Bullet 3Bullet 3Bullet 3"}</li>
        </ul>
      </div>
    </>
  )
}

export default App
