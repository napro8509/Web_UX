import React from 'react'
import Item from './Components/Item';
import studio1 from "assets/img/examples/studio-1.jpg";
import work1 from "assets/img/phone1.jpg";
import work2 from "assets/img/phone2.jpg";
import work3 from "assets/img/phone3.jpg";
import work5 from "assets/img/phone5.jpg";

import colorado from "assets/img/colorado.jpg";
import janus from "assets/img/janus.jpg";
import innova from "assets/img/Innova.jpg";
import taurus from 'assets/img/taurus.jpg';
import sirius from 'assets/img/sirius_hanquoc.jpg';
import galaxys7 from 'assets/img/galaxys7.jpg';
import galaxyj5 from 'assets/img/galaxyj5.jpg';
import exciter from 'assets/img/exciter.JPG';
import inverter from 'assets/img/inverter.jpg';
import iphone6s from 'assets/img/iphone6s.jpg';
import lenovo from 'assets/img/lenovo.jpg';
import noicomdien from 'assets/img/noicomdien.jpg';
import sapgo from 'assets/img/sapgo.jpg';
import tulanh from 'assets/img/tulanh.jpg';
import home from 'assets/img/home.jpg';
import toyota from 'assets/img/toyota.jpg';
import banghe from 'assets/img/banghe.jpg';
import ban from 'assets/img/ban.jpg';
import phone3 from 'assets/img/phone3.jpg';
export const numbers =[{
  name:'Samsung Galaxy J8',
  description: 'New machine to buy, delicious, full accessories',
  place: 'No. 3 Road 41 ward linh dong, Thu Duc district',
  price: '12.000.000 VNĐ',
  image: work1,
  distance: '1.5 km'
},{
    name: 'Samsung Galaxy S7',
    description: 'Korean portable goods',
    place: 'No. 13 Kha Van Can Street, Thu Duc district',
    price: '3.000.000 VNĐ',
    image: work2,
    distance: '2.5 km'
},{
    name: '100m2 House',
    description: 'House 2 frontage, spacious and airy, with car parking',
    place: 'No. 3 Road 41 ward Linh Dong, Thu Duc district',
    price: '5.000.000.000 VNĐ',
    image: home,
    distance: '3.5 km'
},{
    name: 'Toyota car Mescedes Suzuki',
    description: 'Imported cars from Cambodia, good quality, cheap price',
    place: 'No. 3 Road 41 ward Linh Dong, Thu Duc district',
    price: '500.000.000 VNĐ',
    image: toyota,
    distance: '4 km'
},{
    name: 'Salon set knocked on precious wood',
    description: 'Meticulous machining, high durability',
    place: 'No. 3 Road 41 ward Linh Dong,  Thu Duc district',
    price: '52.000.000 VNĐ',
    image: banghe,
    distance: '6 km'
},
{
  name:'Sirius HQ',
  description: 'Ssirius HQ Blue and white GP, disc brake wheel',
  place: 'Binh Tri Dong Ward, Binh Tan District, Ho Chi Minh City',
  price: '9.390.000 VNĐ',
  image: sirius,
  distance: '1.5 km'
},{
    name: 'Taurus 2011',
    description: '2011 Taurus. The blanket is quite new',
    place: 'Hiep Thanh Ward, District 12, Ho Chi Minh City',
    price: '8.200.000 VNĐ',
    image: taurus,
    distance: '2.5 km'
},{
    name: 'Innova car',
    description: 'Innova family car for sale to change Fortuner oil',
    place: 'Thoi An Ward, District 12, Ho Chi Minh City',
    price: '695.000.000 VNĐ',
    image: innova,
    distance: '3.5 km'
},{
    name: 'Yamaha Janus',
    description: 'Yamaha Janus Bstp 1 female owner runs',
    place: 'District 9, Ho Chi Minh City',
    price: '23.000.000 VNĐ',
    image: janus,
    distance: '4 km'
},{
    name: 'CHEVROLET COLORADO',
    description: 'CHEVROLET COLORADO Popular T1, Lunar New Year. HOT',
    place: 'Ward 3, District 8, Ho Chi Minh City',
    price: '624.000.000 VNĐ',
    image: colorado,
    distance: '6 km'
},
{
  name:'FDS 28 Daikin Inverter',
  description: 'FDS 28 Daikin Inverter 1.5hp ion 95%',
  place: 'Go Vap District, Ho Chi Minh City',
  price: '4.850.000 VNĐ',
  image: inverter,
  distance: '1.5 km'
},{
    name: 'Sell set of couches knocked',
    description: 'Softer knocking (collapsing) 3m25 long, 1m97 wide (2 composite panels) 20cm thick, limbs in the quarter. See the cave in Ho Chi Minh City',
    place: 'District 12, Ho Chi Minh City',
    price: '270.000.000 VNĐ',
    image: sapgo,
    distance: '2.5 km'
},{
    name: 'Japanese domestic rice cooker',
    description: 'New domestic rice cooker 98% (secondhand)',
    place: '2A street No. 9, residence lot, f13, q6, HCM',
    price: '1.500.000 VNĐ',
    image: noicomdien,
    distance: '3.5 km'
},{
    name: 'Cherry table with 4 chairs for export',
    description: 'Export wooden cherry table for export',
    place: 'Ward 2, Phu Nhuan District, Ho Chi Minh City',
    price: '3.750.000 VNĐ',
    image: ban,
    distance: '4 km'
},{
    name: 'SAMSUNG Refrigerator Inverter 265L',
    description: 'SBAMS refrigerator Inverter 265L new 89%, 6 months, wide compartment, running smoothly, cool, quick and convenient',
    place: 'Tan Son Nhi Ward, Tan Phu District, Ho Chi Minh City',
    price: '3.700.000 VNĐ',
    image: tulanh,
    distance: '6 km'
},
{
  name:'iPhone 7',
  description: 'Apple iPhone 7 Plus International Have a Installment Sale',
  place: '44/2 Ward 7, Go Vap District, Ho Chi Minh City',
  price: '9.390.000 VNĐ',
  image: iphone6s,
  distance: '1.5 km'
},{
    name: 'iPhone 6S',
    description: 'Apple iPhone 6S Plus International Have a Installment Sale',
    place: 'Ward 7, Go Vap District, Ho Chi Minh City',
    price: '6.690.000 VNĐ',
    image: phone3,
    distance: '2.5 km'
},{
    name: 'Galaxy S7',
    description: 'Sign up for Galaxy S7 2sim to use it to make a mistake',
    place: 'District 12, Ho Chi Minh City',
    price: '3.290.000 VNĐ',
    image: galaxys7,
    distance: '3.5 km'
},{
    name: 'Galaxy J5',
    description: 'Sign up for a delicious and error-free Galaxy J5 2sim',
    place: 'District 9, Ho Chi Minh City',
    price: '1.650.000 VNĐ',
    image: galaxyj5,
    distance: '4 km'
},{
    name: 'LENOVO',
    description: 'LENOVO 14 "+ 360 Rotation + New machine + Beautiful keng + i3 ^ 7',
    place: 'Binh Thanh District, Ho Chi Minh City',
    price: '6.500.000 VNĐ',
    image: lenovo,
    distance: '6 km'
}
]

