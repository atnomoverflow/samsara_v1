import React from 'react'
import Hero from "./Heropage/Hero";
import Herocontent from './Heropage/Herocontent'
import LandingSectionAboutRow from './landingSections/LandingSectionAboutRow';
import LandingSectionCities from './landingSections/LandingSectionCities';
import LandingSectionHideOverflow from './landingSections/LandingSectionHideOverflow';
import LandingSectionLandLord from './landingSections/LandingSectionLandLord';

function Home() {
    return (
        <div>
        <Hero logo="https://d214hhm15p4t1d.cloudfront.net/nzr/df796830ad47fb10c09fa97d4cde17024f286eb8/img/zumper-logo-text-white.bd50acd5.svg" 
          image="https://static.zumpercdn.com/nzr/df796830ad47fb10c09fa97d4cde17024f286eb8/img/homepage/hero.jpg?auto=format&fit=crop&w=1903&h=938" content={<Herocontent />}/> 
        <LandingSectionHideOverflow/>
        <LandingSectionCities/>
        <LandingSectionAboutRow />
        <LandingSectionLandLord/>
        </div>
    )
}

export default Home
