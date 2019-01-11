import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
render() {
return (
<Footer color="blue" className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="6">
      <h5 className="title">Cam Kết</h5>
      <p style={{width: 500}}><center>
        Mang tới những sản phẩm chất lượng nhất cho bạn và những người xung quanh. Nhằm mang lại nguồn thu nhập và phát triển xã hội giàu đẹp mạnh.
        </center>
      </p>
      </Col>
      <Col md="6">
      <h5 className="title">Điều khoản và chính sách</h5>
      <ul>
        <li className="list-unstyled">
          <a href="https://www.facebook.com/anle.daniel">Điều khoản</a>
        </li>
        <li className="list-unstyled">
          <a href="https://www.facebook.com/anle.daniel">Chính sách</a>
        </li>
        <li className="list-unstyled">
          <a href="https://www.facebook.com/anle.daniel">Về chúng tôi</a>
        </li>
        <li className="list-unstyled">
          <a href="https://www.facebook.com/anle.daniel">Trợ giúp</a>
        </li>
      </ul>
      </Col>
    </Row>
  </Container>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="https://www.facebook.com/anle.daniel"> AnLe.com </a>
    </Container>
  </div>
</Footer>
);
}
}

export default FooterPage;