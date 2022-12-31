import * as React from 'react';
import logo from '../logo.jpg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { BiMenu } from 'react-icons/bi';
import { SlClose } from 'react-icons/sl';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate, Outlet } from 'react-router-dom';
import { NavItemHome } from './Home';
import { NavItemArtists } from './Artists';
import { NavItemShows } from './Shows';
import { NavItemVisit } from './Visit';
import Insta, { NavItemInsta } from './Insta';
import { BsInstagram } from 'react-icons/bs';

const pages: Array<string> = [NavItemHome, NavItemArtists, NavItemShows, NavItemVisit];

const getRouteFromPage = (page: string) => {
    switch (page) {
        case NavItemHome:
            return '/';
        case NavItemArtists:
            return '/artists';
        case NavItemShows:
            return '/shows';
        case NavItemVisit:
            return '/visit';
        case NavItemInsta:
            return '/instagram';
        default:
            return '/';
    }
};

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const navigateTo = useNavigate();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const getInstaMenuItem = () => (
        <MenuItem
            key={'insta'}
            onClick={() => {
                navigateTo(getRouteFromPage(NavItemInsta));
                handleCloseNavMenu();
            }}
        >
            <BsInstagram />
        </MenuItem>
    );

    return (
        <Box>
            <AppBar position="static" color={'transparent'}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <ButtonBase
                            onClick={() => navigateTo('/')}
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' }
                            }}
                        >
                            <img width={'200'} src={logo} />
                        </ButtonBase>
                        <Box
                            sx={{ flexGrow: 1, mr: 6, display: { xs: 'none', md: 'flex' } }}
                            alignItems={'center'}
                            justifyContent={'end'}
                        >
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={() => {
                                        navigateTo(getRouteFromPage(page));
                                        handleCloseNavMenu();
                                    }}
                                    sx={{ fontWeight: 'bold', m: 2, color: 'black', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                            {getInstaMenuItem()}
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                {Boolean(anchorElNav) ? <SlClose /> : <BiMenu />}
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem
                                        key={page}
                                        onClick={() => {
                                            navigateTo(getRouteFromPage(page));
                                            handleCloseNavMenu();
                                        }}
                                    >
                                        <Typography color={'black'} textAlign="center" sx={{ fontWeight: 'bold' }}>{page}</Typography>
                                    </MenuItem>
                                ))}
                                {getInstaMenuItem()}
                            </Menu>
                        </Box>
                        <ButtonBase
                            onClick={() => navigateTo('/')}
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' }
                            }}
                        >
                            <img width={'200'} src={logo} />
                        </ButtonBase>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box sx={{ m: 2 }}>
                <Outlet />
            </Box>
            {/* FOOTER */}
            {/* TODO: FOOTER - move to separate component? */}
            <Box
                justifyContent={'space-between'}
                alignItems={'center'}
                sx={{ p: 2, display: 'flex', flexDirection: 'row', background: 'lightgray' }}
            >
                <div dangerouslySetInnerHTML={{ __html: '&copy; the Front 2023' }}></div>
                <Button
                    onClick={() => window.open('https://www.instagram.com/gallerythefront')}
                >
                    <BsInstagram />
                </Button>
            </Box>
        </Box >
    );
}

export default Navbar;
