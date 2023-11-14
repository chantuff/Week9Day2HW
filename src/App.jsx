import React, { useState } from 'react';

const validCard = (cardNumber) => {
  // Implementation of the Luhn algorithm
  const digits = cardNumber.toString().split('').map(Number);

  for (let i = digits.length - 2; i >= 0; i -= 2) {
    let doubledDigit = digits[i] * 2;
    digits[i] = doubledDigit > 9 ? doubledDigit - 9 : doubledDigit;
  }

  const sum = digits.reduce((acc, digit) => acc + digit, 0);

  return sum % 10 === 0;
};

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setCardNumber(value);
    setIsValid(null); //
  };

  const handleValidation = () => {
    const result = validCard(cardNumber);
    setIsValid(result);
  };

  return (
    <div>
      <label>
        Enter valid card number:
        <input type="text" value={cardNumber} onChange={handleInputChange} />
      </label>
      <button onClick={handleValidation}>Check card number</button>
      {isValid !== null && (
        <p>{isValid ? 'Valid Card Number' : 'Invalid Card Number'}</p>
      )}
    </div>
  );
};

export default CreditCardForm;
