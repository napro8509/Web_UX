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
            <img style={{marginTop: 30}} className="img-fluid" src="https://znews-photo.zadn.vn/w820/Uploaded/neg_wpeczyr/2018_09_21/iPhone_XS_Max_zing_2.JPG" alt="Sample image"/>
        </Col>
        <Col lg="7" xl="8">
          <h3 className="font-weight-bold mb-3 p-0"><strong>Iphone Xs Max phone 256gb Sliver</strong></h3>
          <p className="dark-grey-text">Apple iPhone XS Max 64GB owns a large screen up to 6.5 inches but the size is still very neat (smaller than the iPhone 8 Plus 5.5 inch screen) thanks to the optimization of the border. The screen has a resolution of 1242 x 2688 pixels with Super Retina HD standard, pixel density of 458 ppi on OLED panels, bringing images very sharp and precise. In addition, the device is equipped with HDR10 display technology, Dolby Vision scanning frequency is increased to 120 Hz on the same level as the iPad Pro.Apple iPhone XS Max 64GB is upgraded to anti-dust standard - IP68 waterproof, to help users complete peace of mind when taking photos to the pool, taking photos, listening to music or listening to an important call in the middle of heavy rain.

</p>
          <h3 className="font-weight-bold mb-3 p-0" style={{fontSize: 16}}><strong style={{color: "#007bff"}}>Price: 20.000.000 VNĐ</strong></h3>
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