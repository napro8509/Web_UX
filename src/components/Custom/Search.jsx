import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import navbarsStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Search from "@material-ui/icons/Search";

class SearchProduct extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
            <CustomInput
              white
              inputRootCustomClasses={classes.inputRootCustomClasses}
              formControlProps={{
                className: classes.formControl
              }}
              inputProps={{
                placeholder: "Finding something",
                inputProps: {
                  "aria-label": "Search",
                  className: classes.searchInput
                }
              }}
            />
            <Button justIcon round color="white">
              <Search className={classes.searchIcon} />
            </Button>
          </div>
        );
    }
}

export default withStyles(navbarsStyle)(SearchProduct);