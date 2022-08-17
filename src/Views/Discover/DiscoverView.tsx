import "./DiscoverView.css";
import TVAside from '../../Components/TVShows/TVAside/TVAside';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import DiscoverHeader from "../../Components/Discover/DiscoverHeader/DiscoverHeader";
import DiscoverGrid from "../../Components/Discover/DiscoverGridLayout/DiscoverGrid";
import GenresHeader from "../../Components/Discover/DiscoverHeader/GenresHeader";
import Genres from '../../Components/Discover/DiscoverGenres/Genres';

export default function DiscoverView() {
  return (
    <div className='discoverView'>
      <div className="discoverView-Col">
        <Header />
        <DiscoverHeader />
        <DiscoverGrid />
        <GenresHeader />
        <Genres />
        <Footer />
      </div>
      <div className="discoverView-Col aside">
        <TVAside />
      </div>
    </div>
  );
}
