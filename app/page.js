import styles from "./style";
import { NavBar, Hero, Stats, PopularCars, PopularHotels, Testimonials, Footer, CTA, HaveToChoose } from "@/components";

export default function Home() {
  return (
    <div className="bg-primary w-full overflow-hidden">
  
      <div className={`bg-primary ${styles.flexStart}`}>
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
          {/* <Footer /> */}
        </div>
      </div>

  </div>
  );
}
