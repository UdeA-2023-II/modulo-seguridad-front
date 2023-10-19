import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const PasswordRecoveryComponent = () => {
  const router = useRouter();

  const handleBuscarClick = () => {
    router.push('recoverAccountCode');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            SSMU
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          border: 'solid',
          borderColor: 'white',
          borderRadius: 3,
          boxShadow: 10,
        }}
      >
        <form style={{ margin: '20px' }}>
          <Typography
            variant="h2"
            component="h3"
            fontSize="20px"
            textAlign="center"
            borderBottom="1px solid #ccc"
            paddingX={10}
            paddingBottom={2}
          >
            Recupera tu cuenta
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            fontSize="20px"
            paddingY="20px"
            paddingX="10px"
          >
            Ingresa tu correo electrónico para <br /> buscar tu cuenta:
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="correo@email.com"
            name="email"
            autoComplete="email"
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              marginTop: '5px',
              marginBottom: '10px',
            }}
          >
            <Button
              type="button"
              variant="contained"
              style={{ background: 'darkgrey', color: '#555' }}
            >
              CANCELAR
            </Button>
            <Button type="button" variant="contained" onClick={handleBuscarClick}>
              BUSCAR
            </Button>
          </div>
        </form>
      </Box>
    </Box>
  );
};

export { PasswordRecoveryComponent };
