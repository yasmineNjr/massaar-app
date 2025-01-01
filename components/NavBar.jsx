'use client'

import { useState } from 'react';
import { close, logo, logoDark, logoLight, menu } from '../public/assets'
import { navLinks } from '../constants';
import Image from 'next/image';
import NavLink from './NavLink';
import { GiShoppingCart } from "react-icons/gi";
import { useRouter } from 'next/navigation';
import { useOrders } from '@/context/AppContext';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

function NavBar() {

  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  const { orders } = useOrders(); // Get orders from context
  
  const clickMenu = () => {
    setToggle((prev) => !prev)
    console.log('click')
  }

  const orderHndler = () => {
    router.push('/orders');
  }

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar bg-transparent text-primary-foreground font-bold'>
      <Image src={logoDark} alt='algharbia' className='w-[80px]'/>
      <ul className='list-none md:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <NavLink item={nav} idx={index} length={navLinks.length}/>
          // nav.id !== 'reservations' ?
            // <li key={nav.id} 
            // className={`font-normal cursor-pointer text-[18px] hover:text-customGold transition-transform duration-300 hover:scale-105 ${index === navLinks.length-1 ?' ml-0' : 'ml-10'}`}>
            //   <a href={`${nav.link}`}>{nav.title}</a>
            // </li> 
            // :
            //  <li
            //   key={nav.id} 
            //   className={`font-normal cursor-pointer text-[18px] hover:text-customGold ${index === navLinks.length-1 ?' ml-0' : 'ml-10'}`}>
            //   <DropdownMenu>
            //     <DropdownMenuTrigger  className=''>{nav.title}</DropdownMenuTrigger>
            //       <DropdownMenuContent className='bg-gradient-to-r from-gray-300 to-white shadow-customGray'>
            //         <DropdownMenuItem><div className='w-full text-center'><a href='/hotels'>حجز فندقي</a> </div></DropdownMenuItem>
            //         <DropdownMenuItem><div className='w-full text-center'><a href='/cars'>حجز سيارة</a> </div></DropdownMenuItem>
            //       </DropdownMenuContent>
            //   </DropdownMenu>
            //   </li>
        ))}
       
        
      </ul>

      <div
        className="relative hidden md:block p-5 mb-1 mr-2 cursor-pointer "
        onClick={orderHndler}
      >
        <GiShoppingCart size={28} className='transition-transform duration-300 hover:scale-125 hover:shadow-2xl'/>
        {orders.length > 0 && (
          <span className="absolute top-1 right-1.5 bg-gold text-dimWhite text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {orders.length}
          </span>
        )}
      </div>

      <div className='md:hidden flex flex-1 justify-end items-center'>
        <div
          className="relative p-5 mb-1 mr-2 cursor-pointer "
          onClick={orderHndler}
        >
          <GiShoppingCart size={28} className='transition-transform duration-300 hover:scale-125 hover:shadow-2xl'/>
          {orders.length > 0 && (
            <span className="absolute top-1 right-1.5 bg-gold text-dimWhite text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {orders.length}
            </span>
          )}
        </div>
        <Image 
          src={toggle ? close : menu} 
          alt='menu' 
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={clickMenu}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gradient-to-r from-gray-300 to-white shadow-customGray text-primary font-poppins font-bold text-[16px]  absolute top-20 left-0 mx-4 my-2 min-width-[140px] rounded-xl sidebar z-[50]`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              //  nav.id !== 'reservations' ?
                <li key={nav.id} 
                className={`transition-transform duration-300 hover:scale-105 cursor-pointer ${index === navLinks.length-1 ?' mb-0' : 'mb-4'} hover:text-customGold`}>
                  <a href={`${nav.link}`}>{nav.title}</a>
                </li> 
                // : 
                // <div className='flex flex-col gap-1'>
                //    <li key={nav.id} 
                //     className={`font-poppins cursor-pointer ${index === navLinks.length-1 ?' mr-0' : 'mb-4'} hover:text-customGold`}>
                //       <a href='/hotels'>حجز فندقي</a>
                //     </li>
                //     <li key={nav.id} 
                //     className={`font-poppins  cursor-pointer ${index === navLinks.length-1 ?' mr-0' : 'mb-4'} hover:text-customGold`}>
                //       <a href='/cars'>حجز سيارة</a>
                //     </li>
                // </div>
               
              ))}
          </ul>
        </div>
      </div>
    </nav>

     
  )
}

export default NavBar
