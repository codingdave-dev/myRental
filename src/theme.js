import { createMuiTheme } from "@material-ui/core/styles";

const themeMain = "#00ACA0";

const themeBackground = "#F8F8F8";

const textGrey = "#4d4d4d";
const hyperlinkBlue = '#0000EE'


// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: themeMain,
    },
    common: {
      background: themeBackground,
      hyperlink: hyperlinkBlue
    },
  },
  typography: {
    tab: {
        fontFamily: 'Raleway',
        textTransform: 'none',
        fontWeight: '500',
        fontSize: '1rem',
    },

    h3: {
      fontFamily: 'Raleway'
    },
    h4: {
      fontFamily: 'Raleway'
    },
    subtitle1: {
      fontFamily: 'Raleway'
    },


    caption: {
      color: textGrey,
      fontFamily: "Raleway",
      lineHeight: 1,
    },
  },
  overrides: {
    // MuiFormLabel: {
    //     root: {
    //         fontSize: '1rem'
    //     }
    // },
    // MuiInputLabel: {
    //     formControl: {
    //         top: '-7px'
    //     }
    // },
    // MuiOutlinedInput: {
    //     input: {
    //         padding: 8
    //     }
    // },
    // MuiRating: {
    //     root: {
    //         color: themeMain
    //     }
    // },
  },
});

export default theme;
