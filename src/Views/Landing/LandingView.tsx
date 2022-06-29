import { ReactComponent as SiteLogo } from '../../assets/Logo-1.svg';

import "./Landing.css";

import MovieLatest from "../../Components/Landing/Latest/MovieLatestParent";
import Header from "../../Components/Header/Header";
import Highlights from '../../Components/Landing/Highlights/Highlights';
import Upcoming from "../../Components/Landing/Upcoming/Upcoming";
import NewestReleases from "../../Components/Landing/NewestReleases/NewestReleases";
import Searchbar from "../../Components/Landing/Searchbar/Searchbar";
import Footer from '../../Components/Footer/Footer';

export default function LandingView() {

  return (
    <div>
        <SiteLogo className="siteLogo"/>
        <MovieLatest />
        <Header />
        <Highlights />
        <Upcoming />
        <NewestReleases />
        <Searchbar />
        <Footer />
    </div>
  )
}
