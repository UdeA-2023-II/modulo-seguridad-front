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
import ErrorIcon from '@mui/icons-material/Error';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedItem } from '../redux/actions';


const defaultTheme = createTheme();
interface RootState {
  selectedItem: string; // Asegúrate de que el tipo coincida con el estado en tu aplicación
  // ... otros estados ...
}

const SignIn = () => {
  const selectedItem = useSelector((state:RootState) => state.selectedItem); // Accede al estado global
  const dispatch = useDispatch();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const [role, setRole] = useState('');

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
  
        const isValidCredentials = users.some((user:any) => {
          if (user.mail === email && user.password === password) {
            // Guarda el rol en el estado
            setRole(user.role);
            dispatch(setSelectedItem(user.role));
            console.log('Credenciales correctas');
            console.log('Rol del usuario:', user.role);
            router.push('dashboard');
            // Aquí puedes redirigir al usuario a la página principal o realizar alguna otra acción
            return true;
          }
          return false;
        });

        if (!isValidCredentials) {
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

        {/* Elemento para mostrar el rol del usuario */}
        {role && (
          <Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
          </Box>
        )}

        {/* Modal */}
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
