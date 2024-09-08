import React from 'react';

const FibonacciNumber = ({ count }) => {
  const isSquare = (x) => {
    let s = Math.sqrt(x);
    return s * s === x;
  };

  const isFibonacci = (num) => {
    return isSquare(5 * num * num + 4) || isSquare(5 * num * num - 4);
  };

  return (
    <div className={`box ${isFibonacci(count) ? 'true' : 'false'}`}>
      {isFibonacci(count) ? (
        <p>{count} is a Fibonacci number</p>
      ) : (
        <p>{count} is not a Fibonacci number</p>
      )}
    </div>
  );
};

export default FibonacciNumber;
