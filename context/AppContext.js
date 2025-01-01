'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context
const OrderContext = createContext();

// Custom hook for accessing the context
export const useOrders = () => useContext(OrderContext);

// Provider component
export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    // Initialize from localStorage
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  // Update localStorage when orders change
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  // Add order function
  const addOrder = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };


  // Delete an order by ID
  const deleteOrder = (orderId) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
  };

  // Clear all orders
  const clearOrders = () => {
    setOrders([]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, clearOrders, deleteOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
