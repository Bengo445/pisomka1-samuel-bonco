import { useState } from 'react';
import { Menu, MenuItem, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

export default function NavigationMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();

  // Type the event parameter as React.MouseEvent<HTMLElement>
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget); // 'currentTarget' is of type HTMLElement
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path: string) => {
    router.push(path);  // Navigate using Next.js router
    handleClose(); // Close the menu after navigation
  };

  return (
    <div>
      <Button onClick={handleClick}>Open Menu</Button>
      
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleNavigation('/')}>Home</MenuItem>
        <MenuItem onClick={() => handleNavigation('/auth/login')}>Login</MenuItem>
        <MenuItem onClick={() => handleNavigation('/auth/logout')}>Logout</MenuItem>
      </Menu>
    </div>
  );
}