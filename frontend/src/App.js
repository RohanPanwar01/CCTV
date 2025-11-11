import logo from './logo.svg';
import { Route,Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GallerySection from './components/GallerySection';
import AboutPage from './components/AboutSection';
import ContactPage from './components/ContactSection.js';
import ScrollToTop from './components/ScrollToTop.jsx';
import ProductPage from './components/ProductPage.js';
function App() {
  return (
    <>
    <ScrollToTop />
<Routes>
  <Route path='/' element={<LandingPage/>}></Route>
  <Route path="/gallery" element={<GallerySection />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/contactus" element={<ContactPage />} />
    <Route path="/product" element={<ProductPage />} />

</Routes>
</>
  );
}

export default App;
