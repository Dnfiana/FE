import React from "react";

// Sections
import Navbar from '../../components/LandingPage/NavHome/TopNavbarHome';
import Header from '../../components/LandingPage/Sections/Header';
import About from '../../components/LandingPage/Sections/About';
import Testimonials from '../../components/LandingPage/Sections/Testimonials';
import Footer from '../../components/LandingPage/Sections/Footer';
import Payment from "../../components/LandingPage/Sections/Payment";
import Search from "../../components/LandingPage/Sections/Search";
import Destination from "../../components/LandingPage/Sections/Destination";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Header />
      <Search/>
      <About />
      <Destination/>
      <Testimonials />
      <Payment/>
      <Footer />
    </>
  );
}

