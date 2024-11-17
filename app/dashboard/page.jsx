import React from 'react'
import styles from '../style'
import StatCard from '@/components/StatCard'

const Dashboard = () => {
  return (
    <div className="w-full overflow-hidden">
  
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <div className="text-center">
                    <h2 className={`${styles.heading2} text-right`}>
                    إدارة الطلبات    
                    </h2>
                </div>
                <p>ابدأ يومك بمعالجة طلبات الحجز</p>
            
            <section className='mx-auto flex flex-col space-y-14'> 
                <main className='admin-main'>
                  <section className='admin-stat'>
                  <StatCard
                      type="appointments"
                      count={5}//{appointments.scheduledCount}
                      label="Scheduled appointments"
                      icon={"/assets/icons/appointments.svg"}
                  />
                   <StatCard
                      type="pending"
                      count={2}//{appointments.pendingCount}
                      label="Pending appointments"
                      icon={"/assets/icons/pending.svg"}
                  />
                  <StatCard
                      type="cancelled"
                      count={3}//{appointments.cancelledCount}
                      label="Cancelled appointments"
                      icon={"/assets/icons/cancelled.svg"}
                  />
                  </section>
                </main>
            </section> 
      </div>
    </div>
  </div>
  )
}

export default Dashboard