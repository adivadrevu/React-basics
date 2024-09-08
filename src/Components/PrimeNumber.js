import React from 'react';

const PrimeNumber = ({ count }) => {
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return (
    <div className={`box ${isPrime(count) ? 'true' : 'false'}`}>
      {isPrime(count) ? (
        <p>{count} is a prime number</p>
      ) : (
        <p>{count} is not a prime number</p>
      )}
    </div>
  );
};

export default PrimeNumber;
