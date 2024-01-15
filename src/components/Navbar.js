import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/muscle-white.png';

const Navbar = () => {
  const handleExercisesClick = () => {
    // If on the "Membership" page, redirect to home ("/") and scroll to the "exercises" section
    if (window.location.pathname === '/membership') {
      window.location.href = '/';
    }
  };

  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
        <ScrollLink
          to="exercises"
          spy={true}
          smooth={true}
          duration={500}
          style={{ textDecoration: 'none', color: '#3A1212', cursor: 'pointer' }}
          onClick={handleExercisesClick}
        >
          Exercises
        </ScrollLink>
        <Link to="/membership" style={{ textDecoration: 'none', color: '#3A1212' }}>Pricing</Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;