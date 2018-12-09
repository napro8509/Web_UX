import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
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
import profile from "assets/img/faces/anle.jpg";
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
import { Apps, CloudDownload, Map, LocationSearching, Filter, Category, Search } from "@material-ui/icons";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import SectionCarousel from "../Components/Sections/SectionCarousel";
import SearchProduct from 'components/Custom/Search.jsx';
import MapWithASearchBox from "../../components/Map/SearchBox";
import MapWithADirectionsRenderer from "../../components/Map/DirectionsRenderer";
import MapWithAMarkerWithLabel from "../../components/Map/MarkerLabel";
import Drawer from "../../components/Map/Drawer";

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showDrawer: false
    }
  }
  closeDrawer(){
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

  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
        <Parallax filter image={require("assets/img/bg_new.jpg")}>
          <div className={classes.container} style={{ zIndex: 100 }}>
            <div style={{ flex: 1, height: "100%", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
              <h3 style={{ color: 'white', fontFamily: "Roboto Slab" }}>FREE MARKETPLACE FOR EVERYONE</h3>
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
          <GridContainer justify="center">
            <h2 className={classes.title}>Searching for nearest seller</h2>
            <GridItem xs={12} sm={12} md={12} style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }}>
                <CustomInput
                  labelText="What do you want to buy?"
                  id="float"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
                <Button color="rose" round style={{ alignSelf: 'center' }} onClick={() => this.openDrawer()}>
                  <Search style={classes.icon} />Search
               </Button>
              </div>
            </GridItem>
              <div style={{padding:10, borderRadius:10, borderWidth:1, borderColor:'red',borderStyle:'solid'}}>
              <p>Iphone x</p>
              </div>
            <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }}>
              <GridItem xs={12} sm={12} md={4}>
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
              <GridItem xs={12} sm={12} md={4}>
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
              <GridItem xs={12} sm={12} md={4}>
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
            </div>
          </GridContainer>
          <div style={{position:'relative' }}>
          <MapWithAMarkerWithLabel
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAVfQ1cotCxn5mHuuYmp9tdf45YIYpd8Ww&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `800px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          <Drawer show={this.state.showDrawer} onClose={this.closeDrawer.bind(this)}
          />
          </div>

          <div>
            <div className={classes.container}>
              <SectionCarousel />
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="warning"
                    tabs={[
                      {
                        tabButton: "Studio",
                        tabIcon: Camera,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <img
                                alt="..."
                                src={studio5}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio4}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Work",
                        tabIcon: Palette,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work5}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Favorite",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
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
