import { stats } from '@/constants';
import styles from '@/app/style';

const Stats =() => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-`}>
      {
        stats.map((stat) => (
          <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
            <h4 className='font-poppins font-semibold xs:text-[30px] text-[20px] xs:leading-[53px] leading-[43px] text-dimWhite'>{stat.value}</h4>
            <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase mr-3'>{stat.title}</p>
          </div>
        ))
      }
    </section>
  )

export default Stats