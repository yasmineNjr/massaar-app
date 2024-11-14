import { feedback } from "../constants";
import styles from "@/app/style";
import FeedbackCard from './FeedbackCard';
{/* <br className="sm:block hidden" />  */}
const Testimonials = () => (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full white__gradient'/>

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>
        ماذا يقول عملاؤنا عنا
        </h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          فخرنا الأكبر هو رضا عملائنا وثقتهم بخدماتنا. نعمل بجد لضمان تجربة مميزة وسهلة في كل حجز، ونستمع لآرائهم وتقييماتهم لتحسين خدماتنا باستمرار. في هذا القسم، نشارككم بعضًا من تجارب عملائنا الحقيقيين الذين وثقوا بنا في رحلاتهم وسفراتهم، ونفتخر بأن تكون خدماتنا جزءاً من رحلتهم إلى وجهاتهم المقدسة. اكتشف ما يقولونه عنا، وكيف ساهمنا في جعل رحلاتهم أسهل وأكثر راحة واطمئنانًا.
          </p>
        </div>
      </div>
      
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card}/>
        ))}
      </div>
    </section>
  )

export default Testimonials