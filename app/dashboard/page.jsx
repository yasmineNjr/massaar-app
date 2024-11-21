import React from 'react'
import styles from '../style'
import StatCard from '@/components/StatCard'
import {DataTable} from '@/components/table/DataTable'
import {columns} from '@/components/table/columns'

async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      client: 'xxx',
      amount: 100,
      status: "cancelled",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - staria",
      phone: '+966566633161'
    },
    {
      id: "728ed52f",
      client: 'qqq',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - BMW",
      phone: '+966566633161'
    },
    {
      id: "728ed52f",
      client: 'ddd',
      amount: 100,
      status: "scheduled",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - staria",
      phone: '+966566633161'
    },
    {
      id: "728ed52f",
      client: 'bbb',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "hotel - clock",
      phone: '+966566633161'
    },
    {
      id: "728ed52f",
      client: 'aaa',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - BMW",
      phone: '+966566633161'
    },
    {
      id: "728ed52f",
      client: 'sss',
      amount: 100,
      status: "scheduled",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "hotel - clock",
      phone: '+966566633161'
    },
    {
      id: "728ed52f",
      client: 'kkk',
      amount: 100,
      status: "scheduled",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - Ford",
      phone: '+966566633161'
    },
    {
      id: "728ed52f",
      client: 'ooo',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "hotel - anwar",
      phone: '+966566633161'
    },
    {
      id: "728ed52f",
      client: 'mmm',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "hotel - marwa",
      phone: '+966566633161'
    },
    {
      id: "728ed52f",
      client: 'nnn',
      amount: 100,
      status: "cancelled",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - Ford",
      phone: '+966566633161'
    },
    {
      id: "728ed52f",
      client: 'www',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - Ford",
      phone: '+966566633161'
    },
    {
      id: "728ed52f",
      client: 'yyy',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - BMW",
      phone: '+966566633161'
    },
    {
      id: "728ed52f",
      client: 'www',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - Staria",
      phone: '+966566633161'
    },
    {
      id: "728ed52f",
      client: 'zzz',
      amount: 100,
      status: "scheduled",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "hotel - marwa",
      phone: '+966566633161'
    },
    // ...
  ]
}

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
                <main className='admin-main'>
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