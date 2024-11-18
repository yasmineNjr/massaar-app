import Image from 'next/image'
import { quotes , star} from '../public/assets'

const FeedbackCard = ({ content, name, title, img, date }) =>   (
  ////feedback-card
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[350px] md:mr-10 sm:mr-5 mr-0 my-5 hover:bg-gradient-to-r from-gray-300 to-white hover:shadow-customGray'>
      <Image src={quotes} alt='double-quotes' className='w-[42px] h-[27px] object-contain '/>
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-[#6d6d6d] my-10'>
        {content}
      </p>
      <div className='flex flex-row'>
        <Image src={star} alt={name} className='w-[20px] h-[20px] ml-1'/>
        <Image src={star} alt={name} className='w-[20px] h-[20px] ml-1'/>
        <Image src={star} alt={name} className='w-[20px] h-[20px] ml-1'/>
        <Image src={star} alt={name} className='w-[20px] h-[20px] ml-1'/>
        <Image src={star} alt={name} className='w-[20px] h-[20px] ml-1'/>
      </div>
      <div className='flex flex-row'>
        <div className='flex flex-col'>
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-[#6E6E6E]'>{name}</h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-[#6d6d6d]'>{date}</p>
        </div>
      </div>
    </div>
  )

export default FeedbackCard
