import React, { useState, useEffect } from "react";
import MovieLatest from "../Components/Landing/Latest/MovieLatestParent";
import Header from "../Components/Landing/Header/Header";

import "./Landing.css";

import { ReactComponent as SiteLogo } from '../assets/Logo-1.svg';
import Highlights from '../Components/Landing/Highlights/Highlights';

export default function LandingView() {

  return (
    <div>
        <SiteLogo className="siteLogo"/>
        <MovieLatest />
        <Header />
        <Highlights />
    </div>
  )
}
