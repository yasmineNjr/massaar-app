import React from 'react'
import clsx from 'clsx';
import Image from 'next/image';

const StatCard = ({ count = 0, label, icon, type }) => {
  return (
    <div className={clsx('stat-card text-customSecondary font-bold ', {
        "bg-appointments": type === "appointments",
        "bg-pending": type === "pending",
        "bg-cancelled": type === "cancelled",
      })}
      >
        <div className='flex items-center gap-4'>
          <Image
            src={icon}
            width={32}
            height={32}
            className='size-8 w-fit'
            alt={label}
          />
          <h2 className='text-32-bold text-customSecondary'>{count}</h2>
        </div>
  
        <p className='text-14-bold'>{label}</p>
      </div>
  )
}

export default StatCard