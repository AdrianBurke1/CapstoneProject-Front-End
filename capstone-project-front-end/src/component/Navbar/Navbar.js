// Navbar.js
import './Navbar.css';
import { Link } from 'react-router-dom';
import MapIcon from '@mui/icons-material/Map';
import LoginIcon from '@mui/icons-material/Login';
import React, { useState, useEffect } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import CottageIcon from '@mui/icons-material/Cottage';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function Navbar({ showNav }) {
  return (
    <div className={`navbar ${showNav ? 'active' : ''}`}>
  <li>
    <Link to='/feed'>
      Feed
    </Link>
  </li>
  <li>
    <Link to='/roadmap'>
      Roadmap
    </Link>
  </li>
  <li>
    <Link to='/prompts'>
      Prompts
    </Link>
  </li>
    </div>
  );
}


export default Navbar;
