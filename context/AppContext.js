'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context
const OrderContext = createContext();

// Custom hook for accessing the context
export const useOrders = () => useContext(OrderContext);

// Provider component
export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false); // Tracks if localStorage has been read

  // Load orders from localStorage on the first render
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedOrders = localStorage.getItem('orders');
      if (savedOrders) {
        setOrders(JSON.parse(savedOrders));
      }
      setIsInitialized(true); // Mark initialization complete
    }
  }, []);

  // Update localStorage whenever the orders state changes
  useEffect(() => {
    if (isInitialized && typeof window !== 'undefined') {
      localStorage.setItem('orders', JSON.stringify(orders));
    }
  }, [orders, isInitialized]);

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
