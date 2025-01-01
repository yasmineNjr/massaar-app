'use client'

import React from 'react'
import styles from '../style'
import { DataTable } from '@/components/table/DataTable'
import { cars, orders } from '@/constants'
import { orderColumns } from '@/components/table/orderColumns'

const page = () => {

  const data = orders

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
              <DataTable data={data} columns={orderColumns} source='orders' total='600'/>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default page