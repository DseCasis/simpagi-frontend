import {AppBar, CssBaseline, IconButton, Toolbar, Typography, Drawer, Paper, Divider, Container} from "@mui/material";
import {Menu as MenuIcon} from '@mui/icons-material';
import React, {useState} from "react";
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
import Footer from "@/app/components/Footer";

const Layout = ({ children }) => {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <CssBaseline />
            <AppBar position="absolute" color="primary" enableColorOnDark>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{ flexGrow: 1 }}>
                        Simpagi App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
                <Paper style={{ width: 240}} elevation={0}>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ padding: 20, display: 'flex', alignItems: 'center' }}>
                            <IconButton edge="start" color="inherit" onClick={handleDrawerClose}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                                Simpagi App
                            </Typography>
                        </div>

                        <Divider />

                        <List className="flex justify-between flex-col" style={{ flexGrow: 1 }}>
                            <div className="justify-content-center">
                                <img src="/logo.png" alt="..."
                                     style={{height: 90, marginLeft: 50, marginRight: 'auto'}}/>
                                <Typography className="p-2 text-center" gutterBottom>
                                    Sistema Simplificado de Gestión de la Información
                                </Typography>
                            </div>

                            <Divider/>

                            <ListItem button component={Link} to="/dashboard">
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="DashBoard" />
                            </ListItem>
                            <ListItem button component={Link} to="/personal">
                                <ListItemIcon>
                                    <PeopleIcon />
                                </ListItemIcon>
                                <ListItemText primary="Personal" />
                            </ListItem>
                            <ListItem button onClick={() => { /* Handle click event */ }}>
                                <ListItemIcon>
                                    <AccountBoxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Perfil" />
                            </ListItem>

                            <Divider />

                        </List>

                        {/* Mover "Cerrar Sesión" al final */}
                        <List>
                            <ListItem button onClick={() => { /* Handle click event */ }}>
                                <ListItemIcon>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText primary="Cerrar Sesión" />
                            </ListItem>
                        </List>
                    </div>
                </Paper>
            </Drawer>


            <main style={{ paddingTop: '64px' }}>
                {children}
            </main>
            <footer style={{ bottom: 0, position: 'relative', width: '100%' }}>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default Layout;
