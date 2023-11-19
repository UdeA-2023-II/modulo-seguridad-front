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
        width: 220,
        editable: true,
    },
    {
        field: 'dateEntry',
        headerName: 'Fecha de Ingreso',
        width: 220,
        editable: true,
    },
    {
        field: 'duration',
        headerName: 'Tiempo(minutos) ',
        type: 'number',
        width: 160,
        editable: true,
    },
    
];


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
            sx={{ height:'auto' , width: '70%', margin: 'auto' }}>
            <Typography className='text-2xl mt-4 mb-4'>
                A continuación el usuario con rol administrador podra visualizar las sesiones registradas:
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

