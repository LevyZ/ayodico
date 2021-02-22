import React, { useState, useEffect } from 'react'
import "../../sass/components/_DarkMode.scss"

// import Sun from "../../img/darkmode/modejour.svg"
// import Moon from "../../img/darkmode/modenuit.svg"

export default function DarkMode() {
  const [themeState, setThemeState] = useState(false);

  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') {
      setThemeState(true);
    }
  }, []);

  useEffect(() => {
    if (themeState) {
      localStorage.setItem('Theme', 'dark');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark-mode');
    }
  }, [themeState]);

  return (
    <>
      <button onClick={() => setThemeState(!themeState)} id="DarkMode"  title="Changer le thème du site">
        {themeState ?
          <div>
            <div><p>Mode Jour</p></div>
          </div>
          :
          <div>
            <div><p>Mode Nuit</p></div>
          </div>
        }
      </button>
    </>
  );
}
