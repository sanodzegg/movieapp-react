import { useState } from 'react';

import Header from "../../Components/Header/Header";
import Footer from '../../Components/Footer/Footer';

import "./TVShowsView.css";
import TVHeader from "../../Components/TVShows/TVHeader/TVHeader";
import TVLayout from '../../Components/TVShows/TVLayout/TVLayout';
import TVAside from '../../Components/TVShows/TVAside/TVAside';

export default function TVShowsView() {

  const [layoutType, setLayoutType] = useState("grid")

  return (
    <div className='tvShowsView'>
      <div className="tvShowsView-Col">
        <Header />
        <TVHeader setLayoutType={setLayoutType} />
        <TVLayout layoutType={layoutType} />
        <Footer />
      </div>
      <div className="tvShowsView-Col aside">
        <TVAside />
      </div>
    </div>
  );
}
