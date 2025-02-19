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

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={() => navigate('/')}>
                <DirectionsCarIcon className='mr-2' /> Anasayfa
            </MenuItem>
            <MenuItem onClick={() => navigate('/favorite')}>
                <ShoppingCartCheckoutIcon className='mr-2' /> Favorilerim
            </MenuItem>
            <MenuItem onClick={() => navigate('/about')}>
                <InfoIcon className='mr-2' /> Hakkımızda
            </MenuItem>
            <MenuItem onClick={() => navigate('/rentalcondition')}>
                <HvacIcon className='mr-2' /> Kiralama Koşulları
            </MenuItem>
            <MenuItem onClick={() => navigate('/adminlogin')}>
                <AccountBoxIcon className='mr-2' /> Admin Girişi*
            </MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    size='large'
                    aria-label='show 5 new mails'
                    color='inherit'
                    onClick={() => navigate('/')}
                >
                    <Badge>
                        <DirectionsCarIcon />
                    </Badge>
                </IconButton>
                <h1 onClick={() => navigate('/')}>Anasayfa</h1>
            </MenuItem>
            <MenuItem>
                <IconButton size='large' color='inherit' onClick={() => navigate('/favorite')}>
                    <Badge badgeContent={number} color='error'>
                        <ShoppingCartCheckoutIcon />
                    </Badge>
                </IconButton>
                <h1 onClick={() => navigate('/favorite')}>Favorilerim</h1>
            </MenuItem>
            <MenuItem>
                <IconButton size='large' color='inherit' onClick={() => navigate('/about')}>
                    <Badge>
                        <InfoIcon />
                    </Badge>
                </IconButton>
                <h1 onClick={() => navigate('/about')}>Hakkımızda</h1>
            </MenuItem>
            <MenuItem>
                <IconButton size='large' color='inherit' onClick={() => navigate('/rentalcondition')}>
                    <Badge>
                        <HvacIcon />
                    </Badge>
                </IconButton>
                <h1 onClick={() => navigate('/rentalcondition')}>Kiralama Koşulları</h1>
            </MenuItem>
            <MenuItem>
                <IconButton size='large' color='inherit' onClick={() => navigate('/rentalcondition')}>
                    <Badge>
                        <AccountBoxIcon />
                    </Badge>
                </IconButton>
                <h1 onClick={() => navigate('/adminlogin')}>Admin Girişi*</h1>
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
                        <h1
                            onClick={() => navigate('/')}
                            className='font-bold text-xl mt-1 select-none -mb-2 ml-10 cursor-pointer'
                        >
                            TAŞDEMİR RENT A CAR
                        </h1>
                        <h4
                            onClick={() => navigate('/')}
                            className='font-light text-sm ml-24 mt-2 select-none'
                        >
                            Kolayca Kirala
                        </h4>
                    </Typography>

                    <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'center' }}>
                        <PhoneAndroidIcon /> <p className='font-bold ml-1 select-none'>+90 544 123 01 02</p>
                    </Box>

                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <div className='inline-flex mt-4 font-serif text-xl select-none'>
                            <h1 onClick={() => navigate('/')} className='pr-8 hover:text-black'>
                                Ana Sayfa
                            </h1>
                            <h1 onClick={() => navigate('/about')} className='pr-8 hover:text-black'>
                                Hakkımızda
                            </h1>
                            <h1 onClick={() => navigate('/rentalcondition')} className='mr-24 hover:text-black'>
                                Kiralama Koşulları
                            </h1>
                        </div>

                        <IconButton
                            size='large'
                            aria-label='show 17 new notifications'
                            color='inherit'
                            onClick={() => navigate('/favorite')}
                        >
                            <Badge badgeContent={number} color='error'>
                                <ShoppingCartCheckoutIcon fontSize='large' />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size='large'
                            edge='end'
                            aria-label='account of current user'
                            aria-controls={menuId}
                            aria-haspopup='true'
                            onClick={handleProfileMenuOpen}
                            color='inherit'
                        >
                            <FormatListBulletedIcon fontSize='large' />
                        </IconButton>
                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size='large'
                            aria-label='show more'
                            aria-controls={mobileMenuId}
                            aria-haspopup='true'
                            onClick={handleMobileMenuOpen}
                            color='inherit'
                        >
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

