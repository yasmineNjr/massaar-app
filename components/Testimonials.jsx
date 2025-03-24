'use client'

import { feedback } from "../constants";
import styles from "@/app/style";
import FeedbackCard from './FeedbackCard';
import { useEffect, useState } from "react";
{/* <br className="sm:block hidden" />  */}
const Testimonials = () => {

  const [evaluations, setEvaluations] = useState([]); // Store the filtered orders
    const [isLoading, setIsLoading] = useState(true); // Track loading state
      
      useEffect(() => {
        const fetchEvaluations = async () => {
          try {
            setIsLoading(true); // Set loading to true before fetching
            const response = await fetch("/api/evaluations");
            if (!response.ok) {
              throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            const approvedItems = data.filter(item => item.is_approved === 1);
            setEvaluations(approvedItems); // Store the full list of orders
            // console.log(data);
            // console.log(approvedItems);
          } catch (error) {
            console.error("Failed to fetch Evaluations:", error.message);
          }finally {
            setIsLoading(false); // Set loading to false after fetching
          }
        };
    
        fetchEvaluations();
      }, []);
    
  return(
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
      
      {/* <div className='flex flex-wrap justify-center gap-4 w-full feedback-container relative z-[1]'> */}
      <div className="flex flex-wrap justify-center gap-4 w-full feedback-container relative z-[1]">
        {
          isLoading 
          ? 
          <div className="flex justify-center items-center">
            <div className="w-12 h-12 border-4 border-t-transparent border-l-gold border-b-gold border-r-gold rounded-full animate-spin"></div>
          </div> 
          : 
          evaluations.map((ev) => (
            <FeedbackCard card={ev}/>
          ))
        }
      </div>
    </section>
  )
}
export default Testimonials