import { createTheme, experimental_sx as sx } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#000000",
    },
    error: {
      main: "#FF0000",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          width: "100%",
          backgroundColor: "#173F5F",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: 0,
          },
        },
      },
    },
    MuiTextField: {},
  },
});

export default muiTheme;
