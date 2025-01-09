'use client'

import React, { useEffect, useState } from 'react'
import styles from '../style'
import { DataTable } from '@/components/table/DataTable'
import { orderColumns } from '@/components/table/orderColumns'
import Button from '@/components/Button'
import { useOrders } from '@/context/AppContext'
import { useRouter } from 'next/navigation'

const page = () => {

  const { clearOrders, orders } = useOrders();
  const router = useRouter()
  const data = orders;

  const totalCost = orders.reduce((accumulator, currentItem) => {
    const quantity = parseInt(currentItem.quantity, 10); // Convert quantity to a number
    return accumulator + (currentItem.price * quantity);
  }, 0);
  
  const formatOrder = (order) => {
    // const trips = Array.isArray(order.trips)
    // ? order.trips.map((trip) => trip.title).join(', ')
    // : 'لا يوجد';
    const trips = Array.isArray(order.trips) && order.trips.length > 0 
                  ? order.trips.join(', ') 
                  : 'لا يوجد';
    const result = order.type === 'car' ?
    `
    المنتج: ${order.product}
    الاسم: ${order.name}
    الهاتف: ${order.phone}
    البريد الإلكتروني: ${order.email}
    التاريخ: ${order.date}
    ساعات الانتظار: ${order.hours}
    الملاحظات: ${order.notes}
    الدفع: ${order.payment}
    الرحلات: 
    ${trips}
    السعر: ${order.price}
    الكمية: ${order.quantity}
    `
    :
    `
    المنتج: ${order.product}
    الاسم: ${order.name}
    الهاتف: ${order.phone}
    البريد الإلكتروني: ${order.email}
    التاريخ: ${order.date}
    الأيام: ${order.days}
    الملاحظات: ${order.notes}
    الدفع: ${order.payment}
    السعر: ${order.price}
    الكمية: ${order.quantity}
    `;
    return result;
  };
 
  const addNewClient = async (name, email, phone) => {
    try {
      const response = await fetch("/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("Client added or exists:", data);
        return data.id; // Return the client's ID (new or existing)
      } else {
        const errorData = await response.json();
        console.error("Error adding client:", errorData.error);
        return null; // Handle error case
      }
    } catch (error) {
      console.error("Error during addNewClient:", error.message);
      return null; // Handle fetch error
    }
  };
  
  const addNewOrder = async (type, product, date, hours, days, notes, payment, price, quantity, is_approved, client_id) => {
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type, product, date, hours, days, notes, payment, price, quantity, is_approved, client_id }),
        timeout: 10000, // Set the timeout to 10 seconds
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log("Order created:", result);
      } else {
        const error = await response.json();
        console.error("Error creating order:", error);
      }
    } catch (error) {
      console.error("Network error:", error.message);
    }
  };
   
  const completeOrderHandler = async() => {
    //send via whatsapp
    // const phoneNumber = "+966566633161"; // Replace with your number
    // const message = orders.map(formatOrder).join('\n\n'); // Combine all orders
    // const encodedMessage = encodeURIComponent(message); // Encode for URL
    // const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    // window.open(url, '_blank'); // Open WhatsApp
    
    //save orders to database
    try {
      // Map orders to an array of promises and wait for all of them to complete
      await Promise.all(
        orders.map(async (order) => {
          try {
            const id = await addNewClient(order.name, order.email, order.phone); // Get the client ID
            if (id) {
              await addNewOrder(
                order.type,
                order.product,
                order.date,
                order.type === "car" ? order.hours : "0",
                order.type === "hotel" ? order.days : "0",
                order.notes,
                order.payment,
                order.price,
                order.quantity,
                false,
                id // Use the client ID for the order
              );
            } else {
              console.error(`Failed to add client for order: ${order.name}`);
            }
          } catch (error) {
            console.error(`Error processing order for ${order.name}:`, error.message);
          }
        })
      );      
    } catch (error) {
      console.error("Error saving orders:", error);
    }
    clearOrders();
    router.push('/');
  }

  return(
  <div className="bg-transparent w-full overflow-hidden">
      <div className={`bg-transparent ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <section className={`flex flex-col ${styles.paddingY} `}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
              <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[22px] text-gold ss:leading-[100.8px] leading-[75px]">
                سلة الحجوزات
                </h1>
              </div>
              {
                data.length > 0 
                ?
                <>
                  <DataTable data={data} columns={orderColumns} source='orders' total={totalCost}/>

                  <div className="flex flex-1 justify-center items-center w-full gap-6 mt-10 h-[70px]">
                    <Button styles='w-[50%]' title='إتمام' onClickHandler={completeOrderHandler}/>
                    <Button styles='w-[50%]' title='إفراغ السلة' onClickHandler={clearOrders}/>
                  </div>
                </>
                :
                <div className='text-dimWhite font-bold text-center w-full text-[20px] p-10'>
                  <p>لا يوجد حجوزات </p>
                </div>
              }
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default page



// const [isClient, setIsClient] = useState(false);
  // const [ordersLst, setOrdersLst] = useState([]);

  // useEffect(() => {
  //   setIsClient(true);

  //   if (typeof window !== "undefined") {
  //     const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  //     setOrdersLst(orders);
  //   }
  // }, []);