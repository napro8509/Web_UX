import React from 'react'
import Item from './Components/Item';
import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/phone1.jpg";
import work2 from "assets/img/phone2.jpg";
import work3 from "assets/img/phone3.jpg";
import work4 from "assets/img/phone4.jpg";
import work5 from "assets/img/phone5.jpg";
const numbers =[{
  name:'Samsung Galaxy J8',
  description: 'Máy mới mua, dùng ngon, phụ kiện đầy đủ',
  place: 'Số 3 đường 41 phường linh đông, quận thử đức',
  price: '12.000.000',
  image: work1,
},{
    name: 'Trung Tâm Thương Mại',
    description: 'Trung tâm nằm vị trí đắc địa, kinh doanh tốt cần cho thuê',
    place: 'Số 3 đường 41 phường linh đông, quận thử đức',
    price: '12.000.000',
    image: work2,
},{
    name: 'Nhà đất 100m2',
    description: 'Nhà 2 mặt tiền, rộng rãi thoáng mát, có chỗ đậu xe hơi',
    place: 'Số 3 đường 41 phường linh đông, quận thử đức',
    price: '5.000.000.000',
    image: work3,
},{
    name: 'Xe oto Toyota Mescedes Suzuki',
    description: 'Xe nhập nguyên chiếc từ campuchia chất lượng tốt, giá rẻ',
    place: 'Số 3 đường 41 phường linh đông, quận thử đức',
    price: '500.000.000',
    image: studio1,
},{
    name: 'Tiệm hớt tóc bảo @',
    description: 'Ngay trung tâm quận 1, cần sang gấp',
    place: 'Số 3 đường 41 phường linh đông, quận thử đức',
    price: '52.000.000',
    image: work5,
}]

class Drawer extends React.Component {
    constructor(props){
      super(props)
      this.state = props
      this.drawerStyle = {
        position: 'absolute',
        top: '0px',
        left: '0px',
        height: '100%',
        width: '25%',
        background: 'white',
        overflowX: 'hidden',
        overflowY: 'scroll',
        webkitOverflowScrolling: 'touch'      
      }
    }
    
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
      const listItems = numbers.map((number) =>
        <Item item={number}/>
      );
      return(
        <div>
          {
            this.props.show && 
            <div id="drawer" style={this.drawerStyle}>
              {listItems}
            </div>
          }
        </div>
      )
    }
  }

export default Drawer