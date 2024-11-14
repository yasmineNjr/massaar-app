// import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import styles from "./style";
import { NavBar, Footer } from "@/components";


const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: [ '300', '400', '500', '600', '700'],
  variable: "--font-sans",
})

export const metadata = {
  title: "مسار الغربية",
  description: "A website for organizing tourist trips",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" dir="rtl">
      <body
      >
        
        <div className="bg-primary w-full overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <NavBar/>
            </div>
          </div>

          {children}

          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Footer/>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
