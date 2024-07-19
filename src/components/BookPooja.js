import React from 'react';
import { Link } from 'react-router-dom';
import './BookPooja.css';

const BookPooja = () => (
  <div className="book-pooja">
    <h1>Select a Pooja</h1>
    <Link to="/pooja-details">Participate</Link>
  </div>
);

export default BookPooja;
