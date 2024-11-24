import React from 'react'
import styles from '../style'
import StatCard from '@/components/StatCard'
import {DataTable} from '@/components/table/DataTable'
import {columns} from '@/components/table/columns'
import { getData } from '@/constants'

const Dashboard = async() => {

  const data = await getData();

  return (
    <div className="w-full overflow-hidden">
  
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <div className="text-center">
                    <h2 className={`${styles.heading2} text-right text-primary`}>
                    إدارة الطلبات    
                    </h2>
                </div>
                <div className='mb-10'>
                  <p>ابدأ يومك بمعالجة طلبات الحجز</p>
                </div>
            
            <section className='mx-auto flex flex-col space-y-14 w-full'> 
                <main className='admin-main '>
                  <section className='admin-stat w-full '>
                  <StatCard
                      type="appointments"
                      count={data.filter((i) => i.status==='scheduled').length}//{appointments.scheduledCount}
                      label="الطلبات المثبتة"
                      icon={"/assets/appointments.svg"}
                  />
                   <StatCard
                      type="pending"
                      count={data.filter((i) => i.status==='pending').length}//{appointments.pendingCount}
                      label="الطلبات المنتظرة"
                      icon={"/assets/pending.svg"}
                  />
                  <StatCard
                      type="cancelled"
                      count={data.filter((i) => i.status==='cancelled').length}//{appointments.cancelledCount}
                      label="الطلبات الملغاة"
                      icon={"/assets/cancelled.svg"}
                  />
                  </section>

                  <DataTable data={data} columns={columns}/>
                </main>
            </section> 
      </div>
    </div>
  </div>
  )
}

export default Dashboard