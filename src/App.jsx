import { useState } from 'react'


const App = (props) => {
  const [value, setValue] = useState(10)

  // tapahtumakäsittelijässä 2 tapaa, funktio joka palauttaa funktion
  // tai nuolifunktio
  // const setToValue = (newValue) => () => {
  //   console.log("Value now", newValue)
  //   setValue(newValue)
  // } 
  // <button onClick={setToValue(value + 1)}>increment</button>

  const setToValue = (newValue) => {
    console.log("Value now", newValue)
    setValue(newValue)
  }



  return (
    <div>
      <Display value={value}/>
      <Button onClick={() => setToValue(1000)} text="thousand"/>
      <Button onClick={() => setToValue(0)} text="reset"/>
      <Button onClick={() => setToValue(value + 1)} text="increment"/>
    </div>
  )
}

const Display = props => <div>Value {props.value}</div>

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  )
}

export default App
