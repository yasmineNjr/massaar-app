import styles from '@/app/style'
import React from 'react'

const CarOffer = () => {
  return (
<section
  className={`flex flex-1 flex-col h-[500px] ${styles.paddingY} bg-transparent xl:px-0 sm:px-16 px-6`}
  style={{
    backgroundImage: "url('/assets/carOffer.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="flex flex-col items-center justify-end h-full">
    <h1 className="font-bold text-[40px] text-primary-foreground">
      احجز سيارتك من خلال موقعنا
    </h1>
    <h1 className="font-bold text-[40px] text-primary-foreground">
      واحصل على حجز مجاني لكل 
      <span className="text-gold text-[52px] mx-2 animate-flash">4</span>
      حجوزات
    </h1>
  </div>
</section>

  )
}

export default CarOffer