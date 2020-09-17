import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Button, Divider, ListSubheader } from '@material-ui/core';

function Leftsidebar() {
  const [open, setOpen] = useState(false);

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
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="home_leftside">
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Saiful Shihab" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/kOxV5aCYUAE.png"
              alt="covid"
            />
          </ListItemIcon>
          <ListItemText primary="Covid-19 Information Center" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png"
              alt="pages"
            />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
              alt="pages"
            />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/SeXJIAlf_z-.png"
              alt="pages"
            />
          </ListItemIcon>
          <ListItemText primary="Messenger" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <KeyboardArrowDownIcon />
          </ListItemIcon>
          <ListItemText primary="See More" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
                  alt="pages"
                />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"
                  alt="pages"
                />
              </ListItemIcon>
              <ListItemText primary="Videos" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png"
                  alt="pages"
                />
              </ListItemIcon>
              <ListItemText primary="Events" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/n2vd2VduYc1.png"
                  alt="pages"
                />
              </ListItemIcon>
              <ListItemText primary="Fundraisers" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/MN5ZSGIfEZ3.png"
                  alt="pages"
                />
              </ListItemIcon>
              <ListItemText primary="Friend Lists" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png"
                  alt="pages"
                />
              </ListItemIcon>
              <ListItemText primary="Memories" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png"
                  alt="pages"
                />
              </ListItemIcon>
              <ListItemText primary="Games" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/1Xvrz50fHMF.png"
                  alt="pages"
                />
              </ListItemIcon>
              <ListItemText primary="Messenger Kids" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/29AMNpNZ4Vm.png"
                  alt="pages"
                />
              </ListItemIcon>
              <ListItemText primary="Campus" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/5EU1wNhLmR6.png"
                  alt="pages"
                />
              </ListItemIcon>
              <ListItemText primary="Gaming Videos" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/NYOGcd-z-qs.png"
                  alt="pages"
                />
              </ListItemIcon>
              <ListItemText primary="Offers" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/bo0Zt72NIra.png"
                  alt="pages"
                />
              </ListItemIcon>
              <ListItemText primary="Weather" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/8OasGoQgQgF.png"
                  alt="pages"
                />
              </ListItemIcon>
              <ListItemText primary="Recent Ad Activity" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/w-vdKCGzCy1.png"
                  alt="pages"
                />
              </ListItemIcon>
              <ListItemText primary="Most Recent" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png"
                  alt="pages"
                />
              </ListItemIcon>
              <ListItemText primary="Saved" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GJ4EaivDaSj.png"
                  alt="pages"
                />
              </ListItemIcon>
              <ListItemText primary="Facebook Pay" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/cT5nPnO8Wsc.png"
                  alt="pages"
                />
              </ListItemIcon>
              <ListItemText primary="Crisis Response" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/DO-SN-shaZL.png"
                  alt="pages"
                />
              </ListItemIcon>
              <ListItemText primary="Jobs" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/Nl9CPY6q_n-.png"
                  alt="pages"
                />
              </ListItemIcon>
              <ListItemText primary="Live Videos" />
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Your Shortcuts <a href="">Edit</a>
            </ListSubheader>
          }
          className={classes.root}
        >
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/cT5nPnO8Wsc.png"
                alt="pages"
              />
            </ListItemIcon>
            <ListItemText primary="Night Fury Gaming" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/DO-SN-shaZL.png"
                alt="pages"
              />
            </ListItemIcon>
            <ListItemText primary="DNC" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/Nl9CPY6q_n-.png"
                alt="pages"
              />
            </ListItemIcon>
            <ListItemText primary="NodeJS Developers" />
          </ListItem>
        </List>
      </List>
    </div>
  );
}
export default Leftsidebar;
