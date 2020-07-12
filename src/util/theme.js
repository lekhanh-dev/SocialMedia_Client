export default {
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

  typography: {
    useNextVariants: true,
  },

  // the object to be spread
  spreadThis: {
    form: {
      textAlign: "center",
      padding: 15,
    },

    TextField: {
      marginBottom: 20,
    },

    titleForm: {
      marginBottom: 20,
    },

    button: {
      marginTop: 20,
      position: "relative",
    },

    customError: {
      color: "red",
    },

    small: {
      display: "block",
      marginTop: 15,
    },

    link: {
      color: "#00bcd4",
    },

    progress: {
      position: "absolute",
    },
  },
};
