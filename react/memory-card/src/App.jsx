import { useState } from 'react'
import pep1 from './assets/pep1.png'
import weirdpizza from './assets/weirdpizza.png'
import italian from './assets/italian.avif'

import './App.css'

function App() {
  const [score, setScore] = useState(0)
  let images = [pep1, weirdpizza, italian];
  let isUsed = new Array(images.length).fill(0);
  let randomOrderImages = [];
  for (let i=0;i<images.length*2;i++)
  {
    let currPosition = getRandomInt(images.length);

    while(isUsed[currPosition] > 1)
    {
      currPosition = getRandomInt(images.length);
    }
    console.log(currPosition)
    randomOrderImages.push(generateCard(images[currPosition]));
    isUsed[currPosition]++;
    console.log(isUsed);
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

function generateCard(image)
{
  return <img src={image} className="logo" alt="Pep1"/>
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default App
