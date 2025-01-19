// General MUI theme
import {extendTheme} from "@mui/material";

const extTheme = extendTheme({
    colorSchemeSelector: 'class',
    typography: {
        fontFamily: ['sans-serif', 'Inter'],
        smButton: {
            border: '1px solid #b3b3b3',
            paddingTop: 3,
            paddingBottom: 3,
            backgroundColor: 'transparent',
            color: 'var(--ifm-color-primary)',
        }
    },
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: "hsl(240, 48%, 47%)",
                },
                background: {
                    paper: "hsl(240, 15%, 95%)",
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    main: "hsl(240, 90%, 70%)",
                },
                background: {
                    paper: "hsl(210, 3%, 15%)",
                },
            },
        },
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                message: {
                    p: {
                        marginBottom: 0,
                    }
                },
            },
        },
        MuiTypography: {
            defaultProps: {
                component: 'div',
            },
        },
        MuiCardActionArea: {
            styleOverrides: {
                root: {
                    textDecoration: 'none !important',
                },
            },
        },
    },
});

export default extTheme;
