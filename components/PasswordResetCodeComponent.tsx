"use client"
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
import { useSelector } from 'react-redux';

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
}));

interface RootState {
    anotherVariable: string;
    // ... otros estados ...
}



const PasswordResetCode = () => {

    const handleChangeCodigo = (event: any) => {
        setInputValue(event.target.value)
    }

    const [inputValue, setInputValue] = React.useState('');

    const anotherVariable = useSelector((state: RootState) => state.anotherVariable);
    const router = useRouter();

    const handleContinuarClick = () => {

        if (anotherVariable == inputValue) {
            console.log("Valor ingresado", inputValue);
            console.log("Valor enviado al correo", anotherVariable);
            router.push('recover-password-page')
        }
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

            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                border: 'solid',
                borderColor: 'white',
                borderRadius: 3,
                boxShadow: 10,
            }}>
                <form style={{ margin: "20px" }}>
                    <Typography variant='h2'
                        component='h3'
                        fontSize='20px'
                        textAlign='center'
                        borderBottom='1px solid #ccc'
                        paddingX={10}
                        paddingBottom={2}
                    >Ingresa el código de seguridad</Typography>
                    <Typography
                        variant='h3'
                        component='h3'
                        fontSize='20px'
                        paddingY='20px'
                        paddingX='10px'>
                        Hemos enviado un código de <br /> seguridad a tu correo, ingrésalo por <br /> favor.</Typography>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="codigo"
                        label="Codigo"
                        name="codigo"
                        onChange={handleChangeCodigo}
                    />
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px', marginBottom: '5px' }}>
                        <Button type="submit" variant="contained" style={{ background: 'darkgrey', color: '#555' }}>
                            CANCELAR
                        </Button>
                        <Button variant="contained" onClick={handleContinuarClick}>
                            CONTINUAR
                        </Button>
                    </div>
                </form>
            </Box>
        </Box>
    );
}
export { PasswordResetCode };