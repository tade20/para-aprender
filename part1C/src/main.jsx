import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react';


const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Display = ({ counter }) => <div>{counter}</div>


const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = (props) => {
  {/*
  const name = 'Peter'
  const age = 10
  const [counter, setCounter] = useState(0);
  setTimeout(
    () => setCounter(counter + 1),
    10000
  )
  console.log("Rendering...", counter)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const resetCounter = () => setCounter(0)
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }*/}
  const [value, setValue] = useState(10)
  const handleClick = () => {
    console.log("clicked the button")
    setValue(0)
  }
  return (
    <div>
      {/*
      <Display counter={counter} />
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={resetCounter}
        text='reset'
      />
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}

      <History allClicks={allClicks} />*/}
      <div>
        {value}
        <button onClick={handleClick}>Reset</button>
      </div>
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
