import DesktopPage from './components/desktop/DesktopPage.jsx';
import DesktopDemosPage from './components/desktop/DesktopDemosPage.jsx';
import MobilePage from './components/mobile/MobilePage.jsx';
import MobileDemosPage from './components/mobile/MobileDemosPage.jsx';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import ScrollToTop from './utils/ScrollToTop';
import AppProvider from './context/AppProvider';

function App() {
  const [isDesktop, setIsDesktop] = useState(null);
  
  const handleWindowResize = () => {
    setIsDesktop(window.innerWidth >= 768);
  }

  useEffect(() => {
    if (isDesktop === null) {
      handleWindowResize();
      window.addEventListener("resize", handleWindowResize);
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      }
    }
  }, []);

  const MobileRoutes = () => (
    <Routes>
      <Route path="/" element={<MobilePage />} />
      <Route path="/demos" element={<MobileDemosPage />} />
    </Routes>
  );

  const DesktopRoutes = () => (
    <Routes>
      <Route path="/" element={<DesktopPage />} />
      <Route path="/demos" element={<DesktopDemosPage />} />
    </Routes>
  );

  return (
    <AppProvider>
      <BrowserRouter>
      <ScrollToTop />
        {isDesktop ? <DesktopRoutes /> : <MobileRoutes />}
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
