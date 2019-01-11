// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import HomeIcon from '@material-ui/icons/Home';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';

// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
//   color:{ 
//     background : '#2196f2'
//   }
// };



// class MenuAppBar extends React.Component {
//   state = {
//     auth: true,
//     anchorEl: null,
//   };

//   handleChange = event => {
//     this.setState({ auth: event.target.checked });
//   };

//   handleMenu = event => {
//     this.setState({ anchorEl: event.currentTarget });
//   };

//   handleClose = () => {
//     this.setState({ anchorEl: null });
//   };

//   render() {
//     const { classes } = this.props;
//     const { auth, anchorEl } = this.state;
//     const open = Boolean(anchorEl);

//     return (
//       <div className={classes.root}>
//         <AppBar className={classes.color} position="static">
//           <Toolbar>
//             <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//               <HomeIcon />
//             </IconButton>
//             <Typography variant="h6" color="inherit" className={classes.grow}>
//             {this.props.productName}
//             </Typography>
//             {auth && (
//               <div>
//                 <IconButton
//                   aria-owns={open ? 'menu-appbar' : undefined}
//                   aria-haspopup="true"
//                   onClick={this.handleMenu}
//                   color="inherit"
//                 >
//                   <AccountCircle />
//                 </IconButton>
//                 <Menu
//                   id="menu-appbar"
//                   anchorEl={anchorEl}
//                   anchorOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right',
//                   }}
//                   transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right',
//                   }}
//                   open={open}
//                   onClose={this.handleClose}
//                 >
//                   <MenuItem onClick={this.handleClose}>Profile</MenuItem>
//                   <MenuItem onClick={this.handleClose}>My account</MenuItem>
//                 </Menu>
//               </div>
//             )}
//           </Toolbar>
//         </AppBar>
//       </div>
//     );
//   }
// }

// MenuAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(MenuAppBar);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';
import { MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBBtn,   MDBView, MDBContainer, MDBFormInline } from "mdbreact";
import classNames from 'classnames';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  color:{ 
    background : '#2196f2'
  }
};



class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar className={classes.color} position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <HomeIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
            Điện thoại Iphone Xs Max 256gb Sliver
            </Typography>
            {auth && (
              <div>
              {/* <MDBNavItem style={{display:'inline-block'}}>
                      <MDBFormInline waves>
                        <div className="md-form my-0" style={{color:'#FFFF',opacity: 1}}>
                          <input
                            style={{color:'#FFFF',opacity: 1}}
                            type="text"
                            placeholder="Tìm kiếm"
                            aria-label="Search"
                          />
                        </div>
                      </MDBFormInline>
                    </MDBNavItem> */}
                <IconButton
                style={{display:'inline-block'}}
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <MDBIcon style={{display:'inline-block'}} style={{marginRight:10}} icon="facebook" />
                  <MDBIcon style={{display:'inline-block'}} style={{marginRight:10}} icon="twitter" />
                  <MDBIcon style={{display:'inline-block'}} style={{marginRight:10}} icon="instagram" />
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);