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
    <ul className='text-white flex gap-10 justify-center w-full'>
        {lst.map((item) => (
            <li key={item.id} className='cursor-pointer' onClick={() => viewDetails(item.id)}>
                <h2 className={styles.heading2}>
                {item.name}
                </h2>
            </li>
            // <Link href="/cars/[id]" as={`/cars/${item.id}`}>Go to Car</Link>
        ))
        }
    </ul>
  )
}

export default List