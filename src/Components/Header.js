import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FaFacebook } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { MdOndemandVideo } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi';
import { IoLogoGameControllerB } from 'react-icons/io';
import TelegramIcon from '@material-ui/icons/Telegram';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div id="header">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div className="header-left">
              <div className="wrap">
                <Link to="/">
                  <FaFacebook className="flogo" />
                </Link>
                <input placeholder="Search Facebook" />
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="header-middle">
              <Link to="/">
                <AiFillHome className="menuitem" />
              </Link>
              <Link to="/watch"><MdOndemandVideo className="menuitem" /></Link>
              <Link to="/groups"><HiUserGroup className="menuitem" /></Link>
              <Link to="/gaming"><IoLogoGameControllerB className="menuitem" /></Link>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="header-right">
              <Link to="/profile">
              <div className="profile-btn">
                <img src={require('../assets/images/crop.png')} alt="shihab" />
                <p>Shihab</p>
              </div>
              </Link>
              <AddIcon className="rightitem" />
              <TelegramIcon className="rightitem" />
              <NotificationsIcon className="rightitem" />
              <ArrowDropDownIcon className="rightitem" />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Header;
