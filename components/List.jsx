'use client';

import React from 'react'
import styles from '@/app/style'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const List = (items, id) => {
    
    const router = useRouter();
    const lst = items.items;
    
    const viewDetails = (id) => {
        
        if(id === 'car')
            router.push(`/cars/${id}`);
        else(id === 'hotel')
            router.push(`/hotels/${id}`);
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