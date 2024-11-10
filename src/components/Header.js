import React from 'react';
import useDeviceType from './DeviceType';
const Header = () => {
const isMobile = useDeviceType()
    return <>
        <header>
            { !isMobile ? <><h1><span class="primary-color">C</span>handra<span class="primary-color">deep</span> Kanumalla</h1><p>Front-End Developer based in Hyderabad</p></> : 
            <><h3><span class="primary-color">C</span>handra<span class="primary-color">deep</span> Kanumalla</h3><p>Front-End Developer based in Hyderabad</p></>}
        </header>
    </>
};

export default Header