import React from "react";
import { Container, Typography, Box, Button } from "@material-ui/core";
import Link from 'next/link';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Stream-app first page
        </Typography>
        <Link href="/about">
          <Button variant="contained" color="primary">Go to About</Button>
        </Link>
      </Box>
    </Container>
  )
};
