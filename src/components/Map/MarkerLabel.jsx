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
    <MarkerWithLabel
  position={{ lat: 10.284829, lng: 106.503484 }}
  labelAnchor={new google.maps.Point(0, 0)}
  icon={{
    url: home
  }}
>
  <div className="boxShadow">
  <Text type='h4' title="Sirius HQ"></Text>
  <Text type='p' title="Sirius HQ Màu trắng xanh GP, bánh tăm thắng đĩa"></Text>
  </div>
</MarkerWithLabel>
<MarkerWithLabel
      position={{ lat: 10.280829, lng: 106.503484 }}
      labelAnchor={new google.maps.Point(0, 0)}
      icon={{
        url: home
      }}
    >
      <div className="boxShadow">
      <Text type='h4' title="Taurus 2011"></Text>
      <Text type='p' title="Taurus 2011.trùm mền còn khá mới nguyên zin"></Text>
      </div>
    </MarkerWithLabel>
    <MarkerWithLabel
      position={{ lat: 10.480829, lng: 106.623484 }}
      labelAnchor={new google.maps.Point(0, 0)}
      icon={{
        url: home
      }}
    >
      <div className="boxShadow">
      <Text type='h4' title="Xe Innova"></Text>
      <Text type='p' title="Xe Innova gia đình cần bán để đổi Fortuner dầu"></Text>
      </div>
    </MarkerWithLabel>
    <MarkerWithLabel
      position={{ lat: 10.489829, lng: 106.523484 }}
      labelAnchor={new google.maps.Point(0, 0)}
      icon={{
        url: home
      }}
    >
      <div className="boxShadow">
      <Text type='h4' title="Yamaha Janus"></Text>
      <Text type='p' title="Yamaha Janus Bstp 1đơi chủ nữ chạy"></Text>
      </div>
    </MarkerWithLabel>
    <MarkerWithLabel
      position={{ lat: 10.689829, lng: 106.563484 }}
      labelAnchor={new google.maps.Point(0, 0)}
      icon={{
        url: home
      }}
    >
      <div className="boxShadow">
      <Text type='h4' title="CHEVROLET COLORADO"></Text>
      <Text type='p' title="CHEVROLET COLORADO Ưa Đãi T1, Dịp Tết Kỷ Hợi. HOT"></Text>
      </div>
    </MarkerWithLabel>
    <MarkerWithLabel
      position={{ lat: 10.029829, lng: 106.063484 }}
      labelAnchor={new google.maps.Point(0, 0)}
      icon={{
        url: home
      }}
    >
      <div className="boxShadow">
      <Text type='h4' title="FDS 28 Daikin Inverter"></Text>
      <Text type='p' title="FDS 28 Daikin Inverter 1.5hp ion 95%"></Text>
      </div>
    </MarkerWithLabel>
    <MarkerWithLabel
      position={{ lat: 10.129829, lng: 106.093484 }}
      labelAnchor={new google.maps.Point(0, 0)}
      icon={{
        url: home
      }}
    >
      <div className="boxShadow">
      <Text type='h4' title="Bán bộ đi văng gõ"></Text>
      <Text type='p' title="Đi văng gõ (sập) dài 3m25 rộng 1m97(2 tấm ghép lại) dày 20cm, chân đuc tay tứ quí. Xem hang tai tp HCM"></Text>
      </div>
    </MarkerWithLabel>
    <MarkerWithLabel
      position={{ lat: 10.229829, lng: 106.193484 }}
      labelAnchor={new google.maps.Point(0, 0)}
      icon={{
        url: home
      }}
    >
      <div className="boxShadow">
      <Text type='h4' title="Nồi cơm nội địa Nhật"></Text>
      <Text type='p' title="Nồi cơm nội địa Nhật mới 98%( secondhand )"></Text>
      </div>
    </MarkerWithLabel>
    <MarkerWithLabel
      position={{ lat: 10.289829, lng: 106.593484 }}
      labelAnchor={new google.maps.Point(0, 0)}
      icon={{
        url: home
      }}
    >
      <div className="boxShadow">
      <Text type='h4' title="Bàn ăn cherry 4 ghế hàng xuất khẩu"></Text>
      <Text type='p' title="Bàn ăn cherry gỗ cao su xuất khẩu"></Text>
      </div>
    </MarkerWithLabel>
    <MarkerWithLabel
      position={{ lat: 10.289829, lng: 106.593484 }}
      labelAnchor={new google.maps.Point(0, 0)}
      icon={{
        url: home
      }}
    >
      <div className="boxShadow">
      <Text type='h4' title="tủ lạnh sAMSUNG Inverter 265L"></Text>
      <Text type='p' title="tủ lạnh sAMSUNG Inverter 265L mới 89%, bh 6 tháng, ngăn rộng, chạy êm, mát lạnh nhanh, tiện dụng"></Text>
      </div>
    </MarkerWithLabel>
    <MarkerWithLabel
      position={{ lat: 10.925829, lng: 106.860484 }}
      labelAnchor={new google.maps.Point(0, 0)}
      icon={{
        url: home
      }}
    >
      <div className="boxShadow">
      <Text type='h4' title="iPhone 7"></Text>
      <Text type='p' title="Apple iPhone 7 Plus Quốc Tế | Có Bán Trả Góp"></Text>
      </div>
    </MarkerWithLabel>
    <MarkerWithLabel
      position={{ lat: 10.925829, lng: 106.860484 }}
      labelAnchor={new google.maps.Point(0, 0)}
      icon={{
        url: home
      }}
    >
      <div className="boxShadow">
      <Text type='h4' title="Galaxy S7"></Text>
      <Text type='p' title="Đăng bán em Galaxy S7 2sim máy xài ngon bao lỗi"></Text>
      </div>
    </MarkerWithLabel>
    <MarkerWithLabel
      position={{ lat: 10.929829, lng: 106.863484 }}
      labelAnchor={new google.maps.Point(0, 0)}
      icon={{
        url: home
      }}
    >
      <div className="boxShadow">
      <Text type='h4' title="Galaxy J5"></Text>
      <Text type='p' title="Đăng bán em Galaxy J5 2sim máy xài ngon bao lỗi"></Text>
      </div>
    </MarkerWithLabel>
    <MarkerWithLabel
      position={{ lat: 10.929829, lng: 106.863484 }}
      labelAnchor={new google.maps.Point(0, 0)}
      icon={{
        url: home
      }}
    >
      <div className="boxShadow">
      <Text type='h4' title="LENOVO"></Text>
      <Text type='p' title="LENOVO 14+Xoay 360+Máy đời mới+Đẹp keng+i3 ^7"></Text>
      </div>
    </MarkerWithLabel>
    <MarkerWithLabel
      position={{ lat: 10.975829, lng: 106.850484 }}
      labelAnchor={new google.maps.Point(0, 0)}
      icon={{
        url: home
      }}
    >
      <div className="boxShadow">
      <Text type='h4' title="Điện thoại Iphone 6s"></Text>
      <Text type='p' title="Apple iPhone 6S Plus Quốc Tế"></Text>
      </div>
    </MarkerWithLabel>
  </GoogleMap>
);

export default MapWithAMarkerWithLabel