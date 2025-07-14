import { useState } from 'react';

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode');  
  };

  return { isDarkMode, toggleTheme };
};

export default useTheme;
