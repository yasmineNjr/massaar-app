'use client'

import styles from "./style";
import dynamic from "next/dynamic";
// import { Hero, Stats, PopularCars, PopularHotels, Testimonials, CTA, HaveToChoose } from '../components';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import PopularHotels from '../components/PopularHotels';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import HaveToChoose from '../components/HaveToChoose';
import PasskeyModal from "@/components/PasskeyModal";
import HomeCarsList from "@/components/HomeCarsList";
import OurServices from "@/components/OurServices";
import Licenses from "@/components/Licenses";
const Location = dynamic(() => import('@/components/Location'), { ssr: false });
// import Location from "@/components/Location";

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
          <Licenses/>
          <OurServices/>
          <HomeCarsList/>
          {/* <PopularCars/> */}
          <PopularHotels/>
          <HaveToChoose/>
          <Stats />
          <Testimonials/>
          <Location/>
          <CTA/>
        </div>
      </div>
    </div>
  );
}
