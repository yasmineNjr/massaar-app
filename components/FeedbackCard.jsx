'use client'

import Image from 'next/image'
import { quotes , star} from '../public/assets'

const FeedbackCard = ({ card }) =>   {
  const { client_name, date, e_id, is_approved, level, phone, text } = card;
  const dateOnly = date.match(/^\d{4}-\d{2}-\d{2}/)[0];
  
  ////feedback-card
  return(
    <div key={e_id}
        //  className='perspective-1000 flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[250px] md:mr-10 sm:mr-5 mr-0 my-5 hover:bg-gradient-to-r from-gray-300 to-white hover:shadow-customGray text-dimWhite hover:text-primary'
         className="group w-[280px] perspective-1000 flex justify-between flex-col mx-3 mt-5 px-10 py-12 rounded-[20px] hover:bg-gradient-to-r from-gray-300 to-white shadow-customGray text-dimWhite hover:text-primary"
    >
      <Image src={quotes} alt='double-quotes' className='w-[42px] h-[27px] object-contain '/>
      <p className='font-poppins font-semibold text-[18px] text-primary-foreground group-hover:text-primary leading-[32px] mt-10 mb-10'>
        {text}
      </p>
     <div className="flex flex-row">
        {Array(level).fill(null).map((_, index) => (
          <Image
            key={index}
            src={star}
            alt={client_name}
            className="w-[20px] h-[20px] ml-1"
          />
        ))}
      </div>
      <div className='flex flex-row'>
        <div className='flex flex-col'>
          <h4 className='font-poppins font-semibold text-primary-foreground group-hover:text-primary text-[20px] leading-[32px] mt-5'>{client_name}</h4>
          <p  className='font-poppins font-semibold text-[16px] text-customGray leading-[24px] mt-5'>{dateOnly}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard
