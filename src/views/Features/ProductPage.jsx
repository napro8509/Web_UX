import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Header from "components/Header/Header.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomParallax from "../../components/Parallax/CustomParallax.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import Product from './Product.jsx'
import LogProduct from './LogProduct.jsx'
import UserInformation from './UserInformation.jsx'
import FeaturesPage from './FeaturesPage'
import Rating from './Rating.jsx';
import Comment from './Comment.jsx'
import Share from './Share.jsx'
import ProductConcern from './ProductConcern.jsx'
import ProductContent from './ProductContent.jsx'
import Footer from './Footer.jsx'
import 'semantic-ui-css/semantic.min.css'

class ProductPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { classes, ...rest } = this.props;
    var user = {
      userName : 'Phan Lê Trung Hiếu (Stage name: Hiếu Đẹp Trai)',
      position : 'Providers of clean farm produce.',
      userImage : 'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/43951894_1884451351651332_8635442626654371840_n.jpg?_nc_cat=105&_nc_eui2=AeEbQLkuqRNg1J-fyhX3OXbTsMd1B3YVTkAwuBBQPfOhE41aG2gcEh47VRXkqI1zZHlYLIySVOFsL5GOg16Y8JJeQkoF7yZg_qU0fBVKJz8pkQ&_nc_ht=scontent.fsgn5-2.fna&oh=7633220fe81f20b7eb4ac55c5cb37e97&oe=5CA941E1',
  }

  var product = {
      productName : 'Clean Bananas Organic',
      productImage : 'https://tul.imgix.net/content/article/banana.jpg?auto=format,compress&w=1200&h=630&fit=crop&crop=edges',
      content : 'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
      logs : [
          {
              partner: 'Hieu Dep Trai',
              time : '12:35:23 11/12/2018',
              star: '4.5',
              content : 'Planting products and land according to WHO standards. Planting produPlanting products and land according to WHO standards. Planting produPlanting products and land according to WHO standards. Planting produPlanting products and land according to WHO standards. Planting products and land according to WHO standards.'
          },
          {
              partner: 'Hieu Dep Trai',
              time : '12:35:23 11/12/2018',
              star: '4.5',
              content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
          },
          {
              partner: 'Hieu Dep Trai',
              time : '12:35:23 11/12/2018',
              star: '4.5',
              content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
          },
          {
              partner: 'Hieu Dep Trai',
              time : '12:35:23 11/12/2018',
              star: '4.5',
              content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
          },
          {
              partner: 'Hieu Dep Trai',
              time : '12:35:23 11/12/2018',
              star: '4.5',
              content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
          },
          {
              partner: 'Hieu Dep Trai',
              time : '12:35:23 11/12/2018',
              star: '4.5',
              content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
          },
          {
              partner: 'Hieu Dep Trai',
              time : '12:35:23 11/12/2018',
              star: '4.5',
              content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
          },
          {
              partner: 'Hieu Dep Trai',
              time : '12:35:23 11/12/2018',
              star: '4.5',
              content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
          },
          {
              partner: 'Hieu Dep Trai',
              time : '12:35:23 11/12/2018',
              star: '4.5',
              content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
          },
          {
              partner: 'Hieu Dep Trai',
              time : '12:35:23 11/12/2018',
              star: '4.5',
              content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
          },
          {
              partner: 'Hieu Dep Trai',
              time : '12:35:23 11/12/2018',
              star: '4.5',
              content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
          },
          {
              partner: 'Hieu Dep Trai',
              time : '12:35:23 11/12/2018',
              star: '4.5',
              content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
          },
          {
              partner: 'Hieu Dep Trai',
              time : '12:35:23 11/12/2018',
              star: '4.5',
              content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
          },
          {
              partner: 'Hieu Dep Trai',
              time : '12:35:23 11/12/2018',
              star: '4.5',
              content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
          },
          {
              partner: 'Hieu Dep Trai',
              time : '12:35:23 11/12/2018',
              star: '4.5',
              content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
          },
          {
              partner: 'Hieu Dep Trai',
              time : '12:35:23 11/12/2018',
              star: '4.5',
              content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
          },
          {
              partner: 'Hieu Dep Trai',
              time : '12:35:23 11/12/2018',
              star: '4.5',
              content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
          },
          {
              partner: 'Hieu Dep Trai',
              time : '12:35:23 11/12/2018',
              star: '4.5',
              content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
          },
          {
              partner: 'Hieu Dep Trai',
              time : '12:35:23 11/12/2018',
              star: '4.5',
              content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
          },
          {
              partner: 'Hieu Dep Trai',
              time : '12:35:23 11/12/2018',
              star: '4.5',
              content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
          }
      ],
      partners : [
          {
              partner: 'Hieu Dep Trai',
              star:'4.5'
          },
          {
              partner: 'Hieu Dep Trai',
              star:'4.5'
          },
          {
              partner: 'Hieu Dep Trai',
              star:'4.5'
          },
          {
              partner: 'Hieu Dep Trai',
              star:'4.5'
          },
          {
              partner: 'Hieu Dep Trai',
              star:'4.5'
          },
          {
              partner: 'Hieu Dep Trai',
              star:'4.5'
          }]
  }
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
        <div className="container" style={{zIndex:100, paddingTop: 10}}>
        <Product style= {{width: '85%'}}
             productName= {product.productName}
             productImage= {product.productImage}
             content= {product.content}
            ></Product>
            <UserInformation
             userImage= {user.userImage} 
             userName= {user.userName} 
             position= {user.position} 
            ></UserInformation>
            <ProductContent></ProductContent>
            <Rating></Rating>
            <Comment></Comment>
            <Share></Share>
            <ProductConcern></ProductConcern>
            <Footer></Footer>
        </div>
        </div>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(ProductPage);