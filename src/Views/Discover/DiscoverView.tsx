import React from "react";

import "./DiscoverView.css";
import TVAside from '../../Components/TVShows/TVAside/TVAside';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

export default function DiscoverView() {
  return (
    <div className='discoverView'>
      <div className="discoverView-Col">
        <Header />
        <Footer />
      </div>
      <div className="discoverView-Col aside">
        <TVAside />
      </div>
    </div>
  );
}
