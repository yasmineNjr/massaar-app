import { feedback } from "../constants";
import styles from "@/app/style";
import FeedbackCard from './FeedbackCard';
{/* <br className="sm:block hidden" />  */}
const Testimonials = () => (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full white__gradient'/>

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-8 mb-2 relative z-[1]'>
        <h2 className={`${styles.heading2} text-gold`}>
        ماذا يقول عملاؤنا عنا
        </h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-right text-dimWhite`}>
          فخرنا الأكبر هو رضا عملائنا وثقتهم بخدماتنا. نعمل بجد لضمان تجربة مميزة وسهلة في كل حجز، ونستمع لآرائهم وتقييماتهم لتحسين خدماتنا باستمرار. في هذا القسم، نشارككم بعضًا من تجارب عملائنا الحقيقيين الذين وثقوا بنا في رحلاتهم وسفراتهم، ونفتخر بأن تكون خدماتنا جزءاً من رحلتهم إلى وجهاتهم المقدسة. اكتشف ما يقولونه عنا، وكيف ساهمنا في جعل رحلاتهم أسهل وأكثر راحة واطمئنانًا.
          </p>
        </div>
      </div>
      
      <div className='flex flex-wrap justify-center gap-4 w-full feedback-container relative z-[1]'>
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} backContent='xxxxx'/>
        ))}
      </div>
    </section>
  )

export default Testimonials