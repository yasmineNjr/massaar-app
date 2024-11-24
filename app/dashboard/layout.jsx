'use client'

import { useState } from "react";
import Link from "next/link";
import { dashboardMenuItems } from "@/constants";

export default function DashboardLayout({ children }) {
    
      const [selectedItem, setSelectedItem] = useState("إدارة الطلبات");

    return (
      <div className="flex min-h-screen lg:flex-row flex-col">
        {/* Sidebar */}
        <aside className="lg:w-[15%] w-auto bg-transparent text-customSecondary p-4">
          <h2 className="text-lg font-bold mb-5">أهلا بك في لوحة التحكم</h2>
          <ul className="overflow-x-auto flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 lg:w-auto w-full lg:justify-start justify-between">
            {dashboardMenuItems.map((item) => (
                <li
                key={item.name}
                className={`px-4 py-2 cursor-pointer min-w-[110px] ${
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
        <main className="lg:w-[85%] w-full flex-1 p-6 bg-transparent text-primary font-semibold">
          {children}
        </main>
      </div>
    );
  }
  