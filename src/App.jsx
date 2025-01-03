import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import AboutUs from './Pages/AboutUs';

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
</BrowserRouter>
}

export default App

