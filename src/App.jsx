import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routesConfig from "./routesConfig";
import MainLayout from './components/Layout/MainLayout';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrolltoTop from './ScrolltoTop';
import StickyButtons from './components/StickyButtons';
import NewYearPopup from './components/NewYearPopup';
import RightStickyBanner from './components/RightStickyBanner/RightStickyBanner';

export default function App() {
  return (
    <Router>
      <ScrolltoTop/>
      <NewYearPopup/>
      <Routes>
        {routesConfig.map(({ path, element, meta }) => (
          <Route
            key={path}
            path={path}
            element={<MainLayout meta={meta}>{element}</MainLayout>}
          />
        ))}

      </Routes>
      <RightStickyBanner position="right"/>
      <RightStickyBanner position="left"/>
      <StickyButtons/>
    </Router>
  );
}
