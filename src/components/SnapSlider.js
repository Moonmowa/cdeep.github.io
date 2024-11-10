import React, { useState, useRef, useEffect } from 'react';
import '../styles/SnapSlider.scss';
import ProfileSummary from '../pages/ProfileSummary';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
// import Blog from '../pages/Blogs';
// import Contact from '../pages/Contact';
import useDeviceType from './DeviceType';

const CustomSnapSlider = () => {
  const isMobile = useDeviceType()
  const snapPositions = [0.10, 0.3, 0.5, 0.7, 0.9];
  const [activeSnap, setActiveSnap] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isLabelActive, setIsLabelActive] = useState(0); // Track which label is active
  const sliderRef = useRef(null);
  const contentRef = useRef(null);

  const handleSnapClick = (index) => {
    if (isDragging) return;
    setActiveSnap(index);
    const section = contentRef.current.children[index];
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsLabelActive(index); // Show the label when clicked
  };

  const handleDragStart = () => setIsDragging(true);

  const handleDrag = (e) => {
    if (!isDragging) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const offsetX = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    const positionRatio = offsetX / rect.width;

    const closestIndex = snapPositions.reduce((closest, pos, idx) =>
      Math.abs(pos - positionRatio) < Math.abs(snapPositions[closest] - positionRatio)
        ? idx
        : closest,
      0
    );
    setActiveSnap(closestIndex);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const section = contentRef.current.children[activeSnap];
    section.scrollIntoView({ behavior: 'smooth' });
  };
  
  const contentHeaders = ['Profile Summary', 'Skills', 'Professional Experience', 'Blogs', 'Contact Me'];

  useEffect(() => {
    const handleScroll = () => {
      const sectionInView = Array.from(contentRef.current.children).findIndex((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight / 2;
      });
  
      if (sectionInView !== -1) {
        setActiveSnap(sectionInView);
        setIsLabelActive(sectionInView);  // Activate the corresponding label
      }
    };
  
    const contentEl = contentRef.current;
    contentEl.addEventListener('scroll', handleScroll);
    
    // Initial scroll check in case content is already in view
    handleScroll();
  
    return () => contentEl.removeEventListener('scroll', handleScroll);
  }, []);
  

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => handleDrag(e);
    const handleMouseUp = () => handleDragEnd();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  // Font Awesome icons classes for mobile view
  const iconClasses = [
    'fas fa-user', 'fas fa-cogs', 'fas fa-briefcase', 'fas fa-blog', 'fas fa-envelope'
  ];

  return (
    <div className="slider-wrapper">
      <div className="slider-container" ref={sliderRef} onMouseDown={handleDragStart}>
        {snapPositions.map((position, index) => (
          <div
            key={index}
            className={`snap-point ${activeSnap === index ? 'active' : ''} ${index >= 3 ? 'disabled' : ''}`}
            style={{ left: `${position * 100}%` }}
            onClick={() => index <= 3 ? handleSnapClick(index): null}
          />
        ))}
        {snapPositions.map((position, index) => (
          <div
            key={`label-${index}`}
            className={`snap-label ${isLabelActive === index ? 'active' : ''} ${index >= 3 ? 'disabled' : ''}`}
            style={{ left: `${position * 100}%` }}
            onClick={() => index <= 3 ? handleSnapClick(index): null}
          >
            <i className={`snap-icon ${iconClasses[index]}`}></i>
            {!isMobile && <span>{contentHeaders[index]}</span>}
          </div>
        ))}
      </div>
      {isMobile && <div className='content-header-sm'>
        <h2>{contentHeaders[activeSnap]}</h2>
      </div>}
      <div className="content-container" ref={contentRef}>
        <div className={`content-section ${activeSnap === 0 ? 'active-content' : ''}`}><ProfileSummary /></div>
        <div className={`content-section ${activeSnap === 1 ? 'active-content' : ''}`}><Skills /></div>
        <div className={`content-section ${activeSnap === 2 ? 'active-content' : ''}`}><Projects /></div>
        {/* <div className={`content-section ${activeSnap === 3 ? 'active-content' : ''}`}><Blog /></div>
        <div className={`content-section ${activeSnap === 4 ? 'active-content' : ''}`}><Contact /></div> */}
      </div>
    </div>
  );
};

export default CustomSnapSlider;
