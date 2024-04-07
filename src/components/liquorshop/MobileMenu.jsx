import React from 'react';
import { Drawer, Button } from '@mantine/core';
import { Cross2Icon } from '@modulz/radix-icons'; // Import Cross2Icon

const MobileMenu = ({ onClose }) => {
  return (
    <Drawer
      opened
      position="left"
      padding="xl"
      size="md"
      shadow="lg"
      onClose={onClose}
    //   title={
    //     <Button variant="link" onClick={onClose}>
    //       {/* <Cross2Icon />  */}
    //     </Button>
    //   }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <a href="#home" onClick={onClose}>
          Home
        </a>
        <a href="#about" onClick={onClose}>
          About
        </a>
        <a href="#services" onClick={onClose}>
          Services
        </a>
        <a href="#contact" onClick={onClose}>
          Contact
        </a>
      </div>
    </Drawer>
  );
};

export default MobileMenu;
