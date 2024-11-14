import { features } from '../constants';
import styles, { layout } from '@/app/style';
import Button from './Button';
import Image from 'next/image';

const FeatueCard = ({ icon, index, title, content }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length-1 ? "mb-2" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dark-500`}>
      {/* <Image src={icon} alt='icon' className='w-[50%] h-[50%] object-contain'/> */}
      {icon}
    </div>
    <div className='flex flex-1 flex-col  mr-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
  </div>
)

function HaveToChoose() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          لماذا عليك أن تختار<br className="sm:block hidden" /> مسار الغربية
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        نحن ندرك أن رحلة الحج والعمرة هي تجربة روحانية مهمة وتتطلب التخطيط الجيد لضمان الراحة والطمأنينة. من هذا المنطلق، عملنا على تصميم خدماتنا لتلبية احتياجاتك بأعلى مستويات الجودة والمصداقية، لضمان تجربة لا تُنسى من البداية إلى النهاية.
        </p>
        <Button styles='mt-10' title='اطلب الآن'/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatueCard key={feature.id} {...feature}
                      index={index}/>
        ))}
      </div>
    </section>
  )
}

export default HaveToChoose
