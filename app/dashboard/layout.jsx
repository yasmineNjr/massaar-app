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
      <div className="flex min-h-screen lg:flex-row flex-col">
        {/* Sidebar */}
        <aside className="lg:w-64 w-full bg-transparent text-customSecondary p-4">
          <h2 className="text-lg font-bold">أهلا بك في لوحة التحكم</h2>
          <ul className="flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 lg:w-auto w-full lg:justify-start justify-between">
            {menuItems.map((item) => (
                <li
                key={item.name}
                className={`px-4 py-2 cursor-pointer ${
                    selectedItem === item.name
                    ? "bg-customGray font-bold text-dimWhite"
                    : "hover:bg-customGray font-semibold"
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
        <main className="flex-1 p-6 bg-transparent text-primary font-semibold">
          {children}
        </main>
      </div>
    );
  }
  