import React from 'react'
import work1 from "assets/img/phone1.jpg";
import { GpsFixed } from "@material-ui/icons";
import work2 from "assets/img/gps.png";
import car from "assets/img/icon/car.png";
import home from "assets/img/icon/home.png"; 
import phone from "assets/img/icon/phone.png"; 
import  './styles.css'
import Text from './Components/Reuse/Text';
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
      labelStyle={{fontSize: "12px", padding: "2px"}}
      icon={{
        url: phone
      }}
    >
      <div className="boxShadow">
      <Text type='h4' title={"Samsung Galaxy S8"}></Text>
      <Text type='p' title={"Máy mới mua, dùng ngon, phụ kiện đầy đủ"}></Text>
      </div>
    </MarkerWithLabel>
    <MarkerWithLabel
      position={{ lat: 10.855829, lng: 106.750484 }}
      labelAnchor={new google.maps.Point(0, 0)}
      icon={{
        url: home
      }}
    >
      <div className="boxShadow">
      <Text type='h4' title="Nhà đất 100m2"></Text>
      <Text type='p' title="Nhà 2 mặt tiền, rộng rãi ..."></Text>
      </div>
    </MarkerWithLabel>
    <MarkerWithLabel
      position={{ lat: 10.851129, lng: 106.756415 }}
      labelAnchor={new google.maps.Point(0, 0)}
      icon={{
        url: car
      }}
    >
      <div className="boxShadow">
      <Text type='h4' title={"Xe oto Toyota Mescedes Suzuki"}></Text>
      <Text type='p' title="Xe nhập nguyên chiếc từ campuchia..."></Text>
      </div>
    </MarkerWithLabel>
    <MarkerWithLabel
      icon={{
        url: work2
      }}
      position={{ lat: 10.853168, lng: 106.753165 }}
      labelAnchor={new google.maps.Point(0, 0)}
    >
      <div className="boxShadow">
      <Text type='h4' title="Tiệm hớt tóc bảo @"></Text>
      <Text type='p' title="Ngay trung tâm quận 1, cần sang gấp"></Text>
      </div>
    </MarkerWithLabel>
  </GoogleMap>
);

export default MapWithAMarkerWithLabel