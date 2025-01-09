import React from 'react'
import clsx from 'clsx';
import Image from 'next/image';

const StatCard = ({ count = 0, label, icon, type, onClickHandler, highlight }) => {
  
  const txtColor = type === 'appointments' ? 'text-[#F24E43]' : 'text-[#24AE7C]';
  
  return (
    <div className={clsx('stat-card text-customSecondary font-bold cursor-pointer', {
        "bg-appointments": type === "appointments",
        "bg-pending": type === "pending",
        "bg-cancelled": type === "cancelled",
        },
        highlight === type ? 'border-2 border-gold' : '' 
      )}
        onClick={onClickHandler}
      >
        <div className='flex items-center gap-4'>
          {/* <Image
            src={icon}
            width={32}
            height={32}
            className='size-8 w-fit'
            alt={label}
          /> */}
          {icon}
          <h2 className={`text-32-bold text-customSecondary`}>{count}</h2>
        </div>
  
        <p className={`text-14-bold ${txtColor}`}>{label}</p>
      </div>
  )
}

export default StatCard