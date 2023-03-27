import React from 'react';
import Gallery from '../components/landing/Carousel';
import Features from '../components/landing/Features';
import SysReq from '../components/landing/Requirements';
import Quotes from '../components/landing/Quotes';
import MainScreen from '../components/landing/MainScreen';
import Subs from '../components/landing/subs';
import "../assets/css/landing.css"



export default function LandingPage() {
  return (
  <>
    {<MainScreen />}

    {<Gallery />}

    {<Features />}

    {<SysReq />}

    {<Quotes />}

    {<Subs />}
  </>
  );
}
