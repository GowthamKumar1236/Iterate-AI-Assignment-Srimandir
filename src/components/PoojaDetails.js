import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PoojaDetails.css';

const PoojaDetails = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');

  return (
    <div className="pooja-details">
      <h1>Pooja Details</h1>
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Link to="/checkout">
        <button className='next-button'>Next</button>
      </Link>
    </div>
  );
};

export default PoojaDetails;
