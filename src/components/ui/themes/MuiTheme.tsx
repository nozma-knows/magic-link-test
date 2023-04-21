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
          color: "#000000",
          width: "100%",
          borderRadius: "10px",
          fieldset: {
            borderWidth: 2,
            borderColor: "#000000",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderWidth: 4,
            borderColor: "#000000",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: 4,
            borderColor: "#000000",
          },
        },
      },
    },
    MuiTextField: {},
  },
});

export default muiTheme;
