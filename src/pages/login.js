import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AppIcon from "../images/man.png";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

// redux stuff
import { connect } from "react-redux";
import { loginUser, clearError } from "../redux/actions/userAction";

const styles = (theme) => ({ ...theme.spreadThis });

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData, this.props.history);
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
          <img src={AppIcon} alt="Login icon" />
          <Typography variant="h4" className={classes.titleForm}>
            Login
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
            {errors.error && (
              <Typography variant="body2" className={classes.customError}>
                {errors.error}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={loading}
            >
              Login
              {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
            <small className={classes.small}>
              If you don't have an account, sign up{" "}
              <Link to="/signup" className={classes.link}>
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

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionToProps = {
  loginUser,
  clearError,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(Login));
