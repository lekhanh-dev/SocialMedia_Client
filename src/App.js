import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// MUI stuff
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

// Style
import "./App.css";

// Pages
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

// Components
import Navbar from "./components/navbar";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#33c9dc",
      main: "#00bcd4",
      dark: "#008394",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff6333",
      main: "#ff3d00",
      dark: "#b22a00",
      contrastText: "#fff",
    },
  },
  // form: {
  //   textAlign: "center",
  //   padding: 15,
  // },

  // TextField: {
  //   marginBottom: 20,
  // },

  // titleForm: {
  //   marginBottom: 20,
  // },

  // button: {
  //   marginTop: 20,
  //   position: "relative",
  // },

  // customError: {
  //   color: "red",
  // },

  // small: {
  //   display: "block",
  //   marginTop: 15,
  // },

  // link: {
  //   color: "#00bcd4",
  // },

  // progress: {
  //   position: "absolute",
  // },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
