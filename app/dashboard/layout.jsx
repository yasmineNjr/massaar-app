'use client'

import { useState } from "react";
import Link from "next/link";

export default function DashboardLayout({ children }) {

    const menuItems = [
        { name: "إدارة الطلبات", href: "/dashboard" },
        { name: "سيارة جديدة", href: "/dashboard/new-car" },
        { name: "فندق جديد", href: "/dashboard/new-hotel" },
      ];
    
      const [selectedItem, setSelectedItem] = useState("إدارة الطلبات");

    return (
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-dark text-white p-4">
          <h2 className="text-lg font-bold">أهلا بك في لوحة التحكم</h2>
          <ul>
            {menuItems.map((item) => (
                <li
                key={item.name}
                className={`px-4 py-2 cursor-pointer ${
                    selectedItem === item.name
                    ? "bg-gray-700 font-bold"
                    : "hover:bg-gray-600"
                }`}
                >
                <Link
                    href={item.href}
                    onClick={() => setSelectedItem(item.name)}
                    className="block" // Ensures full area is clickable
                >
                    {item.name}
                </Link>
                </li>
            ))}
            </ul>

        </aside>
  
        {/* Main Content */}
        <main className="flex-1 p-6 bg-dark-400 text-dimWhite">
          {children}
        </main>
      </div>
    );
  }
  