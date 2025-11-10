import logo from './logo.svg';
import { Route,Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GallerySection from './components/GallerySection';
import AboutPage from './components/AboutSection';

import ScrollToTop from './components/ScrollToTop.jsx';
function App() {
  return (
    <>
    <ScrollToTop />
<Routes>
  <Route path='/' element={<LandingPage/>}></Route>
  <Route path="/gallery" element={<GallerySection />} />
  <Route path="/about" element={<AboutPage />} />
</Routes>
</>
  );
}

export default App;
