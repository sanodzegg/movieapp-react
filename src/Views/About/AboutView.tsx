import React from "react";
import AboutHeader from "../../Components/AboutUs/AboutHeader/AboutHeader";
import AboutReviews from "../../Components/AboutUs/AboutReviews/AboutReviews";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

export default function AboutView() {
  return (
    <div>
        <Header />
        <AboutHeader />
        <AboutReviews />
        <Footer />
    </div>
  );
}
