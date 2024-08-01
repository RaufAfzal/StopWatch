import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [randomInput, setRandomInput] = useState('');
  const [seconds, setSeconds] = useState(0);
  const timerId = useRef(0);
  const renders = useRef(0);


  const handleUserInput = (e) => {
    setRandomInput(e.target.value)
    renders.current++;
  }

  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds(prev => prev + 1)
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  }

  const resetTimer = () => {
    stopTimer()
    if (seconds)
      renders.current++;
    setSeconds(0);
  }

  return (

    <div className='App'>
      <label>Random Input</label>
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder='Random Input'
        value={randomInput}
        onChange={handleUserInput} />
      <br></br>
      <br></br>
      {randomInput} <br></br>
      <section>
      <button onClick={startTimer} >Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer} >Reset</button>
      </section>


      <br></br>
      <p> Seconds: {seconds}</p>
      <p> Renders: {renders.current}</p>
    </div>

  )
}

export default App;
