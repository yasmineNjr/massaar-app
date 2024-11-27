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

  return (
    <html lang="en" dir="rtl">
      <ActivePathProvider>
         <body
        >
          <div className="w-full overflow-hidden bg-gradient-to-r from-customLightGreen to-white">
            {isAdmin && <PasskeyModal/>}

            <div className={`${styles.paddingX} ${styles.flexCenter} `}>
              <div className={`${styles.boxWidth}`}>
                <NavBar/>
              </div>
            </div>
              {children}
              <div className="fixed bottom-12 right-5 flex flex-col gap-2 -z-15">
              {
                socialMedia.map((item , index) => (
                  item.isFloating &&
                  <FloatingContactIcon item={item}/>
                ))
              }
              </div>
              <div className="fixed bottom-12 left-5 flex flex-col gap-2 -z-15">
                <ScrollToTop /> {/* Floating "Go to Top" button */}
              </div>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Footer/>
              </div>
            </div>
          </div>
        </body>
      </ActivePathProvider>
     
    </html>
  );
}
