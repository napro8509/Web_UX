import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {MDBNavbarNav, MDBIcon,MDBNavLink,MDBNavItem } from "mdbreact";
import { Container, Row, Col, Mask, Fa, View, Button} from 'mdbreact';

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
});

class ProductCotent extends React.Component {
  state = { expanded: false };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <div style={{ marginTop:20, paddingLeft:20, paddingRight:20}}>
            <h3 className="font-weight-bold mb-3 p-0" ><strong>PRODUCT DESCRIPTION </strong></h3>
            <p>Manufacturer:	Apple</p>
            <p>Screen type:	Super Retina OLED</p>
            <p>Screen size:	6.5 inches</p>
            <p>Screen resolution:	1242 x 2688 pixel</p>
            <p>Operating system:	iOS</p>
            <p>Chipset:	Apple A12 Bionic 6 nhân</p>
            <p>GPU:	Apple GPU 4 nhân</p>
            <p>Cache / Ram:	64 GB, 4 GB RAM</p>
            <p>Internal memory:	256 GB</p>
            <p>Rear camera:	12 MP</p>
            <p>Front camera:	7 MP</p>
            <p style={{marginRight:30}}>In terms of appearance, Apple iPhone XS Max 64GB is not different from the iPhone X when owning a topless screen, using stainless steel frame and polished glass back. The four corners are also rounded to create a better grip. Products are equipped with three traditional colors of silver, gray and gold for users to choose.</p>
            <p style={{marginRight:30}}>Apple iPhone XS Max 64GB owns a large screen up to 6.5 inches but the size is still very neat (smaller than the iPhone 8 Plus 5.5 inch screen) thanks to the optimization of the border. The screen has a resolution of 1242 x 2688 pixels with Super Retina HD standard, pixel density of 458 ppi on OLED panels, bringing images very sharp and precise. In addition, the device is equipped with HDR10 display technology, Dolby Vision scanning frequency is increased to 120 Hz on par with iPad Pro.</p>
            <View style={{width:600, height:300}}>
                <img style={{ height:400, display: 'block',marginLeft:'auto',marginRight:'auto',marginBottom: 10}} className="img-fluid" src="http://image.nghenhinvietnam.vn/w1024/Uploaded/2018/pdgft/2018_09_21/xsmax/iphone_xs_max_20_brnv.jpg" alt="Sample image"/>
            </View>
              <p style={{marginRight:30}}>Apple iPhone XS Max 64GB is high-performance thanks to being equipped with Bionic A12 chip manufactured on 7 nm process, combining machine learning technology and intelligent artificial intelligence. Thereby, for daily use tasks extremely fast, smooth operation. Besides, 4GB RAM and huge memory in 64GB comfortable data storage, games, 4K movies ...</p>
              <p style={{marginRight:30}}>Apple iPhone XS Max 64GB still uses the 12MP dual camera cluster, but TrueTone flash has been upgraded to better balance the light. At the same time, the camera is also upgraded with a font correction feature that makes it easy to capture true moments from time to time. In addition, the front camera of the device has 7MP resolution, which features face detection and Full HD video recording capabilities, delivers perfect quality photos and videos.</p>
              <View style={{width:600, height:300}}>
                <img style={{ height:400, display: 'block',marginLeft:'auto',marginRight:'auto',marginBottom: 10}} className="img-fluid" src="https://cdn.idropnews.com/wp-content/uploads/2018/09/14114222/Win-an-iPhone-XS-Max-iDrop-News-Apple-iPhone-XS-Max-Giveaway.jpg" alt="Sample image"/>
            </View>
              <p style={{marginRight:30}}>Apple iPhone XS Max 64GB has been upgraded to IP68 waterproof and dustproof standard, giving users complete peace of mind when taking photos, filming, listening to music or listening to an important call between heavy rain.</p>
              <View style={{width:600, height:300}}>
                <img style={{ height:400, display: 'block',marginLeft:'auto',marginRight:'auto',marginBottom: 10}} className="img-fluid" src="https://cdn.mobilesyrup.com/wp-content/uploads/2018/09/iphone-xs-iphone-xs-max-header-1.jpg" alt="Sample image"/>
            </View>
              <p style={{marginRight:30}}>Where to buy cheap Apple iPhone XS Max 64GB with a good warranty? Come to CellphoneS, the nationwide phone retail system will now provide Apple iPhone XS Max 64GB customers at the earliest possible time when the manufacturer launches along with selling extremely attractive prices. , extremely good after sales service. For remote customers wishing to purchase products, please refer to CellphoneS 'free shopping and payment service. In particular, for new products launched, customers can deposit money online in advance to prioritize receiving machines and own many attractive gifts.</p>
            <h3 className="font-weight-bold mb-3 p-0" ><strong>Address </strong></h3>
            <p style={{marginTop:-10, marginBottom:20}}>538 Cach Mang Thang 8, Ward 11, District 3, Ho Chi Minh City, Vietnam</p>
            <View style={{width:600, height:300}}>
                <img style={{ height:400, display: 'block',marginLeft:'auto',marginRight:'auto',marginBottom: 10}} className="img-fluid" src="https://reservation.booking.expert/api/googlemap.png?h=bh94zklv&lang=vi-vn&marker=red&size=1280x550&zoom=15" alt="Sample image"/>
            </View>
        </div>
      </Card>
    );
  }
}

ProductCotent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCotent);