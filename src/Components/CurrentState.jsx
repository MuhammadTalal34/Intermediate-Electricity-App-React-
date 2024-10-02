import React from 'react';

const CurrentState = ({ electricityStatus, city }) => {
  return (
    <div className="card">
      <h2>Electricity Status in {city}</h2>
      <div className={`status ${electricityStatus ? '' : 'off'}`}>
        {electricityStatus ? 'Lights On' : 'Lights Off'}
      </div>
    </div>
  );
};

export default CurrentState;
