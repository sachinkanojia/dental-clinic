import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';
import Gallery from './pages/Gallery';
import BookAppointment from './pages/BookAppointment';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="team" element={<Team />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="book-appointment" element={<BookAppointment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
