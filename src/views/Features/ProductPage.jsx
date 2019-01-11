import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Header from "components/Header/Header.jsx";
import ProductContent from './ProductContent.jsx';
import Parallax from "components/Parallax/Parallax.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomParallax from "../../components/Parallax/CustomParallax.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import ProductConcern from "./ProductConcern.jsx";

class ProductPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          brand="Marketplace.vn"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "info"
          }}
          {...rest}
        />
        <CustomParallax/>
        <div className={classNames(classes.main, classes.mainRaised)}>
        <div className="container" style={{zIndex:100}}>
        <ProductContent/>
        </div>
        </div>
        <ProductConcern/>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(ProductPage);