import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useAuthStore } from '../store/useAuthStore';
import CircularProgress from '@mui/material/CircularProgress';

export default function Submit() {
  const { isLoading } = useAuthStore();
  return (
    <Stack spacing={2} direction="row">
      <Button
        sx={{
          width: "100%",
          backgroundColor: "darkblue",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}
        aria-busy={isLoading}
        disabled={isLoading}
        variant="contained"
        size='large'
        type='submit'>
        {
          isLoading ? (<CircularProgress size={24}/>) : "Submit"
        }
      </Button>
    </Stack>
  );
}
