import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/PhonelinkRing";
import Favorite from "@material-ui/icons/DirectionsCar";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";

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
import colorado from "assets/img/colorado.jpg";
import janus from "assets/img/janus.jpg";
import innova from "assets/img/Innova.jpg";
import taurus from 'assets/img/taurus.jpg';
import sirius from 'assets/img/sirius_hanquoc.jpg';
import galaxys7 from 'assets/img/galaxys7.jpg';
import exciter from 'assets/img/exciter.JPG';

import { Category, Search } from "@material-ui/icons";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import SectionCarousel from "../Components/Sections/SectionCarousel";
import SearchProduct from 'components/Custom/Search.jsx';
import Paginations from "components/Pagination/Pagination.jsx";
import MapWithAMarkerWithLabel from "../../components/Map/MarkerLabel";
import Drawer, { numbers } from "../../components/Map/Drawer";
import ProductPage from "../Features/ProductPage";
import './styles.css'
import Item from "../../components/Map/Components/Item";
import Text from "../../components/Map/Components/Reuse/Text";
class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showDrawer: false,
      selectedIndex: 1,
      width: window.innerWidth,
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  closeDrawer() {
    console.log("CloseDrawer")
    this.setState({
      showDrawer: false
    })
  }

  openDrawer() {
    console.log('openDrawer')
    this.setState({
      showDrawer: !this.state.showDrawer
    })
  }

  onClick(item, index) {
    console.log(item.target.innerText)
    console.log(index)
  }

  indexChange = (index) => {
    this.setState({ selectedIndex: index })
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    const { selectedIndex } = this.state;
    const listItems = numbers.map((number,index) =>
    index<11 ? <Item item={number} /> : null
    );
    const listItems1 = numbers.map((number,index) =>
    index>10 ? <Item item={number} /> : null
  );
    return (
      <div className="wrapper">
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
        <Parallax className="paralax" filter image={require("assets/img/bg_new.jpg")}>
          <div className={classes.container} style={{ zIndex: 100 }}>
            <div style={{ flex: 1, height: "100%", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
              <h3 style={{ color: 'white', fontFamily: "Roboto Slab", textAlign: 'center' }}>FREE MARKETPLACE FOR EVERYONE</h3>
              <SearchProduct />
              <div style={{ width: "50%" }}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={6}>
                    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', alignSelf: 'flex-end' }}>
                      <p style={{ color: 'white', textAlign: 'center' }}>You have something to sell?</p>
                      <Button color="rose" round>
                        Sell Now
          </Button>
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                      <p style={{ color: 'white', textAlign: 'center' }}>You want to buy something?</p>
                      <Button color="info" round>
                        Find Now
          </Button>
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <GridContainer justify="center" align="center">
            <GridItem xs={12} sm={12} md={12}>
              <h2 className={classes.title}>Searching for nearest seller</h2>
            </GridItem>
            <GridItem xs={9} sm={6} md={6}>
              <CustomInput
                labelText="What do you want to buy?"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              >
              </CustomInput>
            </GridItem>
            <Button variant="outlined" color="rose" round onClick={() => this.openDrawer()} style={{ alignSelf: 'center' }}>
              <Search style={classes.icon} />Search
              </Button>
            <GridContainer xs={9} sm={12} md={6}>
              <div className="container">
                {/* <Grid item  style={{borderRadius: 10, borderWidth: 1, borderColor: 'red', borderStyle: 'solid' }}>
                <p style={{marginLeft:10, marginRight: 10, marginTop: 5, marginBottom:5}}>Iphone x</p>
              </Grid>
              <Grid item  style={{borderRadius: 10, borderWidth: 1, borderColor: 'red', borderStyle: 'solid' }}>
                <p style={{marginLeft:10, marginRight: 10, marginTop: 5, marginBottom:5}}>Iphone x</p>
              </Grid>
              <Grid item  style={{borderRadius: 10, borderWidth: 1, borderColor: 'red', borderStyle: 'solid' }}>
                <p style={{marginLeft:10, marginRight: 10, marginTop: 5, marginBottom:5}}>Iphone x</p>
              </Grid> */}
                <div className="d-flex md-6 example-parent" >
                  <div className="col-example p-1" style={{ borderRadius: 10, borderWidth: 1, background: selectedIndex === 1 ? '#00acc1' : 'white', borderStyle: 'solid', borderColor: '#00acc1', cursor: 'pointer' }} onClick={() => this.indexChange(1)}>
                    <p style={{ margin: 0, color: selectedIndex === 1 ? 'white' : 'black' }}>Iphone X</p>
                  </div>
                  <div className="mr-auto col-example p-1" style={{ borderRadius: 10, borderWidth: 1, borderColor: '#00acc1', borderStyle: 'solid', background: selectedIndex === 2 ? '#00acc1' : 'white', cursor: 'pointer' }} onClick={() => this.indexChange(2)}>
                    <p style={{ margin: 0, color: selectedIndex === 2 ? 'white' : 'black' }}>Samsung Galaxy Note 8</p>
                  </div>
                  <div className="col-example p-1" style={{ borderRadius: 10, borderWidth: 1, borderColor: '#00acc1', borderStyle: 'solid', background: selectedIndex === 3 ? '#00acc1' : 'white', cursor: 'pointer' }} onClick={() => this.indexChange(3)}>
                    <p style={{ margin: 0, color: selectedIndex === 3 ? 'white' : 'black' }}>3 Km</p>
                  </div>
                  <div className="col-example p-1" style={{ borderRadius: 10, borderWidth: 1, borderColor: '#00acc1', borderStyle: 'solid', background: selectedIndex === 4 ? '#00acc1' : 'white', cursor: 'pointer' }} onClick={() => this.indexChange(4)}>
                    <p style={{ margin: 0, color: selectedIndex === 4 ? 'white' : 'black' }}>5 Km</p>
                  </div>
                  <div className="col-example p-1" style={{ borderRadius: 10, borderWidth: 1, borderColor: '#00acc1', borderStyle: 'solid', background: selectedIndex === 5 ? '#00acc1' : 'white', cursor: 'pointer' }} onClick={() => this.indexChange(5)}>
                    <p style={{ margin: 0, color: selectedIndex === 5 ? 'white' : 'black' }}>10 Km</p>
                  </div>
                </div>
              </div>
            </GridContainer>
            <div className="container" >
              <GridContainer xs={12} sm={12} md={12} style={{ marginLeft: 0, marginRight: 0 }}>
                <GridItem xs={12} sm={12} md={4} align="center">
                  <CustomDropdown
                    hoverColor="info"
                    dropdownHeader="Dropdown Header"
                    buttonIcon="settings"
                    buttonText="Địa điểm"
                    buttonProps={{
                      className: classes.navLink,
                      color: "transparent"
                    }}
                    dropdownList={[
                      "Action",
                      "Another action",
                      "Something else here",
                      { divider: true },
                      "Separated link",
                      { divider: true },
                      "One more separated link"
                    ]}
                    onClick={this.onClick.bind(this)}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4} align="center">
                  <CustomDropdown
                    hoverColor="info"
                    dropdownHeader="Loại sản phẩm"
                    buttonIcon={() => <Category style={classes.icon} />}
                    buttonText="Danh mục"
                    buttonProps={{
                      className: classes.navLink,
                      color: "transparent"
                    }}
                    dropdownList={[
                      "Điện tử",
                      "Nhà",
                      "Xe",
                      { divider: true },
                      "Quần áo",
                      { divider: true },
                      "Trang sức"
                    ]}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4} align="center">
                  <CustomDropdown
                    hoverColor="info"
                    dropdownHeader="Dropdown Header"
                    buttonIcon="filter"
                    buttonText="Lọc"
                    buttonProps={{
                      className: classes.navLink,
                      color: "transparent"
                    }}
                    dropdownList={[
                      "Action",
                      "Another action",
                      "Something else here",
                      { divider: true },
                      "Separated link",
                      { divider: true },
                      "One more separated link"
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </GridContainer>
          <div style={{ position: 'relative' }}>
            <MapWithAMarkerWithLabel
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAVfQ1cotCxn5mHuuYmp9tdf45YIYpd8Ww&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `800px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
            <Drawer show={this.state.showDrawer} onClose={this.closeDrawer.bind(this)}
            />
          </div>
          <div className="container" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <GridContainer md={12} style={{ marginLeft: 0, marginRight: 0 }}>
              <GridItem xs={12} sm={12} md={12} align="center">
                <h2 className={classes.title}>Sản phẩm nổi bật nhất</h2>
              </GridItem>
              <GridItem md={6} style={isMobile ? { padding: 0 } : { padding: 20 }}>
                {listItems}
              </GridItem>
              <GridItem md={6} style={isMobile ? { padding: 0 } : { padding: 20 }}>
                {listItems1}
              </GridItem>
            </GridContainer>
          </div>
          <div className="d-flex justify-content-center m-4">
            <Paginations
              pages={[
                { text: 1 },
                { text: "..." },
                { text: 5 },
                { text: 6 },
                { active: true, text: 7 },
                { text: 8 },
                { text: 9 },
                { text: "..." },
                { text: 12 }
              ]}
            />
          </div>

          <div>
            <div className={classes.container}>
              <GridItem xs={12} sm={12} md={12} align="center">
                <h2 className={classes.title}>Sản phẩm từ doanh nghiệp</h2>
              </GridItem>
              <SectionCarousel />
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12} align="center">
                  <h2 className={classes.title}>Danh Mục Sản Phẩm Được Yêu Thích</h2>
                </GridItem>
                <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="warning"
                    tabs={[
                      {
                        tabButton: "Quần Áo",
                        tabIcon: Camera,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                              <GridContainer style={{ alignItems: 'center', justifyContent: 'center', marginBottom: "2.142rem" }} className="ml-1">
                                <p style={{ margin: 0 }}>Áo Khoác Âu Mỹ: &nbsp;</p>
                                <Text type='h4-price' title={"900.000 đ"}></Text>
                              </GridContainer>
                              <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses}
                              />
                              <GridContainer style={{ alignItems: 'center', justifyContent: 'center', marginBottom: "2.142rem" }} className="ml-1">
                                <p style={{ margin: 0 }}>Set đồ thể thao: &nbsp;</p>
                                <Text type='h4-price' title={"1.500.000 đ"}></Text>
                              </GridContainer>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio5}
                                className={navImageClasses}
                              />
                              <GridContainer style={{ alignItems: 'center', justifyContent: 'center', marginBottom: "2.142rem" }} className="ml-1">
                                <p style={{ margin: 0 }}>Áo Len Hàn Quốc: &nbsp;</p>
                                <Text type='h4-price' title={"500.000 đ"}></Text>
                              </GridContainer>
                              <img
                                alt="..."
                                src={studio4}
                                className={navImageClasses}
                              />
                              <GridContainer style={{ alignItems: 'center', justifyContent: 'center', marginBottom: "2.142rem" }} className="ml-1">
                                <p style={{ margin: 0 }}>Túi Da Cá Sấu: &nbsp;</p>
                                <Text type='h4-price' title={"750.000 đ"}></Text>
                              </GridContainer>
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Điện Thoại",
                        tabIcon: Palette,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <GridContainer style={{ alignItems: 'center', justifyContent: 'center', marginBottom: "2.142rem" }} className="ml-1">
                                <p style={{ margin: 0 }}>Xiaomi Note 3 Pro: &nbsp;</p>
                                <Text type='h4-price' title={"4.750.000 đ"}></Text>
                              </GridContainer>
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <GridContainer style={{ alignItems: 'center', justifyContent: 'center', marginBottom: "2.142rem" }} className="ml-1">
                                <p style={{ margin: 0 }}>Samsung Galaxy Note 8: &nbsp;</p>
                                <Text type='h4-price' title={"16.000.000 đ"}></Text>
                              </GridContainer>
                              <img
                                alt="..."
                                src={work3}
                                className={navImageClasses}
                              />
                              <GridContainer style={{ alignItems: 'center', justifyContent: 'center', marginBottom: "2.142rem" }} className="ml-1">
                                <p style={{ margin: 0 }}>Iphone 6s: &nbsp;</p>
                                <Text type='h4-price' title={"5.550.000 đ"}></Text>
                              </GridContainer>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <GridContainer style={{ alignItems: 'center', justifyContent: 'center', marginBottom: "2.142rem" }} className="ml-1">
                                <p style={{ margin: 0 }}>Huawei P20 Premium &nbsp;</p>
                                <Text type='h4-price' title={"6.750.000 đ"}></Text>
                              </GridContainer>
                              <img
                                alt="..."
                                src={work5}
                                className={navImageClasses}
                              />
                              <GridContainer style={{ alignItems: 'center', justifyContent: 'center', marginBottom: "2.142rem" }} className="ml-1">
                                <p style={{ margin: 0 }}>Lenovo Pentium : &nbsp;</p>
                                <Text type='h4-price' title={"4.050.000 đ"}></Text>
                              </GridContainer>
                              <img
                                alt="..."
                                src={galaxys7}
                                className={navImageClasses}
                              />
                              <GridContainer style={{ alignItems: 'center', justifyContent: 'center', marginBottom: "2.142rem" }} className="ml-1">
                                <p style={{ margin: 0 }}>Samsung Galaxy S7 : &nbsp;</p>
                                <Text type='h4-price' title={"8.050.000 đ"}></Text>
                              </GridContainer>
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Xe Cộ",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={sirius}
                                className={navImageClasses}
                              />
                              <GridContainer style={{ alignItems: 'center', justifyContent: 'center', marginBottom: "2.142rem" }} className="ml-1">
                                <p style={{ margin: 0 }}>Honda Sirius : &nbsp;</p>
                                <Text type='h4-price' title={"14.050.000 đ"}></Text>
                              </GridContainer>
                              <img
                                alt="..."
                                src={innova}
                                className={navImageClasses}
                              />
                              <GridContainer style={{ alignItems: 'center', justifyContent: 'center', marginBottom: "2.142rem" }} className="ml-1">
                                <p style={{ margin: 0 }}>Innova 2016 : &nbsp;</p>
                                <Text type='h4-price' title={"500.000.000 đ"}></Text>
                              </GridContainer>
                              <img
                                alt="..."
                                src={exciter}
                                className={navImageClasses}
                              />
                              <GridContainer style={{ alignItems: 'center', justifyContent: 'center', marginBottom: "2.142rem" }} className="ml-1">
                                <p style={{ margin: 0 }}>Exciter 2016 : &nbsp;</p>
                                <Text type='h4-price' title={"35.000.000 đ"}></Text>
                              </GridContainer>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={taurus}
                                className={navImageClasses}
                              />
                              <GridContainer style={{ alignItems: 'center', justifyContent: 'center', marginBottom: "2.142rem" }} className="ml-1">
                                <p style={{ margin: 0 }}>Taurus : &nbsp;</p>
                                <Text type='h4-price' title={"10.000.000 đ"}></Text>
                              </GridContainer>
                              <img
                                alt="..."
                                src={colorado}
                                className={navImageClasses}
                              />
                              <GridContainer style={{ alignItems: 'center', justifyContent: 'center', marginBottom: "2.142rem" }} className="ml-1">
                                <p style={{ margin: 0 }}>Colorado : &nbsp;</p>
                                <Text type='h4-price' title={"450.000.000 đ"}></Text>
                              </GridContainer>
                              <img
                                alt="..."
                                src={janus}
                                className={navImageClasses}
                              />
                              <GridContainer style={{ alignItems: 'center', justifyContent: 'center', marginBottom: "2.142rem" }} className="ml-1">
                                <p style={{ margin: 0 }}>Jannus: &nbsp;</p>
                                <Text type='h4-price' title={"23.000.000 đ"}></Text>
                              </GridContainer>
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(HomePage);
