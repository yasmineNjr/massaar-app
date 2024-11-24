import styles from '@/app/style'
import { DataTable } from '@/components/table/DataTable'
import { messagesColumns } from '@/components/table/messagesColumns'
import { messages } from '@/constants'
import React from 'react'

const ManageMessages = async() => {

  const data = messages;

  return (
    <div className="w-full overflow-hidden">
  
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <div className="text-center">
                    <h2 className={`${styles.heading2} text-right text-primary`}>
                    إدارة رسائل العملاء    
                    </h2>
                </div>
            
            <section className='mx-auto flex flex-col space-y-14 w-full'> 
                <main className='admin-main '>
                  <div className="w-full overflow-x-auto">
                    <DataTable data={data} columns={messagesColumns}/>
                  </div>
                </main>
            </section> 
      </div>
    </div>
  </div>
  )
}

export default ManageMessages