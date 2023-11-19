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
import { Modal, Typography } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { Router } from 'react-router-dom';
import { useRouter } from 'next/router';
import Dashboard from '@/pages/dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedItem } from '@/redux/actions';


const defaultTheme = createTheme();

const SignIn = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const handleCloseModal = () => {
    setShowModal(false);
    setError('');
  };

  const [token, setToken] = ("");

  React.useEffect(() => {
    sessionStorage.setItem('token', token)
  }, [token])
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

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

      await fetch('http://localhost:8080/api_v1/auth/login', requestOptions)
        .then(response => response.json())
        .then(data => {
          setToken(data)
          if (token == '' || token == null) {
            setShowModal(true);
            dispatch(setSelectedItem(data.roles[0]));
          } else {
            router.push('dashboard')
          }
        });

    } catch (error) {
      console.log("Error consultando las credenciales: ", error)
      setShowModal(true)
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
        <Modal
          open={showModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          rounded-xl
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: '#FFBBBB',
              boxShadow: 24,
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              width: '500px',
              borderRadius: '20px',
              p: 4,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: '0',
                width: '400px',
                height: '100px',
              }}
            >
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                marginBottom: '25px',
                height: '60px',
                paddingTop: '7px',
                margin: '0'
              }}>
                <ErrorIcon sx={{ fontSize: '50px', color: '#551818' }}></ErrorIcon>
              </Box>

              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '600px',
              }}
              >
                <Typography variant="h6" component="h2" id="modal-modal-title"
                  sx={{
                    fontcolor: '#551818'
                  }}
                >
                  Usuario o contraseña incorrectos.
                </Typography>
                <Typography variant="h6" component="h2" id="modal-modal-title"
                  sx={{
                    fontcolor: '#551818'
                  }}
                >
                  Por favor, inténtelo de nuevo.
                </Typography>
              </Box>
            </Box>

            <Button onClick={handleCloseModal} variant="contained" sx={{ borderRadius: '10px', mt: 2, bgcolor: '#995757', color: 'black', '&:hover': { backgroundColor: '#8E4141', color: 'white' } }}>
              Aceptar
            </Button>
          </Box>
        </Modal>
      </Container>
    </ThemeProvider >
  );
}

export { SignIn };
