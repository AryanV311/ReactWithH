
import { useEffect, useState } from 'react';
import './App.css'

const ProgressBar = ({progress}) => {

  const [animatedPr0gress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress)
    }, 100)
  },[progress])

  return (
    <div className='outer'>
      <div className='inner' style={{
          transform:`translate(${animatedPr0gress - 100}%)`, 
        color:animatedPr0gress < 5 ? 'black':'white'
      }
      }
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={progress}
      role="progressbar"
      >
        {progress}%
      </div>
    </div>
  )
}

function App() {

  const bars = [2, 5, 25, 45, 75, 90, 100];

  return (

    <div className='App'>
      <h1>Progress Bar</h1>
      {
        bars.map((bar, index) => (
          <ProgressBar key={index} progress={bar} />
        ))
      }
    </div>

  )
}

export default App
