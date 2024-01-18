'use client'

import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';


const Login = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    console.log('Button Clicked');
    router.push('/dashboard');
  };

  return (
    <Box
      sx={{
        background: '#F2F4F7',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          background: 'white',
          width: '300px',
          p: 3,
          borderRadius: 8,
          boxShadow: '0px 0px 50px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <img
          src="https://res.cloudinary.com/dy5zjyzqy/image/upload/v1703141064/ramhr/aset/stroke-log_nqk4ke.png"
          style={{
            maxWidth: '100%',
            height: 'auto',
            alignItems: 'center',
            padding: 25,
            marginBottom: '30px',
          }}
        />
        <TextField
          label="username"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleButtonClick}
          sx={{
            width: '100%',
            fontFamily: 'Montserrat, sans-serif', // Ganti dengan Montserrat atau fallback sans-serif
            fontWeight: 'bold',
            mt: 2,
            backgroundColor: 'white',
            color: 'blue',
            '&:hover': {
              backgroundColor: 'lightgray',
            },
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
