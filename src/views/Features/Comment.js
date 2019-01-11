// import React from "react";
// import {  MDBRow,  MDBCard, MDBCardBody,  MDBIcon} from "mdbreact";
// import red from '@material-ui/core/colors/red';
// import Card from '@material-ui/core/Card';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';

// const styles = theme => ({
//     card: {
//       width: '85%',
//       marginLeft: "auto",
//       marginRight: "auto",
//       marginTop: 20,
//     },
//     avatar: {
//       backgroundColor: red[500],
//     },
//   });
  
// class Comment extends React.Component {

//     state = { expanded: false };
//     render() {
//         const { classes } = this.props;
//   return (
//     <Card className={classes.card}>
//         <MDBCardBody className="py-0">
//           <MDBRow>
//             <div className="mdb-feed">
//               <div className="news">
//                 <div className="label" style={{display: 'inline-block'}}>
//                   <img
//                     src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg"
//                     alt=""
//                     className="rounded-circle z-depth-1-half"
//                   />
//                 </div>
//                 <div className="excerpt" style={{display: 'inline-block', marginTop: 20}}>
//                   <div className="brief">
//                     <a href="#!" className="name" style={{display: 'inline-block'}}>
//                       John Doe
//                     </a>
//                     <div className="date" style={{display: 'inline-block', marginLeft: 15}}>1 hour ago</div>
//                   </div>
//                   <div className="feed-footer">
//                     <a href="#!" className="like">
//                       <MDBIcon icon="heart" />
//                       <span>5 likes</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <div className="news">
//                 <div className="label">
//                   <img
//                     src="https://mdbootstrap.com/img/Photos/Avatars/img%20(17)-mini.jpg"
//                     alt=""
//                     className="rounded-circle z-depth-1-half"
//                   />
//                 </div>
//                 <div className="excerpt">
//                   <div className="brief">
//                     <a href="#!" className="name">
//                       Anna Smith
//                     </a> added <a href="#!">2 new illustrations</a>
//                     <div className="date">4 hours ago</div>
//                   </div>
//                   <div className="added-images">
//                     <img
//                       style={{width:112, height:75}}
//                       src="https://mdbootstrap.com/img/Photos/Others/images/71.jpg"
//                       alt=""
//                       className="z-depth-1 rounded mb-md-0 mb-2"
//                     />
//                     <img
//                       style={{width:112, height:75}}
//                       src="https://mdbootstrap.com/img/Photos/Others/images/74.jpg"
//                       alt=""
//                       className="z-depth-1 rounded"
//                     />
//                   </div>
//                   <div className="feed-footer">
//                     <a href="#!" className="like">
//                       <MDBIcon icon="heart" />
//                       <span>18 likes</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <div className="news">
//                 <div className="label">
//                   <img
//                     src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9)-mini.jpg"
//                     alt=""
//                     className="rounded-circle z-depth-1-half"
//                   />
//                 </div>
//                 <div className="excerpt">
//                   <div className="brief">
//                     <a href="#!" className="name">
//                       Danny Moore
//                     </a> added you as a friend
//                     <div href="#!" className="date">
//                       7 hours ago
//                     </div>
//                   </div>
//                   <div className="feed-footer">
//                     <a href="#!" className="like">
//                       <MDBIcon icon="heart" />
//                       <span>11 likes</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <div className="news">
//                 <div className="label">
//                   <img
//                     src="https://mdbootstrap.com/img/Photos/Avatars/img%20(18)-mini.jpg"
//                     alt=""
//                     className="rounded-circle z-depth-1-half"
//                   />
//                 </div>
//                 <div className="excerpt">
//                   <div className="brief">
//                     <a href="#!" className="name">
//                       Lili Rose
//                     </a> posted on her page
//                     <div className="date">2 days ago</div>
//                   </div>
//                   <div className="added-text">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                     Vero inventore, iste quas libero eius? Vitae sint neque
//                     animi alias sunt dolor, accusantium ducimus, non placeat
//                     voluptate.
//                   </div>
//                   <div className="feed-footer">
//                     <a href="#!" className="like">
//                       <MDBIcon icon="heart" />
//                       <span>7 likes</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <div className="news">
//                 <div className="label">
//                   <img
//                     src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20)-mini.jpg"
//                     alt=""
//                     className="rounded-circle z-depth-1-half"
//                   />
//                 </div>
//                 <div className="excerpt">
//                   <div className="brief">
//                     <a href="#!" className="name">
//                       Kate Harrison
//                     </a> added <a href="#!"> 2 new photos</a> of you
//                     <div className="date">3 days ago</div>
//                   </div>
//                   <div className="added-images">
//                     <img
//                     style={{width:112, height:75}}
//                       src="https://mdbootstrap.com/img/Photos/Others/images/29.jpg"
//                       alt=""
//                       className="z-depth-1 rounded mb-md-0 mb-2"
//                     />
//                     <img
//                     style={{width:112, height:75}}
//                       src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg"
//                       alt=""
//                       className="z-depth-1 rounded"
//                     />
//                   </div>
//                   <div className="feed-footer">
//                     <a href="#!" className="like">
//                       <MDBIcon icon="heart" />
//                       <span>53 likes</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </MDBRow>
//         </MDBCardBody>
//         </Card>
//   );
// }
// }   
// Comment.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
  
