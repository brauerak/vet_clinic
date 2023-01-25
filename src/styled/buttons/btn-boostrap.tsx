import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const BootstrapButton = styled(Button)({
  height: '80px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 30,
  padding: '12px 24px',
  border: '1px solid',
  color: 'inherit',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  borderColor: '#ffffff',
  borderRadius:'30px',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderColor: '##ffffff',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderColor: '#ffffff',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(255, 255, 255, 0)',
  },
});

export default BootstrapButton