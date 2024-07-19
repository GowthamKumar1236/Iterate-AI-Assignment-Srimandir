import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => (
  <div className="profile">
    <h1>My Profile</h1>
    <Link to="/book-pooja">Book Pooja Now</Link>
  </div>
);

export default Profile;
