import React, { Component } from 'react';
import MenuAppBar from './MenuAppBar'
import Product from './Product'
import LogProduct from './LogProduct'
import LogPartner from './LogPartner'
import UserInformation from './UserInformation'
import Footer from './Footer'
import FeaturesPage from './FeaturesPage'
import TopNavigation from './TopNavigation';
import Rating from './Rating';
import Comment from './Comment'
import Share from './Share'
import ProductConcern from './ProductConcern'
import ProductContent from './ProductContent'

class ProductDetail extends Component {
  render() {

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
        <div style={{backgroundColor: '#eeeeee'}}>
            <MenuAppBar 
             productName= {product.productName}
            ></MenuAppBar>
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
            {/* <LogProduct
            logs= {product.logs}
            ></LogProduct>
            <LogPartner logs= {product.partners}/> */}
            <FeaturesPage></FeaturesPage>
            <Footer style={{marginLeft: 0}}></Footer>
        </div>
    );
  } 
}

export default ProductDetail;