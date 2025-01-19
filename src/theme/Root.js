import React, {useEffect, useState} from "react";
import {ThemeProvider} from "@mui/material/styles";
import theme from "@site/src/components/MuiTheme";
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import {ColorModeProvider} from "@docusaurus/theme-common/internal";
import BrowserOnly from "@docusaurus/BrowserOnly";

function useDataTheme() {
    const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme'));

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setTheme(document.documentElement.getAttribute('data-theme'));
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme'],
        });

        return () => observer.disconnect();
    }, []);

    return theme;
}

export default function Root({ children }) {

    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                theme.defaultColorScheme= useDataTheme();
                return (
                    <ColorModeProvider>
                        <InitColorSchemeScript />
                        <ThemeProvider theme={theme}>{children}</ThemeProvider>
                    </ColorModeProvider>
                )
            }}
        </BrowserOnly>
    );
}
