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
      item: "car - staria"
    },
    {
      id: "728ed52f",
      client: 'qqq',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - BMW"
    },
    {
      id: "728ed52f",
      client: 'ddd',
      amount: 100,
      status: "scheduled",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - staria"
    },
    {
      id: "728ed52f",
      client: 'bbb',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "hotel - clock"
    },
    {
      id: "728ed52f",
      client: 'aaa',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - BMW"
    },
    {
      id: "728ed52f",
      client: 'sss',
      amount: 100,
      status: "scheduled",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "hotel - clock"
    },
    {
      id: "728ed52f",
      client: 'kkk',
      amount: 100,
      status: "scheduled",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - Ford"
    },
    {
      id: "728ed52f",
      client: 'ooo',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "hotel - anwar"
    },
    {
      id: "728ed52f",
      client: 'mmm',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "hotel - marwa"
    },
    {
      id: "728ed52f",
      client: 'nnn',
      amount: 100,
      status: "cancelled",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - Ford"
    },
    {
      id: "728ed52f",
      client: 'www',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - Ford"
    },
    {
      id: "728ed52f",
      client: 'yyy',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - BMW"
    },
    {
      id: "728ed52f",
      client: 'www',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - Staria"
    },
    {
      id: "728ed52f",
      client: 'zzz',
      amount: 100,
      status: "scheduled",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "hotel - marwa"
    },
    // ...
  ]
}

const Dashboard = async() => {

  const lst =[
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]

  const data = await getData();

  return (
    <div className="w-full overflow-hidden">
  
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <div className="text-center">
                    <h2 className={`${styles.heading2} text-right`}>
                    إدارة الطلبات    
                    </h2>
                </div>
                <div className='mb-10'>
                  <p>ابدأ يومك بمعالجة طلبات الحجز</p>
                </div>
            
            <section className='mx-auto flex flex-col space-y-14'> 
                <main className='admin-main'>
                  <section className='admin-stat'>
                  <StatCard
                      type="appointments"
                      count={lst.filter((i) => i.status==='done').length}//{appointments.scheduledCount}
                      label="الطلبات المثبتة"
                      icon={"/assets/appointments.svg"}
                  />
                   <StatCard
                      type="pending"
                      count={lst.filter((i) => i.status==='pending').length}//{appointments.pendingCount}
                      label="الطلبات المنتظرة"
                      icon={"/assets/pending.svg"}
                  />
                  <StatCard
                      type="cancelled"
                      count={lst.filter((i) => i.status==='cancelled').length}//{appointments.cancelledCount}
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