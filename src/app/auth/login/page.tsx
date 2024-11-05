'use client'; // This page should be client-side

import React from 'react';
import { signIn } from 'next-auth/react';
import { Button, Container, Typography, Box } from '@mui/material';

export default function LoginPage() {
  const handleGoogleLogin = () => {
    // Trigger Google login via NextAuth
    signIn('google');
  };

  return (
    <Container>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGoogleLogin}
          fullWidth
        >
          Login with Google
        </Button>
    </Container>
  );
}
