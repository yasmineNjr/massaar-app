import styles from '@/app/style'
import { carColumns } from '@/components/table/carColumns'
import { DataTable } from '@/components/table/DataTable'
import { cars } from '@/constants'
import React from 'react'

const ManageCars = async() => {

  const data = cars;

  return (
    <div className="w-full overflow-hidden">
  
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <div className="text-center">
                    <h2 className={`${styles.heading2} text-right text-gold`}>
                    إدارة السيارات    
                    </h2>
                </div>
            
            <section className='mx-auto flex flex-col space-y-14 w-full'> 
                <main className='admin-main '>
                  <div className="w-full overflow-x-auto">
                    <DataTable data={data} columns={carColumns}/>
                  </div>
                </main>
            </section> 
      </div>
    </div>
  </div>
  )
}

export default ManageCars