//   export default withStyles(styles)(Comment);

import React from 'react'
import { Button1, Comment, Form, Header } from 'semantic-ui-react'
import {  MDBRow,  MDBCard, MDBCardBody,  MDBIcon} from "mdbreact";
import red from '@material-ui/core/colors/red';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import SendIcon from '@material-ui/icons/Send';
import {Mask} from 'mdbreact';

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
    button: {
        margin: theme.spacing.unit,
      },
      leftIcon: {
        marginRight: theme.spacing.unit,
      },
      rightIcon: {
        marginLeft: theme.spacing.unit,
      },
      iconSmall: {
        fontSize: 20,
      },
  });
  
class CommentPage extends React.Component {

    state = { expanded: false };
    render() {
        const { classes } = this.props;
        return(
            <Card className={classes.card}>
  <Comment.Group>
    <Header as='h3' dividing style={{marginTop:10, marginLeft:20}}>
      Comments
    </Header>
    <a><Mask overlay="white-slight"/></a>
    <Comment style={{marginLeft:20}}>
      <Comment.Avatar src='https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/43951894_1884451351651332_8635442626654371840_n.jpg?_nc_cat=105&_nc_ht=scontent.fsgn5-2.fna&oh=b56a44304ec7841672b4d93fab8b172a&oe=5CA941E1' />
      <Comment.Content>
        <Comment.Author as='a'>Hiếu Phan</Comment.Author>
        <Comment.Metadata>
          <div>Hôm nay lúc 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>Qua xem hàng thấy ok nhưng không chịu bớt giá.</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Trả lời</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment style={{marginLeft:20}}>
      <Comment.Avatar src='https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/16730542_743717475787588_537705443926222997_n.jpg?_nc_cat=104&_nc_ht=scontent.fsgn5-4.fna&oh=8368f04edd4edd8c98e26a6325411bb7&oe=5C9C66CA' />
      <Comment.Content>
        <Comment.Author as='a'>Giô Na</Comment.Author>
        <Comment.Metadata>
          <div>Hôm qua lúc 12:30AM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>Hàng trả bảo hành nhưng đã hết Apple care, mọi người cẩn thận nha.</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Trả lời</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src='https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/43563947_2171004896495815_1577697618471944192_n.jpg?_nc_cat=102&_nc_ht=scontent.fsgn5-4.fna&oh=eb2defd00a0aae33f519aec789d54671&oe=5C93DF28' />
          <Comment.Content>
            <Comment.Author as='a'>Rin Trần</Comment.Author>
            <Comment.Metadata>
              <div>Vừa xong</div>
            </Comment.Metadata>
            <Comment.Text>Đó là chuyện bình thường bạn ơi!</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Trả lời</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment style={{marginLeft:20}}>
      <Comment.Avatar src='https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/48369976_1590080321137608_8552758295683661824_n.jpg?_nc_cat=100&_nc_ht=scontent.fsgn5-5.fna&oh=4a83e9fc0ad9b09e401562c61f0807b6&oe=5CAAE0A8' />
      <Comment.Content>
        <Comment.Author as='a'>Dũng Việt</Comment.Author>
        <Comment.Metadata>
          <div>5 ngày trước</div>
        </Comment.Metadata>
        <Comment.Text>Máy đẹp.</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Trả lời</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form Trả lời style={{marginLeft:20, marginTop:10}}>
      <Form.TextArea />
      <Button variant="contained" size="big" className={classes.button} style={{backgroundColor:"#2196f3", color: "#FFFFFF", marginLeft: 0, marginTop: -5}}>
        Bình Luận
        <SendIcon style={{color: "#FFFFFF", marginLeft: 5}}  />
      </Button>
    </Form>
  </Comment.Group>
  </Card>
  );
}
}   
CommentPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(CommentPage);