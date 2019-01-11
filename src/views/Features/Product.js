// import React, { Component } from 'react';
// import { Container, Row, Col, Mask, Fa, View, Button} from 'mdbreact';
// import red from '@material-ui/core/colors/red';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';

// const styles = theme => ({
//   card: {
//     width: '85%',
//     marginLeft: "auto",
//     marginRight: "auto",
//     marginTop: 20,
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
//   image:{
//     marginTop: "auto",
//     marginBottom: "auto",
//     height : 400
//   }
// });

// class Product extends Component {
//   render() {
//     const { classes } = this.props;
//   return(
//     <Card className={classes.card}>
//     <Container>
//     <hr className="my-5"/>
//       <Row>
//         <Col lg="5" xl="4">
//           <View hover className="rounded z-depth-1-half mb-lg-0 mb-4">
//             <img className="img-fluid" src={this.props.productImage} alt="Sample image"/>
//             <a><Mask overlay="white-slight"/></a>
//           </View>
//         </Col>
//         <Col lg="7" xl="8">
//           <h3 className="font-weight-bold mb-3 p-0"><strong>{this.props.productName}</strong></h3>
//           <p className="dark-grey-text">{this.props.content}</p>
//         </Col>
//       </Row>
//       <hr className="my-5"/>
//     </Container>
//     </Card>
//   );
// }
// }
// Product.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Product);

import React, { Component } from 'react';
import { Container, Row, Col, Mask, Fa, View, Button} from 'mdbreact';
import red from '@material-ui/core/colors/red';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const styles = theme => ({
  card: {
    width: '85%',
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },
  avatar: {
    backgroundColor: red[500],
  },
  image:{
    marginTop: "auto",
    marginBottom: "auto",
    height : 400
  }
});

class Product extends Component {
  render() {
    const { classes } = this.props;
  return(
    <Card className={classes.card}>
    <Container>
    <hr className="my-5"/>
      <Row>
        <Col lg="5" xl="4">
          <View hover className="rounded z-depth-1-half mb-lg-0 mb-4">
            <img className="img-fluid" src="https://znews-photo.zadn.vn/w820/Uploaded/neg_wpeczyr/2018_09_21/iPhone_XS_Max_zing_2.JPG" alt="Sample image"/>
            <a><Mask overlay="white-slight"/></a>
          </View>
        </Col>
        <Col lg="7" xl="8">
          <h3 className="font-weight-bold mb-3 p-0"><strong>Điện thoại Iphone Xs Max 256gb Sliver</strong></h3>
          <p className="dark-grey-text">Apple iPhone XS Max 64GB sở hữu màn hình lớn lên đến 6.5 inch nhưng kích thước vẫn rất gọn gàng (nhỏ hơn cả iPhone 8 Plus màn hình 5.5 inch) nhờ việc tối ưu hóa phần viền. Màn hình có độ phân giải 1242 x 2688 pixels đạt chuẩn Super Retina HD, mật độ điểm ảnh 458 ppi trên tấm nền OLED, mang lại những hình ảnh rất sắc nét và chính xác. Bên cạnh đó, máy được trang bị công nghệ hiển thị HDR10, Dolby Vision tần số quét được tăng lên 120 Hz ngang với iPad Pro.Apple iPhone XS Max 64GB được nâng cấp tiêu chuẩn chống bụi – chống nước IP68, giúp người dùng hoàn toàn yên tâm khi mang ra hồ bơi chụp ảnh, quay phim, nghe nhạc hay cần nghe một cuộc gọi quan trọng giữa trời mưa lớn.

</p>
          <h3 className="font-weight-bold mb-3 p-0" style={{fontSize: 16}}><strong style={{color: "#007bff"}}>Giá: 20.000.000 VNĐ</strong></h3>
        </Col>
      </Row>
      <hr className="my-5" />
    </Container>
    </Card>
  );
}
}
Product.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Product);