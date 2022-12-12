import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

interface IAppThemeProviderProps {
  children: ReactNode;
}

const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
    const theme = createTheme({
      typography: {
        fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif'
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: `
            @font-face {
              font-family: 'Trebuchet MS';
            }
          `,
        },
      },
    });

    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    );
};

export default AppThemeProvider;
