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

  // CSS for Profile
  spreadProfile: {
    paper: {
      padding: "1rem",
    },
    buttons: {
      marginTop: ".5rem",
      textAlign: "center",
      "& .btn": {
        margin: ".5rem",
      },
    },
    profile: {
      textAlign: "center",
      "& .image-wrapper": {
        textAlign: "center",
        position: "relative",
      },
      "& .profile-image": {
        width: 200,
        height: 200,
        objectFit: "cover",
        maxWidth: "100%",
        borderRadius: "50%",
      },
      "& .button": {
        position: "absolute",
        top: "80%",
        left: "70%",
      },
      "& .profile-details": {
        textAlign: "center",
        "& span, svg": {
          verticalAlign: "middle",
        },
        "& a": {
          color: "#00bcd4",
        },
      },
      "& hr": {
        border: "none",
        margin: "0 0 10px 0",
      },
    },
  },
};
