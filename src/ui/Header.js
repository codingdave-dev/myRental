import React, { Fragment, useEffect, useState } from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/styles";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Link from "../ui/Link";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { openDialog } from "../store/actions/dialogActions/dialogActions";
import { connect } from "react-redux";
import { logout } from "../store/actions/authActions/authActions";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const actions = {
  logout,
};

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
  admin: state.firebase.profile.admin,
});

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: theme.palette.common.white,
    },
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "20px",
    color: theme.palette.common.white,
    "&:hover": {
      color: theme.palette.common.white,
      opacity: 1,
    },
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: "0.7",
  },

  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },

  drawerIconContainer: {
    // marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    color: theme.palette.common.white,
    height: "30px",
    width: "30px",
  },

  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },

  tabEnd: {
    ...theme.typography.tab,
    marginRight: "25px",
  },
  userContainer: {
    marginRight: '1em'
  },
  userInfoContainer: {
    marginRight: '0.7em'
  },
  userName: {
    color: theme.palette.common.white,
    fontWeight: 600
  },
  userLocation: {

  }
}));

const Header = ({ value, setValue, selectedIndex, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|ipod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(true);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const routes = [
    { name: "Dashboard", link: "/dashboard", activeIndex: 0 },
    { name: "Contacts", link: "/contacts", activeIndex: 1 },
    { name: "Opportunities", link: "/opportunities", activeIndex: 2 },
    { name: "Warehouse", link: "/warehouse", activeIndex: 3 },
    { name: "Transport", link: "/transport", activeIndex: 4 },
    { name: "Labour", link: "/labour", activeIndex: 5 },
    { name: "Inventory", link: "/inventory", activeIndex: 6 },
    { name: "Accounts", link: "/accounts", activeIndex: 7 },
    { name: "Settings", link: "/settings", activeIndex: 8 },
  ];

  useEffect(() => {
    [...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [value, setValue, selectedIndex, setSelectedIndex, routes]);

  const tabs = (
    <Fragment>
      <Tabs value={value} onChange={handleChange} className={classes.tabs}>
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            href={route.link}
            label={route.name}
          />
        ))}


      </Tabs>


    </Fragment>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
                setSelectedIndex(null);
              }}
              divider
              button
              component={Link}
              href={route.link}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>

      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>


    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position={"fixed"} className={classes.appBar}>
          <Toolbar disableGutters>
            {matches ? drawer : tabs}
            <div style={{marginLeft: 'auto'}}>
              <Grid item container className={classes.userContainer}>
                <Grid item className={classes.userInfoContainer}>
                  <Grid item container direction={'column'} alignItems={'flex-end'} >
                    <Grid item>
                      <Typography variant={'caption'} className={classes.userName}>Full Name</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant={'caption'} className={classes.userLocation}>Location</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Avatar/>
                </Grid>
              </Grid>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default connect(mapStateToProps, actions)(Header);
