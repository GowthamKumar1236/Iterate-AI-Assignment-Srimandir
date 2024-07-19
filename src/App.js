import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Profile from './components/Profile';
import BookPooja from './components/BookPooja';
import PoojaDetails from './components/PoojaDetails';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirmation';

const App = () => (
  <Router>
    <Routes>
      {/* Route for the home page */}
      <Route exact path="/" element={<HomePage />} />
      {/* Route for the profile page */}
      <Route path="/profile" element={<Profile />} />
      {/* Route for the pooja booking page */}
      <Route path="/book-pooja" element={<BookPooja />} />
      {/* Route for the pooja details form */}
      <Route path="/pooja-details" element={<PoojaDetails />} />
      {/* Route for the checkout page */}
      <Route path="/checkout" element={<Checkout />} />
        {/* Route for the booking confirmation page */}
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  </Router>
);

export default App;
