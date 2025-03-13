
import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const prevLocation = useRef(location.pathname);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      if (elementRef.current) {
        elementRef.current.classList.add('opacity-0', 'translate-y-4');
        
        setTimeout(() => {
          if (elementRef.current) {
            elementRef.current.classList.remove('opacity-0', 'translate-y-4');
            elementRef.current.classList.add('opacity-100', 'translate-y-0');
            prevLocation.current = location.pathname;
          }
        }, 50);
      }
    }
  }, [location.pathname]);

  return (
    <div 
      ref={elementRef} 
      className="min-h-screen transition-all duration-500 ease-out opacity-100 translate-y-0"
    >
      {children}
    </div>
  );
};

export default PageTransition;
