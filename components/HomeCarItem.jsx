'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { quickBookHandler } from '@/constants';
import { callIcon, whatsappIcon } from '@/public/assets';

const HomeCarItem = ({ car, onClick }) => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  return (
    <div
      className="bg-white relative rounded-xl group shadow-customGray hover:shadow-cardhover min-w-[301px] h-[430px] overflow-hidden cursor-pointer hover:shadow-2xl"
      onClick={() => onClick(car.id)}
      onMouseEnter={() => setIsHovered(true)} // Set hover state
      onMouseLeave={() => setIsHovered(false)} // Reset hover state
    >
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src={isHovered ? car.imgs[0] : car.mainImg} // Change image source on hover
          alt={car.name}
          layout="responsive" // Use responsive layout
          width={300} // Adjust dimensions as needed
          height={300}
          objectFit="contain" // Ensure the image fits properly
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden text-customSecondary font-semibold absolute bottom-0 left-0 right-0 bg-gradient-to-r from-gray-300 to-white m-2 p-4 rounded-md">
        <h1>
          {car.model} - {car.name}
        </h1>
        <p className="text-sm overflow-y-auto prompt">{car.description}</p>
        <div className="flex flex-row justify-between items-center">
          <p className="text-sm"></p>
          <div className="flex flex-row justify-between items-center gap-4">
            <Image
              src={whatsappIcon}
              alt="whatsapp"
              className="object-contain cursor-pointer transition-transform duration-300 hover:scale-125 hover:shadow-2xl"
              onClick={(e) => {
                e.stopPropagation();
                quickBookHandler(`مرحباً, هل يمكنك مساعدتي في حجز السيارة ${car.name}`);
              }}
            />
            <a href="tel:+966566633161" target="_blank" rel="noopener noreferrer">
              <Image
                src={callIcon}
                alt="call"
                className="object-contain cursor-pointer transition-transform duration-300 hover:scale-125 hover:shadow-2xl"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarItem;

// 'use client'

// import React, { useState } from 'react'
// import Image from 'next/image'
// import { quickBookHandler } from '@/constants';
// import { callIcon, whatsappIcon } from '@/public/assets';

// const HomeCarItem = ({ car, onClick }) => {
    
//     const [imageSrc, setImageSrc] = useState(car.mainImg);

//   return (
//     <div 
//         className="bg-white relative rounded-xl group  shadow-customGray hover:shadow-cardhover min-w-[301px] h-[430px] overflow-hidden cursor-pointer"
//         onClick={() => onClick(car.id)}
//     >
//         <div className='h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]'>
//             <Image
//                 src={imageSrc}
//                 alt={car.name}
//                 layout='fill'
//                 objectFit='contain'
//                 onMouseEnter={() => setImageSrc(car.imgs[0])}
//                 onMouseLeave={() => setImageSrc(car.mainImg)}
//             />
//         </div>
//         <div className="group-hover:flex flex-col max-h-[94.5%] hidden text-customSecondary font-semibold absolute bottom-0 left-0 right-0 bg-gradient-to-r from-gray-300 to-white m-2 p-4 rounded-md">
//             <h1 >{car.model} - {car.name}</h1>
//             <p className="text-sm overflow-y-auto prompt">{car.description}</p>
//             <div className='flex flex-row justify-between items-center'>
//                 <p className=" text-sm"></p>
//                 {/* {car.pricePerHour} */}
//                 <div className='flex flex-row justify-between items-center gap-4'>
//                 <Image 
//                     src={whatsappIcon} 
//                     alt='whatsapp' 
//                     className={`object-contain cursor-pointer transition-transform duration-300 hover:scale-125 hover:shadow-2xl`}
//                     onClick={(e) => {e.stopPropagation(); quickBookHandler(`مرحباً, هل يمكنك مساعدتي في حجز السيارة ${car.name}`)}}
//                 />
//                 <a href="tel:+966566633161" target="_blank" rel="noopener noreferrer">
//                     <Image 
//                     src={callIcon} 
//                     alt='call' 
//                     className={`object-contain cursor-pointer transition-transform duration-300 hover:scale-125 hover:shadow-2xl`}
//                     onClick={(e) => {e.stopPropagation();}}
//                     />
//                 </a>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default HomeCarItem