import logo from './logo.svg';
import { Route,Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GallerySection from './components/GallerySection';
function App() {
  return (
    <>
<Routes>
  <Route path='/' element={<LandingPage/>}></Route>
  <Route path="/gallery" element={<GallerySection />} />
</Routes>
</>
  );
}

export default App;
