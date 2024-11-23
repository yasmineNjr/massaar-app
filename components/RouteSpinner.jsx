"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // For App Router
import { Circles } from "react-loader-spinner";

export default function RouteSpinner() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Simulate route change or track pathname changes
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70">
        <Circles height={80} width={80} color="blue" ariaLabel="loading" />
      </div>
    )
  );
}
