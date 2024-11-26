'use client'

import styles from "./style";
// import { Hero, Stats, PopularCars, PopularHotels, Testimonials, CTA, HaveToChoose } from '../components';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import PopularCars from '../components/PopularCars';
import PopularHotels from '../components/PopularHotels';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import HaveToChoose from '../components/HaveToChoose';
import PasskeyModal from "@/components/PasskeyModal";
import HomeCarsList from "@/components/HomeCarsList";

export default function Home() { 

  return (
    <div className="w-full overflow-hidden bg-transparent">
  
      <div className={`bg-transparent ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
  
      <div className={`bg-transparent ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <HomeCarsList/>
          {/* <PopularCars/> */}
          <PopularHotels/>
          <HaveToChoose/>
          <Stats />
          <Testimonials/>
          <CTA/>
        </div>
      </div>
    </div>
  );
}
