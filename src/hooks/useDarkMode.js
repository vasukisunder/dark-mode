import   useLocalStorage   from "./useLocalStorage.js";
import { useEffect } from 'react';


const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage(false);
	useEffect(() => {
        darkMode ? document.body.classList.add("dark-mode"): document.body.classList.remove("dark-mode");
      }, [darkMode]);
	return [darkMode, setDarkMode];
}
export default useDarkMode;