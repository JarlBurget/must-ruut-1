import { useLocation } from 'react-router';
import { useLayoutEffect } from 'react';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top if no hash
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); // Scroll to element if hash exists
      }
    }
  }, [pathname, hash]);

  return null; // This component doesn't render anything
}

export default ScrollToTop;