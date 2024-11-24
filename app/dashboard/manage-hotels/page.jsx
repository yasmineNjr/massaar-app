import styles from '@/app/style'
import { DataTable } from '@/components/table/DataTable'
import { hotelColumns } from '@/components/table/hotelColumns'
import { hotels } from '@/constants'
import React from 'react'

const ManageHotels = async() => {

  const data = hotels;

  return (
    <div className="w-full overflow-hidden">
  
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <div className="text-center">
                    <h2 className={`${styles.heading2} text-right text-primary`}>
                    إدارة الفنادق    
                    </h2>
                </div>
            
            <section className='mx-auto flex flex-col space-y-14 w-full'> 
                <main className='admin-main '>
                  <div className="w-full overflow-x-auto">
                    <DataTable data={data} columns={hotelColumns}/>
                  </div>
                </main>
            </section> 
      </div>
    </div>
  </div>
  )
}

export default ManageHotels