// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/books" className='nav-link'>View Books</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;







