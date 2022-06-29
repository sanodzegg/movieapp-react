import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "./index.css";
import LandingView from './Views/Landing/LandingView';
import DetailedMovie from './Views/Detailed/DetailedMovie';
import DetailedShow from './Views/Detailed/DetailedShow';
import TVShowsView from './Views/TVShows/TVShowsView';
import DiscoverView from './Views/Discover/DiscoverView';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/tvshows" element={<TVShowsView />} />
        <Route path="/discover" element={<DiscoverView />} />
        <Route path="/about" element={<LandingView />} />
        <Route path="/contact" element={<LandingView />} />
        <Route path="/movie/detailed/:id" element={<DetailedMovie />} />
        <Route path="/tvshows/detailed/:id" element={<DetailedShow />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
