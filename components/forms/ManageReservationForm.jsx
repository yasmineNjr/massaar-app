'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'

const ManageReservationForm = ({ type, setOpen, order, source }) => {
    
    const [isLoading, setIsLoading] = useState(false);

    const updateOrderApproval = async (order_id , is_approved) => {
        try {
          console.log("Updating order with ID:", order_id, "Approval Status:", is_approved);
          
          setIsLoading(true);
          const response = await fetch("/api/orders", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ order_id , is_approved }),
            timeout: 10000, // Set the timeout to 10 seconds
          });
      
          if (response.ok) {
            const result = await response.json();
            console.log("Order updated:", result);
            return result; // Optionally return the result if needed
          } else {
            const error = await response.json();
            console.error("Error updating order:", error);
          }
        } catch (error) {
          console.error("Network error:", error.message);
        }finally {
            setIsLoading(false); // Set loading to false after fetching
            setOpen && setOpen(false); 
            window.location.reload(); // Refresh the page
          }
      };

    const updateEvaluationApproval = async (e_id , is_approved) => {
      try {
        console.log("Updating order with ID:", e_id, "Approval Status:", is_approved);
        
        setIsLoading(true);
        const response = await fetch("/api/evaluations", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ e_id , is_approved }),
          timeout: 10000, // Set the timeout to 10 seconds
        });
    
        if (response.ok) {
          const result = await response.json();
          console.log("Order updated:", result);
          return result; // Optionally return the result if needed
        } else {
          const error = await response.json();
          console.error("Error updating order:", error);
        }
      } catch (error) {
        console.error("Network error:", error.message);
      }finally {
          setIsLoading(false); // Set loading to false after fetching
          setOpen && setOpen(false); 
          // window.location.reload(); // Refresh the page
        }
    };

    const deleteOrder = async (order_id) => {
      try {
        setIsLoading(true); // Show a loading indicator if applicable
        const response = await fetch("/api/orders", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ order_id }), // Pass the order_id as JSON
        });
    
        if (response.ok) {
          const result = await response.json();
          console.log("Order deleted:", result);
          return result; // Optionally return the result if needed
        } else {
          const error = await response.json();
          console.error("Error deleting order:", error);
        }
      } catch (error) {
        console.error("Network error:", error.message);
      } finally {
        setIsLoading(false); // Hide the loading indicator
        setOpen && setOpen(false); 
        window.location.reload(); // Optionally refresh the page
      }
    };  
    
    const deleteEvaluation = async (e_id) => {
      try {
        setIsLoading(true); // Show a loading indicator if applicable
        const response = await fetch("/api/evaluations", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ e_id }), // Pass the order_id as JSON
        });
    
        if (response.ok) {
          const result = await response.json();
          console.log("Order deleted:", result);
          return result; // Optionally return the result if needed
        } else {
          const error = await response.json();
          console.error("Error deleting order:", error);
        }
      } catch (error) {
        console.error("Network error:", error.message);
      } finally {
        setIsLoading(false); // Hide the loading indicator
        setOpen && setOpen(false); 
        window.location.reload(); // Optionally refresh the page
      }
    };  
      
    const handleClick = async() => {
        if(type === 'details'){
            //send via whatsapp
            const phoneNumber = order.phone; // Replace with your number
            const message = 'لديك طلب حجز في مسار الغربية';
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
            setOpen && setOpen(false);      
        } else if (type === 'schedule'){
            if(source === 'order'){
              await updateOrderApproval(order.order_id, true)
            } else if(source === 'evaluation'){
              await updateEvaluationApproval(order.e_id, true)
            }
        } else if (type === 'delete'){
          if(source === 'order'){
            await deleteOrder(order.order_id)
          } else if(source === 'evaluation'){
            await deleteEvaluation(order.e_id)
          }
        }
    }
    const handleClose = () => {
        setOpen && setOpen(false);
        //window.location.reload(); // Refresh the page
    }

  return (
   <div className='flex w-full justify-center gap-4'>
    {
        isLoading 
        ?
        <div className="flex justify-center items-center">
            <div className="w-6 h-6 border-4 border-t-transparent border-l-gold border-b-gold border-r-gold rounded-full animate-spin"></div>
        </div> 
        :
        <Button onClick={handleClick}>
            موافق
        </Button>
    }
    <Button onClick={handleClose}>
        إلغاء الأمر
    </Button>
   </div>
  )
}

export default ManageReservationForm
