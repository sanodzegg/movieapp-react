import React from "react";

import "./GenreCard.css";
import { NavLink } from 'react-router-dom';

interface props {
    name: string,
}

export default function GenreCard({name}:props) {
  return <div className="genreCardWrapper">
    <NavLink to={`/category/${name}`}>{name}</NavLink>
  </div>;
}
