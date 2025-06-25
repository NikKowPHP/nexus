// ROO-AUDIT-TAG :: 2.1_ui_component_library.md :: Implement theme provider
import React, { createContext, useContext, ReactNode } from 'react';
import { Theme, defaultTheme } from '../lib/theme';

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
// ROO-AUDIT-TAG :: 2.1_ui_component_library.md :: END