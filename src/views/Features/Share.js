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

class Share extends React.Component {
  state = { expanded: false };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <div style={{marginTop: 10, marginBottom:10}}>
        <h3 className="font-weight-bold mb-3 p-0" style={{display:'inline-block', marginTop:10, marginLeft:10}}><strong>Chia sẻ tin đăng này cho bạn bè: </strong></h3>
        <img style={{display:'inline-block', marginLeft:20}} alt="facebook" src="https://static.chotot.com.vn/storage/chotot-icons/svg/circle-facebook.svg" height="40" width="40" />
        <img style={{display:'inline-block', marginLeft:10}} alt="messenger" src="https://static.chotot.com.vn/storage/chotot-icons/svg/circle-messenger.svg" height="40" width="40"></img>
        <img style={{display:'inline-block', marginLeft:10}} alt="zalo" src="https://static.chotot.com.vn/storage/chotot-icons/svg/circle-zalo.svg" height="40" width="40"></img>
        <img style={{display:'inline-block', marginLeft:10}} alt="copy" src="https://static.chotot.com.vn/storage/chotot-icons/svg/circle-copylink.svg" height="40" width="40"></img>
        </div>
      </Card>
    );
  }
}

Share.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Share);