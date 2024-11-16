'use client';

import React from 'react'
import styles from '@/app/style'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const List = ({items, destination}) => {
    
    const router = useRouter();
    const lst = items;
    
    const viewDetails = (id) => {
        
        let path = '';
        if(destination === 'car'){
            path = `/cars/${id}`
        }else if(destination === 'hotel'){
            path = `/hotels/${id}`
        }
        router.push(path);
        // console.log(path)
    }

  return (
    <ul className='text-white flex flex-wrap gap-10 items-center p-4 mt-10 justify-center w-full'>
        {lst.map(({id, img, name, model, description, pricePerHour, rating, passengers, GPS, automatic, mainImg, imgs}) => (
            // <li key={item.id} className='cursor-pointer' onClick={() => viewDetails(item.id)}>
            //     <h2 className={styles.heading2}>
            //     {item.name}
            //     </h2>
            // </li>
            // <Link href="/cars/[id]" as={`/cars/${item.id}`}>Go to Car</Link>
            <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:ww-96 w-[80vw]'>
                {name}
            </div>
        ))
        }
    </ul>
  )
}

export default List