import { createTheme } from "@mui/material/styles";

export const indi = {
  secondary: {
    main: "#E5253B",
    dark: "#C31C2F",
    light: "#FDE9EB",
  },
  turquoise: {
    dark: "#25A9B0",
    main: "#6ECCD1",
    light: "#D6F6F8",
  },
  silver: {
    dark: "#5E7883",
    main: "#92AAB5",
    light: "#BACED7",
  },
  primary: {
    main: "#275885",
    dark: "#143E64", // Intended for hovers
    light: "#AAC7E1",
    "50p": "#27588580",
    "4p": "#2758850A",
  },
  text: {
    primary: "#002548",
    secondary: "#92AAB5",
    disabled: "#92AAB5",
  },
};

/* Add Indi conventions to our styles */
declare module "@mui/material/styles" {
  interface PaletteColor {
    "50p"?: string;
    "4p"?: string;
  }
}

export default createTheme({
  // Calculated from https://material.io/design/typography/the-type-system.html
  typography: {
    fontFamily: ["DM Sans", "Source Sans Pro", "Helvetica Neue", "Roboto", "Arial", "sans-serif"].join(","),
    h1: {
      fontFamily: "DM Sans",
      fontWeight: 100,
      fontSize: "100px",
      letterSpacing: "-1.5px",
    },
    h2: {
      fontFamily: "DM Sans",
      fontWeight: 100,
      fontSize: "62px",
      letterSpacing: "-0.5px",
    },
    h3: {
      fontFamily: "DM Sans",
      fontWeight: 400,
      fontSize: "50px",
      letterSpacing: "0px",
    },
    h4: {
      fontFamily: "DM Sans",
      fontWeight: 400,
      fontSize: "35px",
      letterSpacing: "0.25px",
    },
    h5: {
      fontFamily: "DM Sans",
      fontWeight: 500,
      fontSize: "25px",
      letterSpacing: "0px",
    },
    h6: {
      fontFamily: "DM Sans",
      fontWeight: 500,
      fontSize: "21px",
      letterSpacing: "0.15px",
    },
    subtitle1: {
      fontFamily: "DM Sans",
      fontWeight: 400,
      fontSize: "17px",
      letterSpacing: "0.15px",
    },
    subtitle2: {
      fontFamily: "DM Sans",
      fontWeight: 500,
      fontSize: "15px",
      letterSpacing: "0.1px",
    },
    body1: {
      fontFamily: "Source Sans Pro",
      fontWeight: 400,
      fontSize: "17px",
      letterSpacing: "0.5px",
    },
    body2: {
      fontFamily: "Source Sans Pro",
      fontWeight: 400,
      fontSize: "15px",
      letterSpacing: "0.25px",
    },
    // FYI: Not using material-generated values here because it's meant for all caps
    button: {
      fontFamily: "DM Sans",
      fontWeight: 500,
      textTransform: "none",
      fontSize: "15px",
      letterSpacing: "0.1px",
    },
    caption: {
      fontFamily: "Source Sans Pro",
      fontWeight: 400,
      fontSize: "13px",
      letterSpacing: "0.4px",
    },
    overline: {
      fontFamily: "Source Sans Pro",
      fontWeight: 400,
      fontSize: "11px",
      letterSpacing: "1.5px",
    },
  },
  palette: {
    primary: indi.primary,
    secondary: indi.secondary,
    info: indi.turquoise,
    text: indi.text,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "100px",
        },
      },
    },
    // TODO: Button groups also need to be styled once we use them
    MuiDataGrid: {
      styleOverrides: {
        columnHeaderTitle: {
          // Source Sans Pro 500 weight doesn't really exist, so must do 600
          fontWeight: 600,
        },
      },
    },
  },
});
