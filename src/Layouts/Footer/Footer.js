import { Box } from '@mui/material';
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
const Footer = () => {
  return (
    <Box
      component='footer'
      style={{
        position: 'fixed',
        left: '0',
        bottom: '0',
        background: '#2c3e50',
        width: '100%',
        padding: '8px 0',
      }}
    >
      <Container maxWidth='lg'>
        <Box>
          <Typography variant='body2' color='white' align='center'>
            {'تمامی حقوق مادی و معنوی متعلق به '}
            <Link color='inherit' href='https://liyonco.com/'>
              لیان
            </Link>{' '}
            {new Date().getFullYear()}
            {'میباشد.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
