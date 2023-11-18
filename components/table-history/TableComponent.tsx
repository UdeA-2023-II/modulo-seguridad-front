import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import 'tailwindcss/tailwind.css';
import axios from 'axios';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Numero', width: 90 },
    {
        field: 'userName',
        headerName: 'Usuario',
        width: 200,
        editable: true,
    },
    {
        field: 'dateEntry',
        headerName: 'Fecha de Ingreso',
        width: 150,
        editable: true,
    },
    {
        field: 'duration',
        headerName: 'Tiempo(minutos) ',
        type: 'number',
        width: 110,
        editable: true,
    },
    
];

/* const rows = [
    { id: 1, userName: 'Snow', dateEntry: 'Jon', duration: 35 },
    { id: 2, userName: 'Lannister', dateEntry: 'Cersei', duration: 42 },
    { id: 3, userName: 'Lannister', dateEntry: 'Jaime', duration: 45 },
    { id: 4, userName: 'Stark', dateEntry: 'Arya', duration: 16 },
    { id: 5, userName: 'Targaryen', dateEntry: 'Daenerys', duration: null },
    { id: 6, userName: 'Melisandre', dateEntry: null, duration: 150 },
    { id: 7, userName: 'Clifford', dateEntry: 'Ferrara', duration: 44 },
    { id: 8, userName: 'Frances', dateEntry: 'Rossini', duration: 36 },
    { id: 9, userName: 'Roxie', dateEntry: 'Harvey', duration: 65 },
]; */

export default function DataGridDemo() {

    const [sesiones, setSesiones] = React.useState([])

    React.useEffect(() =>{
        const response = axios.get('https://6558d12ae93ca47020a9c40a.mockapi.io/api/v1/users')
        .then((response) =>{
            
            setSesiones(response.data)
            console.log(response.data)
        }) 
    }, [])

    return (
        <Box className='' 
            sx={{ height: 400, width: '60%', margin: 'auto' }}>
            <Typography className='text-2xl mt-4 mb-4'>
                A continuación el usuario con rol administrador podra visualizar las reservas actuales hasta el momento, dada por la siguiente tabla que contienne la estructura de datos, planetada en el formulario de realizar reserva:
            </Typography>
            <DataGrid  
                rows={sesiones}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}

