import React, { useState, useEffect } from 'react';
import { Container, Button } from '@mantine/core';
import { MdClose } from 'react-icons/md';
import './navbar.css'

import MobileMenu from '../../components/liquorshop/MobileMenu';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bp, setBp] = useState(window.matchMedia('(max-width: 600px)').matches ? 'xs' : 'lg');

  useEffect(() => {
    const handleResize = () => {
      setBp(window.matchMedia('(max-width: 600px)').matches ? 'xs' : 'lg');
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array so it only runs once on component mount

  return (
    <Container>
      <div className="navbar">
        <img 
          src='/img/logo.jpg'
          alt="Logo"
          height={50}
          width={50}
        />
        {bp === 'xs' ? (
          <Button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            variant="link"
            leftIcon={<MdClose />}
          >
            Menu
          </Button>
        ) : (
          <div className="navbar-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </div>
      {bp === 'xs' && mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} />}
    </Container>
  );
};

export default Navbar;
