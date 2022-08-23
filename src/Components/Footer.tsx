import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary">
//       {'Copyright © '}
//       <Link color="inherit" href="www.google.com">
//         Our Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Fragma Data Systems
          </Typography>
          <Typography variant="body1">
            Vijayawada, MG road, Andhrapradesh-520007.
          </Typography>
          {/* <Copyright /> */}
        </Container>
      </Box>
    </Box>
  );
}