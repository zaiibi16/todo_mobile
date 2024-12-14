import React from 'react';

import Colors from './Colors';
import Typography from './Typography';

const ThemeContext = React.createContext({
  fonts: Typography,
  colors: Colors,
});

interface IThemeProvider {
  children: React.ReactNode;
}
export const ThemeProvider = ({children}: IThemeProvider) => {
  const themeData = React.useMemo(() => {
    const theme = {fonts: Typography, colors: Colors};
    return theme;
  }, []);

  return (
    <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
  );
};
export const useTheme = () => React.useContext(ThemeContext);
