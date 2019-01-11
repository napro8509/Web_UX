// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import red from '@material-ui/core/colors/red';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

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

//   handleExpandClick = () => {
//     this.setState(state => ({ expanded: !state.expanded }));
//   };

//   render() {
//     const { classes } = this.props;

//     return (
//       <Card className={classes.card}>
//         <CardHeader
//           avatar={
//             <Avatar aria-label="Recipe" src={this.props.userImage} className={classes.avatar} style={{ borderRadius: 0 }}>
//               {this.props.userName}
//             </Avatar>
//           }
//           title={this.props.userName}
//           subheader={this.props.position}
//         />
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
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t31.0-8/27625120_882816965176696_3691964581085205429_o.jpg?_nc_cat=106&_nc_ht=scontent.fsgn5-6.fna&oh=e06d1e78f220926a5e697cdc90fad2a7&oe=5C9F9046" className={classes.avatar} style={{ borderRadius: 0 }}>
              Ấn Lê
            </Avatar>
          }
          title="Lê Hoang Thiên Ấn (Bán Chuyên)"
          subheader="Liên hệ: 0973043044"
        />
      </Card>
    );
  }
}

UserInformation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserInformation);