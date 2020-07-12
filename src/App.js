import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";

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

// Util
import themeFile from "./util/theme";
import AuthRoute from "./util/authRoute";

const theme = createMuiTheme(themeFile);

let authenticated = false;
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    authenticated = false;
  } else {
    authenticated = true;
  }
  console.log(decodedToken);
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <AuthRoute
              exact
              path="/login"
              component={Login}
              authenticated={authenticated}
            />
            <AuthRoute
              exact
              path="/signup"
              component={Signup}
              authenticated={authenticated}
            />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
