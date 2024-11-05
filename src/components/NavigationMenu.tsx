'use client';  // Ensures this is a client-side component

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function NavigationMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isClient, setIsClient] = React.useState(false); // state to track client-side rendering
  const { push } = useRouter(); // useRouter hook for navigation
  const { data: session } = useSession(); // Get session data from NextAuth

  // Check if we're on the client side (window is only available on client)
  React.useEffect(() => {
    // This will run only in the client side after the component mounts
    setIsClient(true);
  }, []);

  // Return null until we are sure that the component has mounted on the client side
  if (!isClient) {
    return null;
  }

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle navigation when a menu item is clicked
  const handleNavigate = (path: string) => {
    push(path); // Navigate to the provided path
    handleClose(); // Close the menu after navigation
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleNavigate('/')}>Home</MenuItem> {/* Navigate to home */}
        {!session ? (
          <MenuItem onClick={() => handleNavigate('/auth/login')}>Login</MenuItem> // Show Login if not logged in
        ) : (
          <MenuItem onClick={() => handleNavigate('/auth/logout')}>Logout</MenuItem> // Show Logout if logged in
        )}
      </Menu>
    </div>
  );
}
