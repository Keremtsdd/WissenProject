import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import InfoIcon from '@mui/icons-material/Info';
import HvacIcon from '@mui/icons-material/Hvac';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default function Header() {
    const navigate = useNavigate();
    const { number } = useSelector((state) => state.favorite);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (path) => {
        navigate(path);
        handleMenuClose();
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={() => handleMenuItemClick('/')}>
                <DirectionsCarIcon className='mr-2' /> Anasayfa
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/favorite')}>
                <ShoppingCartCheckoutIcon className='mr-2' /> Favorilerim
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/about')}>
                <InfoIcon className='mr-2' /> Hakkımızda
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/rentalcondition')}>
                <HvacIcon className='mr-2' /> Kiralama Koşulları
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/adminlogin')}>
                <AccountBoxIcon className='mr-2' /> Admin Girişi*
            </MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={() => handleMenuItemClick('/')}>
                <IconButton size='large' color='inherit'>
                    <Badge>
                        <DirectionsCarIcon />
                    </Badge>
                </IconButton>
                <h1>Anasayfa</h1>
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/favorite')}>
                <IconButton size='large' color='inherit'>
                    <Badge badgeContent={number} color='error'>
                        <ShoppingCartCheckoutIcon />
                    </Badge>
                </IconButton>
                <h1>Favorilerim</h1>
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/about')}>
                <IconButton size='large' color='inherit'>
                    <Badge>
                        <InfoIcon />
                    </Badge>
                </IconButton>
                <h1>Hakkımızda</h1>
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/rentalcondition')}>
                <IconButton size='large' color='inherit'>
                    <Badge>
                        <HvacIcon />
                    </Badge>
                </IconButton>
                <h1>Kiralama Koşulları</h1>
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/adminlogin')}>
                <IconButton size='large' color='inherit'>
                    <Badge>
                        <AccountBoxIcon />
                    </Badge>
                </IconButton>
                <h1>Admin Girişi*</h1>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' color='success'>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='open drawer'
                        sx={{ mr: 2 }}
                        onClick={() => navigate('/')}
                    >
                        <DirectionsCarFilledOutlinedIcon fontSize='large' />
                    </IconButton>
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        <h1 className='font-bold text-xl mt-1 select-none -mb-2 ml-10 cursor-pointer' onClick={() => navigate('/')}>
                            TAŞDEMİR RENT A CAR
                        </h1>
                        <h4 className='font-light text-sm ml-24 mt-2 select-none' onClick={() => navigate('/')}>
                            Kolayca Kirala
                        </h4>
                    </Typography>

                    <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'center' }}>
                        <PhoneAndroidIcon /> <p className='font-bold ml-1 select-none'>+90 544 123 01 02</p>
                    </Box>

                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size='large' color='inherit' onClick={() => navigate('/favorite')}>
                            <Badge badgeContent={number} color='error'>
                                <ShoppingCartCheckoutIcon fontSize='large' />
                            </Badge>
                        </IconButton>
                        <IconButton size='large' edge='end' color='inherit' onClick={handleProfileMenuOpen}>
                            <FormatListBulletedIcon fontSize='large' />
                        </IconButton>
                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size='large' color='inherit' onClick={handleMobileMenuOpen}>
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
