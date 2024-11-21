import { useEffect, useState } from 'react'
import pep1 from './assets/pep1.png'
import weirdpizza from './assets/weirdpizza.png'
import italian from './assets/italian.avif'

import './App.css'

function App() {
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(-1);
  let images = [pep1, weirdpizza, italian];
  let imageKeys = [];
  let isUsed = new Array(images.length).fill(0);
  let randomOrderImages = [];

  for (let i=0;i<images.length*2;i++)
  {
    let currPosition = getRandomInt(images.length);

    while(isUsed[currPosition] > 1)
    {
      currPosition = getRandomInt(images.length);
    }
    randomOrderImages.push(<img key={i} src={images[currPosition]} className="logo" alt="Pep1" onClick={() => 
      {
        console.log(`${i} +" " + ${selected}`)
        if (selected >=0 && selected == currPosition)
        {
          setScore(score+1)
          setSelected(-1)
          return;
        }

        setSelected(currPosition);
      }}/>);
    imageKeys.push(currPosition);
    isUsed[currPosition]++;
  }

  return (
    <>
      <h1>Score: {score}</h1>
      <div className='cards'>
        {randomOrderImages.map(item => item)}
      </div>
    </>
  )
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default App
