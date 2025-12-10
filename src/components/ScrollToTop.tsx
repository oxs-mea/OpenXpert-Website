import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//component added to scroll to top of page 
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}