import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Small from "components/Typography/Small.jsx";
import Danger from "components/Typography/Danger.jsx";
import Warning from "components/Typography/Warning.jsx";
import Success from "components/Typography/Success.jsx";
import Info from "components/Typography/Info.jsx";
import Primary from "components/Typography/Primary.jsx";
import Muted from "components/Typography/Muted.jsx";
import Quote from "components/Typography/Quote.jsx";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";
import image1 from "assets/img/faces/avatar.jpg";
class Text extends React.Component {

    getTag(classes, title, type, image) {
        console.log("props", classes, title)
        switch (type) {
            case 'h1':
                return (
                    <h1 className={classes.title} style={{ margin: 0 }}>{title}</h1>
                )
            case 'h2':
                return (
                    <h2 className={classes.title}>{title}</h2>
                )
            case 'h3':
                return (
                    <h3 className={classes.title}>{title}</h3>
                )
            case 'h4':
                return (
                    <h4 className={classes.title} style={{ margin: 0 }}>{title}</h4>
                )
            case 'h4-price':
                return (
                    <h4 className={classes.title} style={{ margin: 0, color:"red" }}>{title}</h4>
                )
            case 'p':
                return (
                    <p style={{ margin: 0 }}>{title}</p>
                )
            case 'image':
                return (
                    <img
                        src={image}
                        alt="..."
                        className={classes.imgRounded + " " + classes.imgFluid}
                        style={{maxWidth:200, maxHeight: 200, inlineSize:'contain' }}
                    />
                )
            case 'info':
            return (
                <Info>
                {title}
                </Info>
            )
            default:
                return (
                    <h4 className={classes.title}>{title}</h4>
                )
        }
    }

    render() {
        const { classes, title, type, image } = this.props;
        return (
            <div>
                {this.getTag(classes, title, type, image || image1)}
            </div>
        );
    }
}

export default withStyles(typographyStyle)(Text);
