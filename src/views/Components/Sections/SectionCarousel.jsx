import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image1 from "assets/img/electronic.jpg";
import image2 from "assets/img/home.jpg";
import image3 from "assets/img/motor.jpg";
import Text from "../../../components/Map/Components/Reuse/Text";

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image1}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                    <GridContainer style={{ alignItems: 'center', justifyContent: 'center', marginBottom: "2.142rem",background:'black', borderRadius:6 }} className="ml-1">
                    <LocationOn className="slick-icons" style={{ top:0 }}/>
                                <p style={{ margin: 0 }}>Lâm Phong Store : &nbsp;</p>
                                <Text type='h4-price' title={"Hàng Nhập Khẩu Chính Hãng Từ Apple"}></Text>
                              </GridContainer>
                                        </div>
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt="Second slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                    <GridContainer style={{ alignItems: 'center', justifyContent: 'center', marginBottom: "2.142rem",background:'black', borderRadius:6 }} className="ml-1">
                    <LocationOn className="slick-icons"  style={{ top:0 }}/>
                                <p style={{ margin: 0 }}>Dulux 2040 : &nbsp;</p>
                                <Text type='h4-price' title={"Ngoại Thất Cao Cấp Cho Nhà Bạn"}></Text>
                              </GridContainer>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image3}
                      alt="Third slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                    <GridContainer style={{ alignItems: 'center', justifyContent: 'center', marginBottom: "2.142rem",background:'black', borderRadius:6 }} className="ml-1">
                    <LocationOn className="slick-icons"  style={{ top:0 }}/>
                                <p style={{ margin: 0 }}>Thưởng Motor : &nbsp;</p>
                                <Text type='h4-price' title={"Xe Motor Phân Khối Lớn Chính Hãng"}></Text>
                              </GridContainer>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
