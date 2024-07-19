import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => (
  <div className="homepage">
    <div className='alignment'>
        <img src='https://res.cloudinary.com/dzxsnrerx/image/upload/v1721372745/images_ai8zmu.jpg' className='logo'/>
        <h1 className='heading'>Sri Mandir</h1>
    </div>
    <div>    
        <Link to="/profile">Go to Profile</Link>
    </div>
  </div>

);

export default HomePage;
