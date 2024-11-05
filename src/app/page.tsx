// src/app/page.tsx

"use client"

import { useSession } from 'next-auth/react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Home() {
  const { data: session, status } = useSession(); // Get session data and status

  return (
    <Container>
      <Typography>Home</Typography>
        {!session ? (
          <Typography>- Nie si prihlásený, prihlás sa</Typography> // Show Login if not logged in
        ) : (
          <Typography>- Si prihlásený</Typography> // Show Logout if logged in
        )}
    </Container>
  );

}