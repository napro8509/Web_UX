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
        <div style={{ marginTop:20, marginLeft:30}}>
            <h3 className="font-weight-bold mb-3 p-0" ><strong>MÔ TẢ SẢN PHẨM </strong></h3>
            <p>Hãng sản xuất:	Apple</p>
            <p>Loại màn hình:	Super Retina OLED</p>
            <p>Kích thước màn hình:	6.5 inches</p>
            <p>Độ phân giải màn hình:	1242 x 2688 pixel</p>
            <p>Hệ điều hành:	iOS</p>
            <p>Chipset:	Apple A12 Bionic 6 nhân</p>
            <p>GPU:	Apple GPU 4 nhân</p>
            <p>Bộ nhớ đệm / Ram:	64 GB, 4 GB RAM</p>
            <p>Bộ nhớ trong:	256 GB</p>
            <p>Camera sau:	12 MP</p>
            <p>Camera trước:	7 MP</p>
            <p style={{marginRight:30}}>Về ngoại hình, Apple iPhone XS Max 64GB không có sự khác biệt so với iPhone X khi sở hữu màn hình khuyết đỉnh, sử dụng khung thép không rỉ và mặt lưng kính bóng bẩy. Bốn góc cũng được bo tròn tạo cảm giác cầm nắm tốt hơn. Sản phẩm được trang bị ba màu truyền thống là bạc, xám và vàng cho người dùng lựa chọn.</p>
            <p style={{marginRight:30}}>Apple iPhone XS Max 64GB sở hữu màn hình lớn lên đến 6.5 inch nhưng kích thước vẫn rất gọn gàng (nhỏ hơn cả iPhone 8 Plus màn hình 5.5 inch) nhờ việc tối ưu hóa phần viền. Màn hình có độ phân giải 1242 x 2688 pixels đạt chuẩn Super Retina HD, mật độ điểm ảnh 458 ppi trên tấm nền OLED, mang lại những hình ảnh rất sắc nét và chính xác. Bên cạnh đó, máy được trang bị công nghệ hiển thị HDR10, Dolby Vision tần số quét được tăng lên 120 Hz ngang với iPad Pro.</p>
            <View style={{width:600, height:300}}>
                <img style={{width:800, height:400, display: 'block',marginLeft:'auto',marginRight:'auto',marginBottom: 10}} className="img-fluid" src="http://image.nghenhinvietnam.vn/w1024/Uploaded/2018/pdgft/2018_09_21/xsmax/iphone_xs_max_20_brnv.jpg" alt="Sample image"/>
            </View>
              <p style={{marginRight:30}}>Apple iPhone XS Max 64GB có hiệu suất cao nhờ được trang bị chip A12 Bionic sản xuất trên tiến trình 7 nm, kết hợp công nghệ máy học và trí tuệ nhân tạo thông minh. Qua đó, cho các tác vụ sử dụng hằng ngày hoạt động vô cùng nhanh chóng, mượt mà Bên cạnh đó, RAM 4GB và bộ nhớ trong cực khủng 64GB thoải mái lưu trữ dữ liệu, game, phim 4K…</p>
              <p style={{marginRight:30}}>Apple iPhone XS Max 64GB vẫn sử dụng cụm camera kép 12MP, nhưng flash TrueTone đã được nâng cấp để cân bằng ánh sáng tốt hơn. Đồng thời, camera cũng được nâng cấp với tính năng điều chỉnh độ xóa phông giúp bạn dễ dàng bắt trọn chân thực từng khoảnh khắc. Bên cạnh đó, camera trước của máy sở hữu độ phân giải 7MP có tính năng nhận diện khuôn mặt cùng khả năng quay video Full HD, mang lại những bức ảnh, thước phim có chất lượng hoàn hảo.</p>
              <View style={{width:600, height:300}}>
                <img style={{width:800, height:400, display: 'block',marginLeft:'auto',marginRight:'auto',marginBottom: 10}} className="img-fluid" src="https://cdn.idropnews.com/wp-content/uploads/2018/09/14114222/Win-an-iPhone-XS-Max-iDrop-News-Apple-iPhone-XS-Max-Giveaway.jpg" alt="Sample image"/>
            </View>
              <p style={{marginRight:30}}>Apple iPhone XS Max 64GB được nâng cấp tiêu chuẩn chống bụi – chống nước IP68, giúp người dùng hoàn toàn yên tâm khi mang ra hồ bơi chụp ảnh, quay phim, nghe nhạc hay cần nghe một cuộc gọi quan trọng giữa trời mưa lớn.</p>
              <View style={{width:600, height:300}}>
                <img style={{width:800, height:400, display: 'block',marginLeft:'auto',marginRight:'auto',marginBottom: 10}} className="img-fluid" src="https://cdn.mobilesyrup.com/wp-content/uploads/2018/09/iphone-xs-iphone-xs-max-header-1.jpg" alt="Sample image"/>
            </View>
              <p style={{marginRight:30}}>Mua Apple iPhone XS Max 64GB giá rẻ cùng chế độ bảo hành tốt ở đâu? Hãy đến với CellphoneS, hệ thống bán lẻ điện thoại trên toàn quốc hiện sẽ cung cấp cho khách hàng sản phẩm Apple iPhone XS Max 64GB trong thời gian sớm nhất khi được nhà sản xuất ra mắt cùng với việc bán mức giá vô cùng hấp dẫn, chế độ hậu mãi vô cùng tốt. Đối với các khách hàng ở xa có nhu cầu mua sản phẩm có thể tham khảo qua dịch vụ mua hàng và thanh toán tận nơi miễn phí của CellphoneS. Đặc biệt, đối với những sản phẩm mới ra mắt, khách hàng có thể đặt cọc online trước một khoản tiền để ưu tiên nhận máy và sở hữu nhiều phần quà hấp dẫn.</p>
            <h3 className="font-weight-bold mb-3 p-0" ><strong>Địa chỉ </strong></h3>
            <p style={{marginTop:-10, marginBottom:20}}>538 Cách Mạng Tháng 8, Phường 11, Quận 3, Hồ Chí Minh, Việt Nam</p>
            <View style={{width:600, height:300}}>
                <img style={{width:1200, height:400, display: 'block',marginLeft:'auto',marginRight:'auto',marginBottom: 10}} className="img-fluid" src="https://reservation.booking.expert/api/googlemap.png?h=bh94zklv&lang=vi-vn&marker=red&size=1280x550&zoom=15" alt="Sample image"/>
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