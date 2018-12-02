import React from 'react'
import work1 from "assets/img/phone1.jpg";
import { GpsFixed } from "@material-ui/icons";
import work2 from "assets/img/gps.png";
const { compose } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require("react-google-maps");
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
/*global google*/
const MapWithAMarkerWithLabel = compose(
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 10.857278, lng: 106.752017 }}
  >
    <MarkerWithLabel
      position={{ lat: 10.857278, lng: 106.752017 }}
      labelAnchor={new google.maps.Point(0, 0)}
      labelStyle={{backgroundColor: "yellow", fontSize: "12px", padding: "2px"}}
    >
      <div>
        <p>Samsung galaxy j8</p>
        <p>12.000.000đ</p>
      </div>
    </MarkerWithLabel>
    <MarkerWithLabel
      position={{ lat: 10.855829, lng: 106.750484 }}
      labelAnchor={new google.maps.Point(0, 0)}
      labelStyle={{backgroundColor: "red", fontSize: "12px", padding: "2px"}}
    >
      <div>Nhà đất sổ hồng riêng</div>
      
    </MarkerWithLabel>
    <MarkerWithLabel
      position={{ lat: 10.851129, lng: 106.756415 }}
      labelAnchor={new google.maps.Point(0, 0)}
      labelStyle={{ backgroundColor: "blue", fontSize: "12px", padding: "2px", color: 'white' }}
    >
      <div>
        <p>Sang tiệm hớt tóc Bảo @</p>
        <p>30.000.000đ</p>
      </div>
    </MarkerWithLabel>
    <MarkerWithLabel
      icon={{
        url: work2
      }}
      position={{ lat: 10.853168, lng: 106.753165 }}
      labelAnchor={new google.maps.Point(0, 0)}
      labelStyle={{ backgroundColor: "green", fontSize: "12px", padding: "2px", color:'white' }}
    >
      <div>
        <p>Vị trí của bạn</p>
      </div>
    </MarkerWithLabel>
  </GoogleMap>
);

export default MapWithAMarkerWithLabel