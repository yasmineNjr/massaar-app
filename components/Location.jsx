'use client';

import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { renderToString } from "react-dom/server"; // Converts JSX to string for Leaflet
import { logo } from "@/public/assets";
import Link from "next/link";
import Image from "next/image";
import { socialMedia } from "@/constants";

// Convert React Icon to HTML string
const CustomMarkerIcon = L.divIcon({
  className: "custom-icon", // Add class for styling if needed
  html: renderToString(
    <svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "blue", stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: "yellow", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "green", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "red", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <FaMapMarkerAlt style={{ fill: "url(#grad1)" }} />
  </svg>

  ),
  iconSize: [40, 40],
  iconAnchor: [20, 40], // Anchor for proper positioning
});

function Location() {
  return (
    <MapContainer
      center={[21.4225,  39.8262]} // Initial coordinates
      style={{ height: "500px", width: "100%" }} // Map size
      zoom={10} 
      scrollWheelZoom={false} 
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={[21.4225,  39.8262]} // Marker position
        icon={CustomMarkerIcon} // Use custom icon
      >
        <Popup>
           <div className="flex flex-col gap-6 w-[200px]">
            <div className="flex flex-row w-full">
              <div className="flex flex-col justify-between text-right w-[160px] mt-4">
                <Link href={`/`}>مسار الغربية</Link>
                <span>لتنظيم الرحلات السياحية</span>
              </div>
              <Image
                src={logo}
                alt="Logo"
                className="w-[60px] h-[60px] object-cover rounded-xl"
              />
            </div>
            <div className='flex flex-row md:mt-0 mt-6' >
              {socialMedia.map((social, index) => (
                  <Image 
                    key={social.id} 
                    src={social.icon} 
                    alt={social.id} 
                    className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length-1 ? 'ml-6' : 'ml-0'} transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
                    onClick={() => handleClick(social.link)}
                  />
              ))}
            </div> 
          </div>
             
           
         </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Location;

