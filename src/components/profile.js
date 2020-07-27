import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import dayjs from "dayjs";

// MUI stuff
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

// Icon
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CalendarToday from "@material-ui/icons/CalendarToday";
import EditIcon from "@material-ui/icons/Edit";

const styles = (theme) => ({ ...theme.spreadProfile });

class Profile extends Component {
  handleImageChange = (event) => {};
  handleEditPicture = () => {
    const inputFile = document.getElementById("imageInput");
    inputFile.click();
  };

  render() {
    const {
      classes,
      user: {
        authenticated,
        credentials: { handle, imageUrl, createdAt },
        loading,
      },
    } = this.props;
    let profileMarkup = !loading ? (
      authenticated ? (
        <Paper className={classes.paper}>
          <div className={classes.profile}>
            <div className="image-wrapper">
              <img src={imageUrl} alt="avatar" className="profile-image" />
              <input
                type="file"
                name="file"
                id="imageInput"
                onChange={this.handleImageChange}
                hidden="hidden"
              />
              <Tooltip title="Edit profile picture" placement="top">
                <IconButton className="button" onClick={this.handleEditPicture}>
                  <EditIcon color="primary" />
                </IconButton>
              </Tooltip>
            </div>
            <div className="profile-details">
              <MuiLink
                component={Link}
                to={`/users/${handle}`}
                color="primary"
                variant="h5"
              >
                @{handle}
              </MuiLink>
              <hr />
              <Fragment>
                <LocationOnIcon color="primary" /> <span>VietNam</span>
                <hr />
              </Fragment>
              <Fragment>
                <CalendarToday color="primary" />{" "}
                <span>Joined {dayjs(createdAt).format("MMM YYYY")}</span>
                <hr />
              </Fragment>
            </div>
          </div>
        </Paper>
      ) : (
        <Paper className={classes.paper}>
          <Typography variant="body2" align="center">
            You don't have a account, please
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/login"
              className="btn"
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/signup"
              className="btn"
            >
              Signup
            </Button>
          </div>
        </Paper>
      )
    ) : (
      <p>loading...</p>
    );
    return profileMarkup;
  }
}

Profile.protoType = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(Profile));
