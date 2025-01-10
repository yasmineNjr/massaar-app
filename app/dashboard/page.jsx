'use client'

import styles from '../style'
import { useEffect, useState } from 'react';
import StatCard from '@/components/StatCard'
import {DataTable} from '@/components/table/DataTable'
import {columns} from '@/components/table/columns'
import { FaCar } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";

const Dashboard = () => {
  
  const [allOrders, setAllOrders] = useState([]); // Store the full list of orders
  const [orders, setOrders] = useState([]); // Store the filtered orders
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [highlightOption, setHighlightOption] = useState('car')
  // const data = await getData();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setIsLoading(true); // Set loading to true before fetching
        const response = await fetch("/api/orders");
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setAllOrders(data); // Store the full list of orders
        setOrders(data); // Initially show all orders
        // console.log(data);
      } catch (error) {
        console.error("Failed to fetch orders:", error.message);
      }finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchOrders();
  }, []);

  const getCarOrders = () => {
    setOrders(allOrders.filter((d) => d.order_type === 'car')); // Filter from full list
    setHighlightOption('appointments')
  };

  const getHotelOrders = () => {
    setOrders(allOrders.filter((d) => d.order_type === 'hotel')); // Filter from full list
    setHighlightOption('pending')
  };
  
  return (
    <div className="w-full overflow-hidden">
  
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <div className="text-center">
                    <h2 className={`${styles.heading2} text-right text-gold`}>
                    إدارة الطلبات    
                    </h2>
                </div>
                <div className='mb-10 text-dimWhite'>
                  <p>ابدأ يومك بمعالجة طلبات الحجز</p>
                </div>
           
                <section className='mx-auto flex flex-col space-y-14 w-full'> 
                  {
                    isLoading 
                    ? 
                    <div className="flex justify-center items-center">
                      <div className="w-12 h-12 border-4 border-t-transparent border-l-gold border-b-gold border-r-gold rounded-full animate-spin"></div>
                    </div> 
                    :
                    <main className='admin-main '>
                      <section className='admin-stat w-full '>
                      <StatCard
                          type="appointments"
                          count={allOrders.filter((order) => order.order_type === 'car').length}//{data.filter((i) => i.status==='scheduled').length}
                          label='طلبات السيارات'
                          // icon={"/assets/appointments.svg"}
                          icon={<FaCar size={28} color='#F24E43'/>}
                          onClickHandler={getCarOrders}
                          highlight={highlightOption}
                      />
                      <StatCard
                          type="pending"
                          count={allOrders.filter((order) => order.order_type === 'hotel').length}//{data.filter((i) => i.status==='pending').length}
                          label="طلبات الفنادق"
                          // icon={"/assets/pending.svg"}
                          icon={<FaHotel size={28} color='#24AE7C'/>}
                          onClickHandler={getHotelOrders}
                          highlight={highlightOption}
                      />
                      {/* <StatCard
                          type="cancelled"
                          count={2}//{data.filter((i) => i.status==='cancelled').length}
                          label="الطلبات الملغاة"
                          icon={"/assets/cancelled.svg"}
                      /> */}
                      </section>
                      <DataTable data={orders} columns={columns}/>
                  </main>
                  }
                  
              </section> 
      </div>
    </div>
  </div>
  )
}

export default Dashboard