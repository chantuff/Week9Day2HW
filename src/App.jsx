// Credit card numbers can be validated with a process called the Luhn algorithm. The Luhn algorithm works like this:

// Starting with the next to last digit and continuing with every other digit going back to the beginning of the card number, double the digit.
// Sum all digits in the altered number.
// If that total is a multiple of 10, the number is valid.

// A user enters a credit card in your form
// If the Luhn Algorithm says its valid, show a message that the card is valid
// If the Luhn Algorith says its invalid show a message that it is not valid
// The Luhn Algo should be checking every time the state changes using the useEffect hook

import "./App.css";

function App() {
  const validCard = (cardNumber) => {
    const digits = cardNumber.toString().split('').map(Number);
  
    for (let i = digits.length - 2; i >= 0; i -= 2) {
      let doubledDigit = digits[i] * 2;
      digits[i] = doubledDigit > 9 ? doubledDigit - 9 : doubledDigit;
    }
  
    const sum = digits.reduce((acc, digit) => acc + digit, 0);
  
    return sum % 10 === 0;
  };
  
  const creditCardNumber = '1234567890123456';
  const isValid = validCard(creditCardNumber);
  
  console.log(isValid);

}

export default App;
