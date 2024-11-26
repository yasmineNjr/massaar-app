'use client'

import styles from '@/app/style';
import Button from './Button';
import { quickBookHandler } from '@/constants';

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] bg-gradient-to-r from-gray-300 to-white shadow-customGray`}>
      <div className='flex flex-1 flex-col'>
        <h2 className={`${styles.heading2} text-primary`}>اختبر خدماتنا الآن!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        استعد لتجربة حج وعمرة مميزة ومريحة مع خدماتنا المتخصصة في حجز السيارات والفنادق. نوفر لك خيارات متنوعة تتيح لك التنقل بسهولة، سواءً كنت ترغب بسيارة مع سائق أو بدون، وأفضل أماكن الإقامة التي تضمن لك الراحة والطمأنينة خلال رحلتك المقدسة. انضم إلينا الآن واجعل رحلتك أسهل وأقرب.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button title='حجز سريع' onClickHandler={() => quickBookHandler("مرحباً, هل يمكنك مساعدتي في عملية الحجز؟")}/>
      </div>
    </section>
  )

export default CTA;
