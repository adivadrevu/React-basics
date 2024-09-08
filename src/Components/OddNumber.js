import React from 'react';

const OddNumber = ({ count }) => {
  const isOdd = count % 2 !== 0;
  return (
    <div className={`box ${isOdd ? 'true' : 'false'}`}>
      {isOdd ? (
        <p>{count} is an odd number</p>
      ) : (
        <p>{count} is not an odd number</p>
      )}
    </div>
  );
};

export default OddNumber;