class Drawer extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        ...props,
        width: window.innerWidth,
      }
      this.drawerStyle = {
        position: 'absolute',
        top: '0px',
        left: '0px',
        height: '100%',
        width: '30%',
        background: 'white',
        overflowX: 'hidden',
        overflowY: 'scroll',
        webkitOverflowScrolling: 'touch'      
      }
      this.mobileStyle = {
        position: 'relative',
        top: '0px',
        left: '0px',
        height: '100%',
        width: '100%',
        background: 'white',
        overflowX: 'hidden',
        overflowY: 'scroll',
        webkitOverflowScrolling: 'touch'  
      }
    }

    componentWillMount() {
      window.addEventListener('resize', this.handleWindowSizeChange);
    }
    
    handleWindowSizeChange = () => {
      this.setState({ width: window.innerWidth });
    };

    componentWillReceiveProps(nextProps) {
      if(nextProps.show) {
        this.drawerStyle = Object.assign({},this.drawerStyle, {right: '0px'})
      }
      console.log(this.drawerStyle, nextProps)
      this.setState({
        nextProps
      })
    }
    
    render() {
      const { width } = this.state;
      const isMobile = width <= 500;
      const listItems = numbers.map((number) =>
        <Item item={number}/>
      );
      return(
        <div>
          {
            this.props.show && 
            <div id="drawer" style={isMobile ? this.mobileStyle : this.drawerStyle}>
              {listItems}
            </div>
          }
        </div>
      )
    }
  }

export default Drawer