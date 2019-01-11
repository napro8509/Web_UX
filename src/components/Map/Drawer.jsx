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
  description: 'Máy mới mua, dùng ngon, phụ kiện đầy đủ',
  place: 'Số 3 đường 41 phường linh đông, quận thử đức',
  price: '12.000.000',
  image: work1,
  distance: '1.5 km'
},{
    name: 'Samsung Galaxy S7',
    description: 'Hàng xách tay Hàn Quốc',
    place: 'Số 13 đường Kha Vạn Cân, quận thử đức',
    price: '3.000.000',
    image: work2,
    distance: '2.5 km'
},{
    name: 'Nhà đất 100m2',
    description: 'Nhà 2 mặt tiền, rộng rãi thoáng mát, có chỗ đậu xe hơi',
    place: 'Số 3 đường 41 phường linh đông, quận thử đức',
    price: '5.000.000.000',
    image: home,
    distance: '3.5 km'
},{
    name: 'Xe oto Toyota Mescedes Suzuki',
    description: 'Xe nhập nguyên chiếc từ campuchia chất lượng tốt, giá rẻ',
    place: 'Số 3 đường 41 phường linh đông, quận thử đức',
    price: '500.000.000',
    image: toyota,
    distance: '4 km'
},{
    name: 'Bộ Salon gõ gỗ quý',
    description: 'Gia công tỉ mỉ, độ bền cao',
    place: 'Số 3 đường 41 phường linh đông, quận thử đức',
    price: '52.000.000',
    image: banghe,
    distance: '6 km'
},
{
  name:'Sirius HQ',
  description: 'Sirius HQ Màu trắng xanh GP, bánh tăm thắng đĩa',
  place: 'Phường Bình Trị Đông, Quận Bình Tân, Tp Hồ Chí Minh',
  price: '9.390.000',
  image: sirius,
  distance: '1.5 km'
},{
    name: 'Taurus 2011',
    description: 'Taurus 2011.trùm mền còn khá mới nguyên zin',
    place: 'Phường Hiệp Thành, Quận 12, Tp Hồ Chí Minh',
    price: '8.200.000',
    image: taurus,
    distance: '2.5 km'
},{
    name: 'Xe Innova',
    description: 'Xe Innova gia đình cần bán để đổi Fortuner dầu',
    place: 'Phường Thới An, Quận 12, Tp Hồ Chí Minh',
    price: '695.000.000',
    image: innova,
    distance: '3.5 km'
},{
    name: 'Yamaha Janus',
    description: 'Yamaha Janus Bstp 1đơi chủ nữ chạy',
    place: 'Quận 9, Tp Hồ Chí Minh',
    price: '23.000.000',
    image: janus,
    distance: '4 km'
},{
    name: 'CHEVROLET COLORADO',
    description: 'CHEVROLET COLORADO Ưa Đãi T1, Dịp Tết Kỷ Hợi. HOT',
    place: 'Phường 3, Quận 8, Tp Hồ Chí Minh',
    price: '624.000.000',
    image: colorado,
    distance: '6 km'
},
{
  name:'FDS 28 Daikin Inverter',
  description: 'FDS 28 Daikin Inverter 1.5hp ion 95%',
  place: 'Quận Gò Vấp, Tp Hồ Chí Minh',
  price: '4.850.000',
  image: inverter,
  distance: '1.5 km'
},{
    name: 'Bán bộ đi văng gõ',
    description: 'Đi văng gõ (sập) dài 3m25 rộng 1m97(2 tấm ghép lại) dày 20cm, chân đuc tay tứ quí. Xem hang tai tp HCM',
    place: 'Quận 12, Tp Hồ Chí Minh',
    price: '270.000.000',
    image: sapgo,
    distance: '2.5 km'
},{
    name: 'Nồi cơm nội địa Nhật',
    description: 'Nồi cơm nội địa Nhật mới 98%( secondhand )',
    place: '2A đường số 9, cư xá ra đa, f13, q6, tphcm',
    price: '1.500.000',
    image: noicomdien,
    distance: '3.5 km'
},{
    name: 'Bàn ăn cherry 4 ghế hàng xuất khẩu',
    description: 'Bàn ăn cherry gỗ cao su xuất khẩu',
    place: 'Phường 2, Quận Phú Nhuận, Tp Hồ Chí Minh',
    price: '3.750.000',
    image: ban,
    distance: '4 km'
},{
    name: 'tủ lạnh sAMSUNG Inverter 265L',
    description: 'tủ lạnh sAMSUNG Inverter 265L mới 89%, bh 6 tháng, ngăn rộng, chạy êm, mát lạnh nhanh, tiện dụng',
    place: 'Phường Tân Sơn Nhì, Quận Tân Phú, Tp Hồ Chí Minh',
    price: '3.700.000',
    image: tulanh,
    distance: '6 km'
},
{
  name:'iPhone 7',
  description: 'Apple iPhone 7 Plus Quốc Tế | Có Bán Trả Góp',
  place: '44/2 Phường 7, Quận Gò Vấp, Tp Hồ Chí Minh',
  price: '9.390.000',
  image: iphone6s,
  distance: '1.5 km'
},{
    name: 'iPhone 6S',
    description: 'Apple iPhone 6S Plus Quốc Tế | Có Bán Trả Góp',
    place: 'Phường 7, Quận Gò Vấp, Tp Hồ Chí Minh',
    price: '6.690.000',
    image: phone3,
    distance: '2.5 km'
},{
    name: 'Galaxy S7',
    description: 'Đăng bán em Galaxy S7 2sim máy xài ngon bao lỗi',
    place: 'Quận 12, Tp Hồ Chí Minh',
    price: '3.290.000',
    image: galaxys7,
    distance: '3.5 km'
},{
    name: 'Galaxy J5',
    description: 'Đăng bán em Galaxy J5 2sim máy xài ngon bao lỗi',
    place: 'Quận 9, Tp Hồ Chí Minh',
    price: '1.650.000',
    image: galaxyj5,
    distance: '4 km'
},{
    name: 'LENOVO',
    description: 'LENOVO 14"+Xoay 360+Máy đời mới+Đẹp keng+i3 ^7',
    place: 'Quận Bình Thạnh, Tp Hồ Chí Minh',
    price: '6.500.000',
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