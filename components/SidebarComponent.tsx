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
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

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

const SidebarComponent = () => {
  const rol = useSelector((state: RootState) => state.selectedItem); // Variable Global
  const router = useRouter();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleTable = () => {
    router.push('auditoria-page');;
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
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
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {rol === 'administrador' && (
            <ListItem disablePadding>
              <ListItemButton> 
                <ListItemIcon>
                <AdminPanelSettingsIcon/>
                </ListItemIcon>
                <ListItemText primary="Administrador" />
              </ListItemButton>
            </ListItem> 
          )}
          {rol === 'usuario' && (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Usuario" />
              </ListItemButton>
            </ListItem> 
          )}
          {rol === 'socio' && (
            <ListItem disablePadding>
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
            <ListItem disablePadding onClick={handleTable}>
              <ListItemButton>
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary="Auditoria"/>
              </ListItemButton>
            </ListItem>
          )}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Configuración"/>
              </ListItemButton>
            </ListItem>

          {rol === 'administrador' && (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary="PQRS"/>
              </ListItemButton>
            </ListItem>
          )}
          {rol === 'usuario' && (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SendToMobileIcon />
                </ListItemIcon>
                <ListItemText primary="Solicitar Servicio" />
              </ListItemButton>
            </ListItem>
          )}
          {rol === 'socio' && (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TaxiAlertIcon />
                </ListItemIcon>
                <ListItemText primary="Aprobar/Rechazar Servicio" />
              </ListItemButton>
            </ListItem>
          )}
          {rol === 'administrador' && (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleAltIcon />
                </ListItemIcon>
                <ListItemText primary="Gestión de Socios" />
              </ListItemButton>
            </ListItem>
          )}
          {rol !== 'usuario' && (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SortIcon />
                </ListItemIcon>
                <ListItemText primary="Clasificación de Socios" />
              </ListItemButton>
            </ListItem>
          )}
          {rol === 'administrador' && (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PaidIcon />
                </ListItemIcon>
                <ListItemText primary="Gestion Financiera" />
              </ListItemButton>
            </ListItem>
          )}
          {rol === 'administrador' && (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SellIcon />
                </ListItemIcon>
                <ListItemText primary="Gestion Comercial" />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Drawer>

    </Box>
  );
}
export { SidebarComponent };

