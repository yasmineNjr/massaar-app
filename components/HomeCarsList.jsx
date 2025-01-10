'use client'

import styles, { layout } from '@/app/style'
import { useRouter } from 'next/navigation';
import { cars } from '@/constants'
import HomeCarItem from './HomeCarItem';

const HomeCarsList = () => {

    const router = useRouter();

    const viewDetailsHandler = (id) => {
        
        const path = `/cars/${id}`
        router.push(path);
    }

  return (
    <section className={`flex flex-col ${styles.paddingY}`}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-gold`}>
            سياراتنا في خدمتكم
        </h2>
        
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10 bg-primary-foreground"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10 bg-primary-foreground p-4 box-border border-[8px] border-gold">
        {
            cars.map((car) => (
                <HomeCarItem car={car} onClick={viewDetailsHandler}/>
            ))
        }
      </div>
    </section>
  )
}

export default HomeCarsList