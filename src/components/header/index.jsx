import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import { Button } from 'antd';

const HeaderComponent = () => {
  const navigate = useNavigate();

  const handleNavigateToLogin = () => {
    navigate('/login');
  }

  return <ul className='nav-header'>
    <li>
      <Link to={'/home'}>Home</Link>
    </li>
    <li>
      <Link to={'/about'}>About</Link>
    </li>
    <li>
      <Link to={'/contact'}>Contact</Link>
    </li>
    <li>
      <Button
        type='primary'
        onClick={handleNavigateToLogin}
      >
        Login
      </Button>
    </li>
  </ul>
}

export default HeaderComponent
