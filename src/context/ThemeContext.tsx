import React, { createContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'dark'; // Only allow 'dark'

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void; // Still provided, but does nothing
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {}, // No-op
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    // Always set to dark and store in localStorage
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  const toggleTheme = () => {
    // Optional: You can leave this empty or display a toast saying "Dark mode only"
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


//the below code is for both light and dark mode


// import React, { createContext, useState, useEffect, ReactNode } from 'react';

// type Theme = 'light' | 'dark';

// interface ThemeContextType {
//   theme: Theme;
//   toggleTheme: () => void;
// }

// export const ThemeContext = createContext<ThemeContextType>({
//   theme: 'light',
//   toggleTheme: () => {},
// });

// interface ThemeProviderProps {
//   children: ReactNode;
// }

// export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
//   const [theme, setTheme] = useState<Theme>('light');

//   useEffect(() => {
//     // Check for user preferences in local storage or system preferences
//     const savedTheme = localStorage.getItem('theme') as Theme | null;
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
//     if (savedTheme) {
//       setTheme(savedTheme);
//     } else if (prefersDark) {
//       setTheme('dark');
//     }
//   }, []);

//   useEffect(() => {
//     // Apply theme class to document and save preference
//     if (theme === 'dark') {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
    
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };