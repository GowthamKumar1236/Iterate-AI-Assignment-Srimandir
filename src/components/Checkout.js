import React from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => (
  <div className="checkout">
    <h1>Check Details and Continue</h1>
    <Link to="/confirmation">
      <button className='proceed-button'>Proceed to Book</button>
    </Link>
  </div>
);

export default Checkout;
