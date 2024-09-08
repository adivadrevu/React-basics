import React from 'react';

const EvenNumber = ({ count }) => {
  const isEven = count % 2 === 0;
  return (
    <div className={`box ${isEven ? 'true' : 'false'}`}>
      {isEven ? (
        <p>{count} is an even number</p>
      ) : (
        <p>{count} is not an even number</p>
      )}
    </div>
  );
};

export default EvenNumber;
