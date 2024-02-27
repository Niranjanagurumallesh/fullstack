// // //import * as React from 'react';
// // import AppBar from '@mui/material/AppBar';
// // import Box from '@mui/material/Box';
// // import Toolbar from '@mui/material/Toolbar';
// // import IconButton from '@mui/material/IconButton';
// // import Typography from '@mui/material/Typography';
// // import Menu from '@mui/material/Menu';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import Container from '@mui/material/Container';
// // import Avatar from '@mui/material/Avatar';
// // import Button from '@mui/material/Button';
// // import Tooltip from '@mui/material/Tooltip';
// // import MenuItem from '@mui/material/MenuItem';
// // import AdbIcon from '@mui/icons-material/Adb';
// // import logo from "../../assets/images/asset1.png"
// // const pages = ['Home', 'Products','Price','New Releases','Offers','Cart','About'];
// // const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// // function ResponsiveAppBar() {
// //   const [anchorElNav, setAnchorElNav] = React.useState(null);
// //   const [anchorElUser, setAnchorElUser] = React.useState(null);

// //   const handleOpenNavMenu = (event) => {
// //     setAnchorElNav(event.currentTarget);
// //   };
// //   const handleOpenUserMenu = (event) => {
// //     setAnchorElUser(event.currentTarget);
// //   };

// //   const handleCloseNavMenu = () => {
// //     setAnchorElNav(null);
// //   };

// //   const handleCloseUserMenu = () => {
// //     setAnchorElUser(null);
// //   };

// //   return (
// //     <AppBar position="static">
// //       <Container maxWidth="xl">
// //         <Toolbar disableGutters>
// //         <img src={logo} width="20px" height="20px"/>          
// //           <Typography
// //             variant="h6"
// //             noWrap
// //             component="a"
// //             href="#app-bar-with-responsive-menu"
// //             sx={{
// //               mr: 2,
// //               display: { xs: 'none', md: 'flex' },
// //               fontFamily: 'monospace',
// //               fontWeight: 700,
// //               letterSpacing: '.3rem',
// //               color: 'inherit',
// //               textDecoration: 'none',
// //             }}
// //           >
            
// //           </Typography>

// //           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
// //             <IconButton
// //               size="large"
// //               aria-label="account of current user"
// //               aria-controls="menu-appbar"
// //               aria-haspopup="true"
// //               onClick={handleOpenNavMenu}
// //               color="inherit"
// //             >
// //               <MenuIcon />
// //             </IconButton>
// //             <Menu
// //               id="menu-appbar"
// //               anchorEl={anchorElNav}
// //               anchorOrigin={{
// //                 vertical: 'bottom',
// //                 horizontal: 'left',
// //               }}
// //               keepMounted
// //               transformOrigin={{
// //                 vertical: 'top',
// //                 horizontal: 'left',
// //               }}
// //               open={Boolean(anchorElNav)}
// //               onClose={handleCloseNavMenu}
// //               sx={{
// //                 display: { xs: 'block', md: 'none' },
// //               }}
// //             >
// //               {pages.map((page) => (
// //                 <MenuItem key={page} onClick={handleCloseNavMenu}>
// //                   <Typography textAlign="center">{page}</Typography>
// //                 </MenuItem>
// //               ))}
// //             </Menu>
// //           </Box>
// //           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
// //           <Typography
// //             variant="h5"
// //             noWrap
// //             component="a"
// //             href="#app-bar-with-responsive-menu"
// //             sx={{
// //               mr: 2,
// //               display: { xs: 'flex', md: 'none' },
// //               flexGrow: 1,
// //               fontFamily: 'monospace',
// //               fontWeight: 700,
// //               letterSpacing: '.3rem',
// //               color: 'inherit',
// //               textDecoration: 'none',
// //             }}
// //           >
// //             LOGO
// //           </Typography>
// //           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
// //             {pages.map((page) => (
// //               <Button
// //                 key={page}
// //                 onClick={handleCloseNavMenu}
// //                 sx={{ my: 2, color: 'white', display: 'block' }}
// //               >
// //                 {page}
// //               </Button>
// //             ))}
// //           </Box>

// //           <Box sx={{ flexGrow: 0 }}>
// //             <Tooltip title="Open settings">
// //               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
// //                 settings
// //               </IconButton>
// //             </Tooltip>
// //             <Menu
// //               sx={{ mt: '45px' }}
// //               id="menu-appbar"
// //               anchorEl={anchorElUser}
// //               anchorOrigin={{
// //                 vertical: 'top',
// //                 horizontal: 'right',
// //               }}
// //               keepMounted
// //               transformOrigin={{
// //                 vertical: 'top',
// //                 horizontal: 'right',
// //               }}
// //               open={Boolean(anchorElUser)}
// //               onClose={handleCloseUserMenu}
// //             >
// //               {settings.map((setting) => (
// //                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
// //                   <Typography textAlign="center">{setting}</Typography>
// //                 </MenuItem>
// //               ))}
// //             </Menu>
// //           </Box>
// //         </Toolbar>
// //       </Container>
// //     </AppBar>
// //   );
// // }
// // export default ResponsiveAppBar;
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import logo from "../../assets/images/asset1.png"
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// import { Link } from 'react-router-dom'; // Import Link from React Router

// const pages = ['Home', 'Products', 'Cart', 'About'];
// const settings = ['Profile',  'Logout'];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//         <img src={logo} width="25px" height="25px"/>          

//           <Typography
//             variant="h6"
//             component={Link}
//             to="/" // Link to your home page
//             sx={{
//               textDecoration: 'none',
//               color: 'inherit',
//               marginRight: '1rem',
//             }}
//           >
            
//           </Typography>

//           {/* Navigation menu for smaller screens */}
//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="menu"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu} component={Link} to={`/reign/user/${page.toLowerCase()}`}>
//                   {page}
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           {/* Navigation links for larger screens */}
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 component={Link}
//                 to={`/reign/user/${page.toLowerCase()}`}
//                 sx={{ color: 'inherit', marginRight: '1rem' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           {/* User settings menu */}
//           <Box>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: 'inherit' }}>
//                 <AccountCircleIcon />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu} >
//                   {setting}
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default ResponsiveAppBar;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from "../../assets/images/asset1.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Link } from 'react-router-dom'; // Import Link from React Router

const pages = ['Home', 'Products', 'Cart', 'About'];
const settings = ['Profile',  'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img src={logo} width="25px" height="25px"/>          

          <Typography
            variant="h6"
            component={Link}
            to="/" // Link to your home page
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              marginRight: '1rem',
            }}
          >
            
          </Typography>

          {/* Navigation menu for smaller screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} component={Link} to={`/reign/user/${page.toLowerCase()}`}>
                  {page}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Navigation links for larger screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/reign/user/${page.toLowerCase()}`}
                sx={{ color: 'inherit', marginRight: '1rem' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* User settings menu */}
          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: 'inherit' }}>
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                // const link = setting === "logout" ? "/login" : "`/reign/user/settings/${setting.toLowerCase()}`;
                <MenuItem key={setting} onClick={handleCloseUserMenu} component={Link} to={setting === 'Logout' ? '/reign/user/login' : `/reign/user/settings/${setting.toLowerCase()}`}>
                  {setting}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

