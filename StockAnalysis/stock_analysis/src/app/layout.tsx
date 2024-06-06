"use client";

import React, { ReactNode, useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, CssBaseline, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Link from 'next/link';
import { Button } from '@mui/material';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    return (
        <html lang="en">
            <head>
                {/* Burada head içeriğini ekleyebilirsiniz */}
            </head>
            <body>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />

                    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'gray' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={toggleDrawer(!drawerOpen)}
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                                Stock Dashboard
                            </Typography>
                            <Typography variant="h7" noWrap component="div" sx={{ flexGrow: 1 ,alignContent:'center'}}>
                                Dolar bazında bilanço verileri
                            </Typography>

                        </Toolbar>
                    </AppBar>

                    <Drawer
                        anchor="left"
                        open={drawerOpen}
                        onClose={toggleDrawer(false)}
                    >
                        <Box
                            sx={{ width: 250, marginTop: 8 }}
                            role="presentation"
                            onClick={toggleDrawer(false)}
                            onKeyDown={toggleDrawer(false)}
                        >
                            <List>
                                {['Top3'].map((text) => (
                                    <Link href={text === 'Top3' ? '/' : `/${text.toLowerCase()}`} key={text} passHref>
                                        <ListItem button>
                                            <ListItemText>
                                                <Button sx={{ fontFamily: 'Roboto', fontSize: '16px', color: 'black' }} variant="text">
                                                    {'Top 3 Company'}
                                                </Button>
                                            </ListItemText>
                                        </ListItem>
                                    </Link>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
                    <Box
                        component="main"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                    >
                        <Toolbar />
                        {children}
                    </Box>
                </Box>
            </body>
        </html>
    );
}

export default Layout;
