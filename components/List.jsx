'use client';

import React from 'react'
import { useRouter } from 'next/navigation';
import ListItem from './ListItem';
import CarListItem from './CarListItem';

const List = ({items, destination}) => {
    
    const lst = items;
    let path = '';
    if(destination === 'car'){
        path = `/cars`
    }else if(destination === 'hotel'){
        path = `/hotels`
    }
   
  return (
    <div className="flex flex-wrap flex-row items-center justify-center gap-x-24 gap-y-8 w-full">
        {lst.map((item) => (
            destination === 'hotel' ? <ListItem item={item}/>  : <CarListItem item={item}/>
        ))
        }
    </div>
  )
}

export default List
