'use client'

import React, { useEffect, useState } from 'react'
import styles from '../style'
import { DataTable } from '@/components/table/DataTable'
import { orderColumns } from '@/components/table/orderColumns'
import Button from '@/components/Button'
import { useOrders } from '@/context/AppContext'

const page = () => {

  const { clearOrders, orders } = useOrders();
  // const [isClient, setIsClient] = useState(false);
  // const [ordersLst, setOrdersLst] = useState([]);

  // useEffect(() => {
  //   setIsClient(true);

  //   if (typeof window !== "undefined") {
  //     const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  //     setOrdersLst(orders);
  //   }
  // }, []);

  const data = orders;

  return(
  <div className="bg-transparent w-full overflow-hidden">
      <div className={`bg-transparent ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <section className={`flex flex-col ${styles.paddingY} `}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
              <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[22px] text-primary-foreground ss:leading-[100.8px] leading-[75px]">
                سلة الحجوزات
                </h1>
              </div>
              {
                data.length > 0 
                ?
                <>
                  <DataTable data={data} columns={orderColumns} source='orders' total='600'/>
                  <div className="flex flex-1 justify-center items-center w-full gap-6 mt-10 h-[70px]">
                    <Button styles='w-[50%]' title='إتمام'/>
                    <Button styles='w-[50%]' title='إفراغ السلة' onClickHandler={clearOrders}/>
                  </div>
                </>
                :
                <div className='text-dimWhite font-bold text-center w-full text-[20px] p-10'>
                  <p>لا يوجد حجوزات </p>
                </div>
              }

             
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default page