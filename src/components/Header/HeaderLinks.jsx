/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload, Map, Notifications } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import SearchProduct from 'components/Custom/Search.jsx';
import profileImage from "assets/img/faces/avatar.jpg";
function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Features"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Map}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Push News
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation"
              target="_blank"
              className={classes.dropdownLink}
            >
              Find nearest seller
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>

        <Button
          href="https://www.creative-tim.com/product/material-kit-react"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Notifications className={classes.icons} /> Notifications
        </Button>
        <Link to="login-page" style={{color:'white'}}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Log In
        </Button>
        </Link>
        <Button color="danger" round>
                  Sell Anything
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
