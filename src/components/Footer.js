import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/ZenGym-Logo1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px" >
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} pos/>
    </Stack>
    <Typography variant="h6" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="20px" textAlign="center" pb="40px">Made by Dev's Den</Typography>
  </Box>
);

export default Footer;