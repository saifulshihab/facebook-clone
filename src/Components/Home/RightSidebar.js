import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, ListSubheader } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';

function Rightsidebar() {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: 'transparent',
    },
    nested: {
      paddingLeft: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  return (
    <>
      <div className='_home_rightside'>
        <List
          component='nav'
          aria-labelledby='nested-list-subheader'
          subheader={
            <ListSubheader component='div' id='nested-list-subheader'>
              Your Pages
            </ListSubheader>
          }
          className={classes.root}
        >
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/cT5nPnO8Wsc.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='Night Fury Gaming' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/DO-SN-shaZL.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='DNC' />
          </ListItem>
        </List>
        <Divider />
        <List
          component='nav'
          aria-labelledby='nested-list-subheader'
          subheader={
            <ListSubheader component='div' id='nested-list-subheader'>
              Friend Requests
            </ListSubheader>
          }
          className={classes.root}
        >
          <div className='friend_req_div'>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <img
                  src='https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/MN5ZSGIfEZ3.png'
                  alt='pages'
                />
              </ListItemIcon>
              <ListItemText primary='Mark Zukerburg' />
              <br />
              <div className='buttons'>
                <Button
                  className='lb'
                  color='primary'
                  variant='contained'
                  size='medium'
                  style={{marginRight: 5}}
                >
                  Confirm
                </Button>
                <Button color='primary' variant='outlined' size='medium'>
                  Delete
                </Button>
              </div>
            </ListItem>
          </div>
        </List>
        <Divider />
        <List
          component='nav'
          aria-labelledby='nested-list-subheader'
          subheader={
            <ListSubheader component='div' id='nested-list-subheader'>
              Contacts
            </ListSubheader>
          }
          className={classes.root}
        >
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='Brad Traversy' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='Fireship.io' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='The Coding Train' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='Brad Traversy' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='Fireship.io' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='The Coding Train' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='Brad Traversy' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='Fireship.io' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='The Coding Train' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='Brad Traversy' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='Fireship.io' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='The Coding Train' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='Brad Traversy' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='Fireship.io' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='The Coding Train' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='Brad Traversy' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='Fireship.io' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='The Coding Train' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='Brad Traversy' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='Fireship.io' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='The Coding Train' />
          </ListItem>
        </List>
        <Divider />
        <List
          component='nav'
          aria-labelledby='nested-list-subheader'
          subheader={
            <ListSubheader component='div' id='nested-list-subheader'>
              Group Coversation
            </ListSubheader>
          }
          className={classes.root}
        >
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='Brad Traversy' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='Fireship.io' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='The Coding Train' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='Brad Traversy' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
                alt='pages'
              />
            </ListItemIcon>
            <ListItemText primary='Fireship.io' />
          </ListItem>
        </List>
      </div>
    </>
  );
}

export default Rightsidebar;
