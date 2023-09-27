import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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
          <span className="block text-center mx-auto">Usuario</span> {/* Aplica 'block' y 'text-center' para centrar */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="¿Cuál es tu usuario o correo electrónico?"
            name="email"
            autoComplete="email"
          />
          <span className='text-center'>Contraseña</span> {/* Aplica 'block' y 'text-center' para centrar */}
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
            <Grid item xs={12}>
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