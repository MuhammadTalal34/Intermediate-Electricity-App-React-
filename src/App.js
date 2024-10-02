import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CurrentState from './Components/CurrentState';
import Home from './Components/Home';
import './App.css'; // Import the new CSS file

const App = () => {
  let electricityLahore = true;
  let electricityRahimYarKhan = false;

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lahore">Lahore Electricity</Link>
          </li>
          <li>
            <Link to="/rahim-yar-khan">Rahim Yar Khan Electricity</Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/lahore"
            element={<CurrentState electricityStatus={electricityLahore} city="Lahore" />}
          />
          <Route
            path="/rahim-yar-khan"
            element={<CurrentState electricityStatus={electricityRahimYarKhan} city="Rahim Yar Khan" />}
          />
        </Routes>
      </div>

      <footer>
        <p>&copy; 2024 Electricity Status App. All Rights Reserved.</p>
      </footer>
    </Router>
  );
};

export default App;
