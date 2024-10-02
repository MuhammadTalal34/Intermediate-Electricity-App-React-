import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="card">
      <h2>Welcome to the Electricity Status App</h2>
      <p>Select a city to view the electricity status:</p>
      <div>
        <Link to="/lahore" className="btn">Lahore</Link>
        <Link to="/rahim-yar-khan" className="btn">Rahim Yar Khan</Link>
      </div>
    </div>
  );
};

export default Home;
