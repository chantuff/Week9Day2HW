// Credit card numbers can be validated with a process called the Luhn algorithm. The Luhn algorithm works like this:

// Starting with the next to last digit and continuing with every other digit going back to the beginning of the card number, double the digit.
// Sum all digits in the altered number.
// If that total is a multiple of 10, the number is valid.


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
