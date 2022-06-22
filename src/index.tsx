import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingView from './Views/LandingView';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/reviews" element={<LandingView />} />
        <Route path="/discover" element={<LandingView />} />
        <Route path="/about" element={<LandingView />} />
        <Route path="/contact" element={<LandingView />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
