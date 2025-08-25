import {createTheme} from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: "light",
        text:
            {
                primary: "#FFFFFF",
                secondary: "#FFFFFF",
            },
        primary: {
            main: "#FFFFFF",
            light: "#FFFFFF",
            dark: "#FFFFFF",
        }
    },
    typography: {
        h4: {
            background: "linear-gradient(45deg, #FFFFFF, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        },
        h6: {
            background: "linear-gradient(to right, #FFFFFF, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        }
    },
    components: {
        MuiTypography:
            {
                styleOverrides: {
                    root: {
                        color: "#FFFFFF"
                    }
                }
            },
    }

});