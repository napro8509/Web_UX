// import React, { Component } from 'react';
// import { Container, Row, Col, Fa, Button } from 'mdbreact';

// class FeaturesPage extends Component {
//   render() {
//     return(
//       <Container>
//         <section className="my-5">
//           <h2 className="h1-responsive font-weight-bold text-center my-5">Why is it so quality and prestige?</h2>
//           <p className="lead grey-text w-responsive text-center mx-auto mb-5">Chúng tôi luôn cố gắng mang đến cho khách hàng sự an tâm, tin tưởng khi sử dụng sản phẩm. Sản phẩm được cung cấp cho khách hàng luôn đảm bảo chất lượng nghiêm ngặt và đảm bảo sự trung thành của khách hàng và đối tác.</p>
//           <Row>
//             <Col md="4" className="md-0 mb-5">
//               <Row>
//                 <Col lg="2" md="3" size="2">
//                   <Fa icon="bullhorn" size="2x" className="blue-text"/>
//                 </Col>
//                 <Col lg="10" md="9" size="10">
//                   <h4 className="font-weight-bold">Marketing</h4>
//                   <p className="grey-text">Chúng tôi luôn cố gắng mang đến cho khách hàng sự an tâm, tin tưởng khi sử dụng sản phẩm. Sản phẩm được cung cấp cho khách hàng luôn đảm bảo chất lượng nghiêm ngặt và đảm bảo sự trung thành của khách hàng và đối tác.</p>
//                   <Button color="primary" size="sm">LIÊN HỆ CHÚNG TÔI</Button>
//                 </Col>
//               </Row>
//             </Col>
//             <Col md="4" className="md-0 mb-5">
//               <Row>
//                 <Col lg="2" md="3" size="2">
//                   <Fa icon="cogs" size="2x" className="pink-text"/>
//                 </Col>
//                 <Col lg="10" md="9" size="10">
//                   <h4 className="font-weight-bold">Partner</h4>
//                   <p className="grey-text">Chúng tôi luôn cố gắng mang đến cho khách hàng sự an tâm, tin tưởng khi sử dụng sản phẩm. Sản phẩm được cung cấp cho khách hàng luôn đảm bảo chất lượng nghiêm ngặt và đảm bảo sự trung thành của khách hàng và đối tác.</p>
//                   <Button color="pink" size="sm">LIÊN HỆ CHÚNG TÔI</Button>
//                 </Col>
//               </Row>
//             </Col>
//             <Col md="4" className="md-0 mb-5">
//               <Row>
//                 <Col lg="2" md="3" size="2">
//                   <Fa icon="dashboard" size="2x" className="purple-text"/>
//                 </Col>
//                 <Col lg="10" md="9" size="10">
//                   <h4 className="font-weight-bold">Support</h4>
//                   <p className="grey-text">Chúng tôi luôn cố gắng mang đến cho khách hàng sự an tâm, tin tưởng khi sử dụng sản phẩm. Sản phẩm được cung cấp cho khách hàng luôn đảm bảo chất lượng nghiêm ngặt và đảm bảo sự trung thành của khách hàng và đối tác.</p>
//                   <Button color="purple" size="sm">LIÊN HỆ CHÚNG TÔI</Button>
//                 </Col>
//               </Row>
//             </Col>
//           </Row>
//         </section>
//       </Container>
//     );
//   };
// }

// export default FeaturesPage;

import React, { Component } from 'react';
import { Container, Row, Col, Fa, Button } from 'mdbreact';

class FeaturesPage extends Component {
  render() {
    return(
      <Container>
        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Tại sao sản phẩm chất lượng và uy tín như vậy?</h2>
          <p className="lead grey-text w-responsive text-center mx-auto mb-5">Chúng tôi luôn cố gắng mang đến cho khách hàng sự an tâm, tin tưởng khi sử dụng sản phẩm. Sản phẩm được cung cấp cho khách hàng luôn đảm bảo chất lượng nghiêm ngặt và đảm bảo sự trung thành của khách hàng và đối tác.</p>
          <Row>
            <Col md="4" className="md-0 mb-5">
              <Row>
                <Col lg="2" md="3" size="2">
                  <Fa icon="bullhorn" size="2x" className="blue-text"/>
                </Col>
                <Col lg="10" md="9" size="10">
                  <h4 className="font-weight-bold">Quảng Cáo</h4>
                  <p className="grey-text">Chúng tôi luôn cố gắng mang đến cho khách hàng sự an tâm, tin tưởng khi sử dụng sản phẩm. Sản phẩm được cung cấp cho khách hàng luôn đảm bảo chất lượng nghiêm ngặt và đảm bảo sự trung thành của khách hàng và đối tác.</p>
                  <Button color="primary" size="sm">LIÊN HỆ CHÚNG TÔI</Button>
                </Col>
              </Row>
            </Col>
            <Col md="4" className="md-0 mb-5">
              <Row>
                <Col lg="2" md="3" size="2">
                  <Fa icon="cogs" size="2x" className="pink-text"/>
                </Col>
                <Col lg="10" md="9" size="10">
                  <h4 className="font-weight-bold">Đối Tác</h4>
                  <p className="grey-text">Chúng tôi luôn cố gắng mang đến cho khách hàng sự an tâm, tin tưởng khi sử dụng sản phẩm. Sản phẩm được cung cấp cho khách hàng luôn đảm bảo chất lượng nghiêm ngặt và đảm bảo sự trung thành của khách hàng và đối tác.</p>
                  <Button color="pink" size="sm">LIÊN HỆ CHÚNG TÔI</Button>
                </Col>
              </Row>
            </Col>
            <Col md="4" className="md-0 mb-5">
              <Row>
                <Col lg="2" md="3" size="2">
                  <Fa icon="dashboard" size="2x" className="purple-text"/>
                </Col>
                <Col lg="10" md="9" size="10">
                  <h4 className="font-weight-bold">Hỗ Trợ</h4>
                  <p className="grey-text">Chúng tôi luôn cố gắng mang đến cho khách hàng sự an tâm, tin tưởng khi sử dụng sản phẩm. Sản phẩm được cung cấp cho khách hàng luôn đảm bảo chất lượng nghiêm ngặt và đảm bảo sự trung thành của khách hàng và đối tác.</p>
                  <Button color="purple" size="sm">LIÊN HỆ CHÚNG TÔI</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Container>
    );
  };
}

export default FeaturesPage;