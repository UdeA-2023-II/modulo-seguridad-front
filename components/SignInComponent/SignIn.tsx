import * as React from 'react';
import { useState } from 'react';
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
import Modal from '@mui/material/Modal';

const defaultTheme = createTheme();

const SignIn = () => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await fetch('https://6513538b8e505cebc2e9c6bc.mockapi.io/api/v1/users', {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const users = await response.json();

        const isValidCredentials = users.some((user) => user.mail === email && user.password === password);

        if (isValidCredentials) {
          console.log('Credenciales correctas');
          // Aquí puedes redirigir al usuario a la página principal o realizar alguna otra acción
        } else {
          setError('¡Usuario o contraseña incorrectos, Por favor, inténtelo de nuevo!');
          setShowModal(true);
        }
      } else {
        console.error('Error al obtener datos de la API');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setError('');
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
          <form onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} className="block text-center mx-auto">
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
              <Link href="/" variant="body2">
                {"¿Olvidaste tu contraseña?"}
              </Link>
            </Grid>
          </Grid>
        </Box>
        
        {/* Modal */}
        <Modal
          open={showModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h6" component="h2" id="modal-modal-title">
              Error
            </Typography>
            <Typography variant="body2" id="modal-modal-description" sx={{ mt: 2 }}>
              {error}
            </Typography>
            <Button onClick={handleCloseModal} variant="contained" color="primary" sx={{ mt: 2 }}>
              Aceptar
            </Button>
          </Box>
        </Modal>
      </Container>
    </ThemeProvider>
  );
}

export { SignIn };

