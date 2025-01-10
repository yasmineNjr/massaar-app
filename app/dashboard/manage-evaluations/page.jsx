'use client';

import styles from '@/app/style'
import { DataTable } from '@/components/table/DataTable'
import { evaluationsColumns } from '@/components/table/evaluationsColumns'
// import { evaluations } from '@/constants'
import React, { useEffect, useState } from 'react'

const ManageEvaluations = async() => {

  // const data = evaluations;
  const [evaluations, setEvaluations] = useState([]); // Store the filtered orders
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  // const data = await getData();
  
  useEffect(() => {
    const fetchEvaluations = async () => {
      try {
        setIsLoading(true); // Set loading to true before fetching
        const response = await fetch("/api/evaluations");
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setEvaluations(data); // Store the full list of orders
        // console.log(data);
      } catch (error) {
        console.error("Failed to fetch Evaluations:", error.message);
      }finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchEvaluations();
  }, []);


  return (
    <div className="w-full overflow-hidden">
  
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <div className="text-center">
                    <h2 className={`${styles.heading2} text-right text-gold`}>
                    إدارة تعليقات العملاء  
                    </h2>
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
                <div className="w-full overflow-x-auto">
                  <DataTable data={evaluations} columns={evaluationsColumns}/>
                </div>
              </main>
            }
            </section> 
      </div>
    </div>
  </div>
  )
}

export default ManageEvaluations