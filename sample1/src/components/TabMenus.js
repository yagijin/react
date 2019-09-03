import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import InsertDriveFileRoundedIcon from '@material-ui/icons/InsertDriveFileRounded';
import { Link } from 'react-router-dom';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function TabMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleGo() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
      <MenuRoundedIcon fontSize="large"/>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/">
          <StyledMenuItem>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </StyledMenuItem>
        </Link>
        <Link to="/research">
          <StyledMenuItem>
            <ListItemIcon>
              <SchoolRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Research" />
          </StyledMenuItem>
        </Link>
        <Link to="/products">
          <StyledMenuItem>
            <ListItemIcon>
              <InsertDriveFileRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </StyledMenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
}