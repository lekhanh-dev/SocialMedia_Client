import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AppIcon from "../images/man.png";
import { connect } from "react-redux";
import { signupUser, clearError } from "../redux/actions/userAction";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = (theme) => ({ ...theme.spreadThis });

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      handle: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    const userData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle,
    };
    this.props.signupUser(userData, this.props.history);
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    this.props.clearError();
  }

  render() {
    const {
      classes,
      UI: { loading, errors },
    } = this.props;
    return (
      <Grid container>
        <Grid item sm xs={12} />
        <Grid item sm xs={12} className={classes.form}>
          <img src={AppIcon} alt="Signup icon" />
          <Typography variant="h4" className={classes.titleForm}>
            Signup
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              className={classes.TextField}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
              helperText={errors.email}
              error={errors.email ? true : false}
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              className={classes.TextField}
              value={this.state.password}
              onChange={this.handleChange}
              autoComplete="on"
              fullWidth
              helperText={errors.password}
              error={errors.password ? true : false}
            />
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirm password"
              className={classes.TextField}
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              autoComplete="on"
              fullWidth
              helperText={errors.confirmPassword}
              error={errors.confirmPassword ? true : false}
            />
            <TextField
              id="handle"
              name="handle"
              type="handle"
              label="Username"
              className={classes.TextField}
              value={this.state.handle}
              onChange={this.handleChange}
              autoComplete="on"
              fullWidth
              helperText={errors.handle}
              error={errors.handle ? true : false}
            />
            {errors.error && (
              <Typography variant="body2" className={classes.customError}>
                {errors.error}
              </Typography>
            )}
            {errors.general && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={loading}
            >
              Signup
              {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
            <small className={classes.small}>
              If you have an account, login{" "}
              <Link to="/login" className={classes.link}>
                here
              </Link>
            </small>
          </form>
        </Grid>
        <Grid item sm xs={12} />
      </Grid>
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

const mapActionToProps = {
  signupUser,
  clearError,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(Signup));
