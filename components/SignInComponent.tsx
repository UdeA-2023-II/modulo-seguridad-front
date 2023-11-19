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



const defaultTheme = createTheme();

const SignIn = () => {

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const user = {
      password: form.password.value,
      userName: form.email.value,
    }


    try {


      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      };

      console.log("Credenciales enviadas a Backend: ", requestOptions.body)

      await fetch('https://localhost:8080/api_v1/auth', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log("Token de inicio de sesión: ", data)
        });

    } catch (error) {
      console.log("Error consultando las credenciales: ", error)
    }
  }
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
          <form onSubmit={handleSubmit} noValidate className="block text-center mx-auto">
            <Typography
              variant='h3'
              component='h3'
              fontSize='20px'
              textAlign='center'>¿Cuál es tu usuario o correo electrónico?</Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="¿Cuál es tu usuario o correo electrónico?"
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
          </form>
          <Grid container>
            <Grid item xs={12}>
              <Link href="RecoverAccountP">
                {"¿Olvidaste tu contraseña?"}
              </Link>
            </Grid>
          </Grid>
        </Box>

      </Container>
    </ThemeProvider >
  );
}

export { SignIn };
