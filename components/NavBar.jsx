'use client'

import { useState } from 'react';
import { close, logo, menu } from '../public/assets'
import { navLinks } from '../constants';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function NavBar() {

  const [toggle, setToggle] = useState(false);
  
  const clickMenu = () => {
    setToggle((prev) => !prev)
  }

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar bg-white'>
      <Image src={logo} alt='algharbia' className='w-[80px] h=[32px]'/>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          nav.id !== 'reservations' ?
            <li key={nav.id} 
            className={`font-normal cursor-pointer text-[16px] text-dimWhite text-primary ${index === navLinks.length-1 ?' ml-0' : 'ml-10'}`}>
              <a href={`${nav.link}`}>{nav.title}</a>
            </li> :
             <li
              key={nav.id} 
              className={`font-normal cursor-pointer text-[16px] text-dimWhite text-primary ${index === navLinks.length-1 ?' ml-0' : 'ml-10'}`}>
              <DropdownMenu>
                <DropdownMenuTrigger  className='text-dimWhite text-primary'>{nav.title}</DropdownMenuTrigger>
                  <DropdownMenuContent className='bg-black-gradient text-dimWhite'>
                    <DropdownMenuItem><div className='w-full text-center'><a href='/hotels'>حجز فندقي</a> </div></DropdownMenuItem>
                    <DropdownMenuItem><div className='w-full text-center'><a href='/cars'>حجز سيارة</a> </div></DropdownMenuItem>
                  </DropdownMenuContent>
              </DropdownMenu>
              </li>
        ))}
       
        
      </ul>
     
      <div className='sm:hidden flex flex-1 justify-end items-center'>
          
        <Image 
          src={toggle ? close : menu} 
          alt='menu' 
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={clickMenu}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 left-0 mx-4 my-2 min-width-[140px] rounded-xl sidebar z-[10]`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
               nav.id !== 'reservations' ?
                <li key={nav.id} 
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length-1 ?' mr-0' : 'mb-4'}`}>
                  <a href={`${nav.link}`}>{nav.title}</a>
                </li> : 
                <div>
                   <li key={nav.id} 
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length-1 ?' mr-0' : 'mb-4'}`}>
                      <a href='/hotels'>حجز فندقي</a>
                    </li>
                    <li key={nav.id} 
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length-1 ?' mr-0' : 'mb-4'}`}>
                      <a href='/cars'>حجز سيارة</a>
                    </li>
                </div>
               
              ))}
          </ul>
        </div>
      </div>
    </nav>

     
  )
}

export default NavBar
