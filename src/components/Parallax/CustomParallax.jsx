import React, { Component } from 'react'
import Parallax from "components/Parallax/Parallax.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";


class CustomParallax extends React.Component {
    render() {
        const { classes, ...rest } = this.props;
        return (
            <React.Fragment>
            <Parallax filter image={require("assets/img/landing-bg.jpg")} style={{height:"40vh"}}>
            </Parallax>
            </React.Fragment>
        );
    }
}

export default withStyles(landingPageStyle)(CustomParallax);