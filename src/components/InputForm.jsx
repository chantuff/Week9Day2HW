import React from "react";
import {useState, useEffect} from "react";

function validCard({number}) {
    const [isValid, setIsValid] = useState(false);
    
  return (
    <div>
      <form>
        <h1>Card Number Validator</h1>
        <h4>Enter a valid card number below</h4>
        <input type="text" placeholder="Enter a valid card number"></input>
        <button id="btn">Submit</button>
      </form>
    </div>
  );
}

export default validCard;
