// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import red from '@material-ui/core/colors/red';
// import Rating from 'react-rating'
// import {  MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";

// const styles = theme => ({
//   card: {
//     width: '85%',
//     marginLeft: "auto",
//     marginRight: "auto",
//     marginTop: 20,
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// });

// class UserInformation extends React.Component {
//   state = { expanded: false };

//   getValueOfRating = (value) =>{
//     //
//   }

//   onclickRating = () =>{

//   }

//   handleExpandClick = () => {
//     this.setState(state => ({ expanded: !state.expanded }));
//   };

//   render() {
//     const { classes } = this.props;
//     return (
//       <Card className={classes.card} style={{height: 110}}>
//            <section className="my-5">
//               <MDBRow style={{marginTop:-40}}>
//                 <MDBCol lg="5" className="text-center text-lg-left" style={{marginLeft: 70}}>
//                   <div>
//                     <h5 className="font-weight-bold mb-3" style={{fontSize : 40, display: 'inline-block'}}>4.7</h5>
//                     <h5 className="font-weight-bold mb-3" style={{fontSize : 20, display: 'inline-block', color:'gray'}}>/5</h5>
//                   </div>
//                   <Rating readonly={true} initialRating={4.7} style={{color:'#2196f2', marginLeft: -40, marginTop: -50}} emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" />
//                 </MDBCol>
//                 <MDBCol lg="7" style={{marginLeft: 250, marginTop: -50}}>
//                       <MDBRow className="mb-3">
//                         <MDBCol xl="10" md="11" size="10">
//                           <div style={{marginLeft: -40, marginTop: -5}}>
//                             <p style={{fontSize : 20, display: 'inline-block', marginRight: 5}}>Your rating:</p>
//                             <Rating onChange={this.getValueOfRating} initialRating={4.5} style={{color:'#2196f2',display: 'inline-block'}} emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" />  
//                             <MDBBtn onClick={this.onclickRating} color="primary" style={{display: 'inline-block', height:30, padding: '5px 15px', marginTop: -10, marginLeft: 10}}>Vote <MDBIcon icon="send-o" className="ml-1" /></MDBBtn>
//                           </div>
//                     </MDBCol>
//                   </MDBRow>
//                 </MDBCol>
//               </MDBRow>
//       </section>
//       </Card>
      
//     );
//   }
// }

// UserInformation.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(UserInformation);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import red from '@material-ui/core/colors/red';
import Rating from 'react-rating'
import {  MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";

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

class UserInformation extends React.Component {
  state = { expanded: false };

  getValueOfRating = (value) =>{
    //
  }

  onclickRating = () =>{

  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card} style={{height: 110}}>
           <section className="my-5">
              <MDBRow style={{marginTop:-40}}>
                <MDBCol lg="5" className="text-center text-lg-left" style={{marginLeft: 70}}>
                  <div>
                    <h5 className="font-weight-bold mb-3" style={{fontSize : 40, display: 'inline-block'}}>4.7</h5>
                    <h5 className="font-weight-bold mb-3" style={{fontSize : 20, display: 'inline-block', color:'gray'}}>/5</h5>
                  </div>
                  <Rating readonly={true} initialRating={4.7} style={{color:'#2196f2', marginLeft: -40, marginTop: -50}} emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" />
                </MDBCol>
                <MDBCol lg="7" style={{marginLeft: 250, marginTop: -50}}>
                      <MDBRow className="mb-3">
                        <MDBCol xl="10" md="11" size="10">
                          <div style={{marginLeft: -40, marginTop: -5}}>
                            <p style={{fontSize : 20, display: 'inline-block', marginRight: 5}}>Đánh giá của bạn:</p>
                            <Rating onChange={this.getValueOfRating} initialRating={4.5} style={{color:'#2196f2',display: 'inline-block'}} emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" />  
                            <MDBBtn onClick={this.onclickRating} color="primary" style={{display: 'inline-block', height:30, padding: '5px 15px', marginTop: -10, marginLeft: 10}}>Đánh giá <MDBIcon icon="send-o" className="ml-1" /></MDBBtn>
                          </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
      </section>
      </Card>
      
    );
  }
}

UserInformation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserInformation);