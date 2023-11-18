import { Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';

const LandingNavBar = () => {
    const router = useRouter();

    const handleLogIn = () => {
        router.push('index');
        
    };

     const handleSignUp = () => {
        
         router.push('index');
    }; 

    return (
        <React.Fragment>
            <Toolbar
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    backgroundColor: 'rgb(90, 121, 77)',
                }}
            >
                <img
                    src={'/static/img/logo/logosimbolo-horizontal-blanco.png'}
                    width={150}
                    alt="logo"
                />
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1, color: 'white' }}
                >
                    Universidad de Antioquia
                </Typography>

                <Button
                    variant="contained"
                    color="success"
                    sx={{ margin: '0px 5px' }}
                    size="small"
                >
                    <a href='/static/docs/userManual.pdf' download="Manual.pdf"> Descargar manual de usuario</a>
                </Button>


                <Button
                    variant="contained"
                    color="success"
                    onClick={handleLogIn}
                    sx={{ margin: '0px 5px' }}
                    size="small"
                >
                    Ingresar
                </Button>
                <Button
                    variant="contained"
                    color="success"
                    onClick={handleSignUp}
                    sx={{ margin: '0px 5px' }}
                    size="small"
                >
                    Registrarse
                </Button>
            </Toolbar>
        </React.Fragment>
    );
};
export default LandingNavBar;