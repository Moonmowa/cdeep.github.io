import { useState, useEffect } from 'react';

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isIpadMini, setIsIpadMini] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setIsMobile(width <= 767); // Detect mobile devices
      setIsIpadMini(width >= 768 && width <= 1024); // Detect iPad Mini range (768px to 1024px)
    };

    handleResize(); // Call it initially to set the correct state
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile, isIpadMini }; // Return both values
};

export default useDeviceType;
