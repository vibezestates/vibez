import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routesConfig from "./routesConfig";
import MainLayout from './components/Layout/MainLayout';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrolltoTop from './ScrolltoTop';
import StickyButtons from './components/StickyButtons';

export default function App() {
  return (
    <Router>
      <ScrolltoTop/>
      <Routes>
        {routesConfig.map(({ path, element, meta }) => (
          <Route
            key={path}
            path={path}
            element={<MainLayout meta={meta}>{element}</MainLayout>}
          />
        ))}
      </Routes>
      <StickyButtons/>
    </Router>
  );
}
