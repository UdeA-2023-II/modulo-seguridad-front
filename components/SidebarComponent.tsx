import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HistoryIcon from '@mui/icons-material/History';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SettingsIcon from '@mui/icons-material/Settings';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DescriptionIcon from '@mui/icons-material/Description';
import TaxiAlertIcon from '@mui/icons-material/TaxiAlert';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PaidIcon from '@mui/icons-material/Paid';
import SellIcon from '@mui/icons-material/Sell';
import SortIcon from '@mui/icons-material/Sort';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Switch } from '@mui/material';
import TableComponent from './table-history/TableComponent';
import { Main } from 'next/document';
import { Container } from '@mui/material';

const drawerWidth = 240;

interface RootState {
  selectedItem: string;
  // ... otros estados ...
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

/* const[option, setOption] = React.useState();
 */
const content = ((option: any) => {
  
});

const SidebarComponent = ({ onSidebarClick }:any) => {
  const rol = useSelector((state: RootState) => state.selectedItem); // Variable Global
  const router = useRouter();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const styles = {
    title: {
      flexGrow: 1,
      textAlign: 'right',
    },
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };


  // Con esta Función vamos a rediriguir las opciones del dasboard (auditoria, Gestion Financiera ,Gestion Comercial.. entre las otras opciones que están)
  const handleTable = (optionName:string) => {
    router.push(`/${optionName.toLowerCase()}`);
  };


  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const handleChangeAuditoria = () => {
    
  };

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" style={styles.title}>
            SSMU
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={true}
      >
        <Divider />
        <List>
          {rol === 'administrador' && (
            <ListItem disablePadding >
              <ListItemButton> 
                <ListItemIcon>
                <AdminPanelSettingsIcon/>
                </ListItemIcon>
                <ListItemText primary="Administrador" />
              </ListItemButton>
            </ListItem> 
          )}
          {rol === 'usuario' && (
            <ListItem disablePadding >
              <ListItemButton>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Usuario" />
              </ListItemButton>
            </ListItem> 
          )}
          {rol === 'socio' && (
            <ListItem disablePadding >
              <ListItemButton>
                <ListItemIcon>
                  <TimeToLeaveIcon />
                </ListItemIcon>
                <ListItemText primary="Socio" />
              </ListItemButton>
            </ListItem> 
          )}
        </List>
        <Divider />
        <List>
          {rol === 'administrador' && (
            <ListItem disablePadding onClick={() => handleTable("auditoria")}>

              <ListItemButton>
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary="Auditoria"/>
              </ListItemButton>
            </ListItem>
          )}
            <ListItem disablePadding onClick={() => handleTable("configuracion")}>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Configuración"/>
              </ListItemButton>
            </ListItem>

          {rol === 'administrador' && (
            <ListItem disablePadding onClick={() => handleTable("pqr")}>
              <ListItemButton>
                <ListItemIcon>
                <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary="PQRS"/>
              </ListItemButton>
            </ListItem>
          )}
          {rol === 'usuario' && (
            <ListItem disablePadding onClick={() => handleTable("servicio")}>
              <ListItemButton>
                <ListItemIcon>
                  <SendToMobileIcon />
                </ListItemIcon>
                <ListItemText primary="Solicitar Servicio" />
              </ListItemButton>
            </ListItem>
          )}
          {rol === 'socio' && (
            <ListItem disablePadding onClick={() => handleTable("validar")}>
              <ListItemButton>
                <ListItemIcon>
                  <TaxiAlertIcon />
                </ListItemIcon>
                <ListItemText primary="Aprobar/Rechazar Servicio" />
              </ListItemButton>
            </ListItem>
          )}
          {rol === 'administrador' && (
            <ListItem disablePadding onClick={() => handleTable("socios")}>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleAltIcon />
                </ListItemIcon>
                <ListItemText primary="Gestión de Socios" />
              </ListItemButton>
            </ListItem>
          )}
          {rol !== 'usuario' && (
            <ListItem disablePadding onClick={() => handleTable("clasificacion")}>
              <ListItemButton>
                <ListItemIcon>
                  <SortIcon />
                </ListItemIcon>
                <ListItemText primary="Clasificación de Socios" />
              </ListItemButton>
            </ListItem>
          )}
          {rol === 'administrador' && (
            <ListItem disablePadding onClick={() => handleTable("financiera")}>
              <ListItemButton>
                <ListItemIcon>
                  <PaidIcon />
                </ListItemIcon>
                <ListItemText primary="Gestion Financiera" />
              </ListItemButton>
            </ListItem>
          )}
          {rol === 'administrador' && (
            <ListItem disablePadding onClick={() => handleTable("comercial")}>
              <ListItemButton>
                <ListItemIcon>
                  <SellIcon />
                </ListItemIcon>
                <ListItemText primary="Gestion Comercial" />
              </ListItemButton>
            </ListItem>
          )}
          <ListItem disablePadding onClick={() => handleTable("")}>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon/>
              </ListItemIcon>
              <ListItemText primary="logout" />
            </ListItemButton>
          </ListItem>  
        </List>
      </Drawer>
    </Box>
    </>
  );
}
export { SidebarComponent };

