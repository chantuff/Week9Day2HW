// A user enters a credit card in your form
// If the Luhn Algorithm says its valid, show a message that the card is valid
// If the Luhn Algorith says its invalid show a message that it is not valid
// The Luhn Algo should be checking every time the state changes using the useEffect hook


import { useState, useEffect } from 'react'
import './App.css'
import InputForm from './components/InputForm'

function App() {
  const [count, setCount] = useState(0)


  return (
      
    <InputForm />
  )
}

export default App
