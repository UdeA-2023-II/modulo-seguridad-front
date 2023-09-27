import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const SignIn = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" className='content-center'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: 'solid',
            borderColor: 'white',
            borderRadius: 5,
            paddingX: 5,
            paddingY: 7,
            boxShadow: 10,
          }}
        >
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} className="block text-center mx-auto">
            <Typography
              variant='h3'
              component='h3'
              fontSize='20px'
              textAlign='center'>¿Cual es tu usuario o correo electrónico?</Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Ingresa tu usuario o email"
              name="email"
              autoComplete="email"
            />
            <Typography
              variant='h3'
              component='h3'
              fontSize='20px'
              textAlign='center'
              paddingTop='20px'>Contraseña</Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Ingresa tu contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              endIcon={<ArrowForwardIcon />}
            >
              INGRESAR
            </Button>
            <Grid container>
              <Grid item xs={12} textAlign='center'>
                <Link href="/" variant="body2">
                  {"¿Olvidaste tu contraseña?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>

  );
}

export { SignIn };