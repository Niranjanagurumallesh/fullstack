import React from 'react';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', marginTop: '20px' }}>
      <Typography variant="body1" align="center">
        © {new Date().getFullYear()} GiftVibes. All rights reserved.
      </Typography>
    </footer>
  );
}

export default Footer;
