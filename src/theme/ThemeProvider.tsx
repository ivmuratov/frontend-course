import { FC, useState } from 'react'
import ThemeContext, { LOCAL_STORAGE_THEME_KEY, Theme} from './ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);  

  return (
    <ThemeContext.Provider value={{
        theme: theme,
        setTheme: setTheme,
      }}>
        {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;