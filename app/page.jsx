import styles from "./style";
// import { Hero, Stats, PopularCars, PopularHotels, Testimonials, CTA, HaveToChoose } from '../components';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import PopularCars from '../components/PopularCars';
import PopularHotels from '../components/PopularHotels';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import HaveToChoose from '../components/HaveToChoose';

export default function Home() {
  return (
    <div className="bg-white w-full overflow-hidden">
  {/* bg-primary */}
      <div className={`bg-primary bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
  
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <PopularCars/>
          <PopularHotels/>
          <HaveToChoose/>
          <Testimonials/>
          <CTA/>
        </div>
      </div>
    </div>
  );
}
