import styles from '@/app/style'
import React from 'react'

const HotelOffer = () => {
  return (
    <section 
      className={`flex flex-1 flex-col h-[500px] ${styles.paddingY} bg-transparent xl:px-0 sm:px-16 px-6`}
      style={{
        backgroundImage: "url('/assets/hotelOfferHome.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-end h-full">
      <style jsx>{`
          @keyframes scalePulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
          }

          .animate-scale-pulse {
            animation: scalePulse 1.5s infinite;
          }
        `}</style>

        <h1 className="font-bold text-[40px] text-primary">
          احجز فندقك من خلال موقعنا
        </h1>
        <h1 className="font-bold text-[40px] text-primary">
          واحصل على حجز مجاني لكل 
          <span className="text-gold text-[52px] mx-2 animate-scale-pulse">3</span>
          حجوزات
        </h1>
      </div>
    </section>

  )
}

export default HotelOffer