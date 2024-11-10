import React, { useState } from 'react';
import useDeviceType from './DeviceType';
const Header = () => {
const {isMobile} = useDeviceType();
const [isBwTheme, setIsBwTheme] = useState(true);
const ThemeButton = ()=>(
  <button onClick={toggleTheme} aria-label="Toggle Theme" className="theme-toggle-button">
              <i className={`theme-icon ${isBwTheme ? 'bw' : 'matrix'}`}>
                {/* Font Awesome Terminal icon */}
                <i className="fas fa-terminal"></i>
              </i>
            </button> 
)
const toggleTheme = () => {
  setIsBwTheme((prev) => !prev);
  if (isBwTheme) {
    document.body.classList.remove('bw-theme');
  } else {
    document.body.classList.add('bw-theme');
  }
};
    return <>
        <header>
            { !isMobile ? <><h1><span class="primary-color">C</span>handra<span class="primary-color">deep </span>&nbsp; Kanumalla <ThemeButton /></h1> <p>Front-End Developer based in Hyderabad</p></> : 
            <><h3><span class="primary-color">C</span>handra<span class="primary-color">deep </span> Kanumalla <ThemeButton /></h3><p>Front-End Developer based in Hyderabad</p></>}
        </header>
    </>
};

export default Header