// import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import styles from "./style";
// import { NavBar, Footer } from "@/components";
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import PasskeyModal from "@/components/PasskeyModal";
import { ActivePathProvider } from "@/components/ActivePathProvider";
import FloatingContactIcon from "@/components/FloatingContactIcon";
import { socialMedia } from "@/constants";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingIconsWithFooterCheck from "@/components/FloatingIconsWithFooterCheck";
import { OrderProvider } from '../context/AppContext'

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: [ '300', '400', '500', '600', '700'],
  variable: "--font-sans",
})

export const metadata = {
  title: "مسار الغربية",
  description: "A website for organizing tourist trips",
};

export default function RootLayout({ children, searchParams }) {

  const isAdmin = searchParams?.admin === "true";
  const MAINTENANCE_MODE = true;
  return (
    <html lang="en" dir="rtl">
      <OrderProvider>
        <ActivePathProvider>
          <body>
            {/* bg-gradient-to-r from-customLightGreen to-white */}
            {
              MAINTENANCE_MODE === true
              ?
              <div className="min-h-screen w-full bg-transparent text-primary-foreground text-center ">
                <div className="w-full h-full flex flex-col justify-center">
                  <h1>We'll be back soon!</h1>
                  <p>The site is currently under maintenance. Please check back later.</p>
                </div>
              </div>
              :
              <div className="w-full overflow-hidden bg-transparent">
                {isAdmin && <PasskeyModal/>}

                <div className={`${styles.paddingX} ${styles.flexCenter} `}>
                  <div className={`${styles.boxWidth}`}>
                    <NavBar/>
                  </div>
                </div>

                <div className="relative">
                  {children}
                  {/* <div className="fixed bottom-12 right-5 flex flex-col gap-2 -z-15">
                  {
                    socialMedia.map((item , index) => (
                      item.isFloating &&
                      <FloatingContactIcon key={index} item={item}/>
                    ))
                  }
                  </div> */}
                  {/* Floating Icons */}
                  <FloatingIconsWithFooterCheck socialMedia={socialMedia} />

                  <div className="fixed bottom-12 left-5 flex flex-col gap-2 -z-15">
                    <ScrollToTop /> {/* Floating "Go to Top" button */}
                  </div>
                </div>

                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                  <div className={`${styles.boxWidth}`}>
                    <Footer/>
                  </div>
                </div>
              </div>
            }      
          </body>
        </ActivePathProvider>
      </OrderProvider>
    </html>
  );
}
