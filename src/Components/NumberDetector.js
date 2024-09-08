import React from 'react';
import EvenNumber from './EvenNumber';
import OddNumber from './OddNumber';
import PrimeNumber from './PrimeNumber';
import FibonacciNumber from './FibonacciNumber';

const NumberDetector = ({ count, setCount, increment, decrement, clear, handleLogout }) => {
  return (
    <div className="NumberDetectorContainer">
      <div className="NumberDetector">
        <h1>Number Detector: {count}</h1>
        <input type="number" value={count} onChange={(e) => setCount(Number(e.target.value))} />
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={clear}>Clear</button>
      </div>

      <div className="CornerBox TopLeft">
        <PrimeNumber count={count} />
      </div>
      <div className="CornerBox TopRight">
        <FibonacciNumber count={count} />
      </div>
      <div className="CornerBox BottomLeft">
        <EvenNumber count={count} />
      </div>
      <div className="CornerBox BottomRight">
        <OddNumber count={count} />
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default NumberDetector;
