import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from '@/app/common/NavBar'
import Footer from '@/app/common/Footer'
import styles from '@/app/page.module.css'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    < head>
    </head>
    <body className={styles.body}>
      <NavBar></NavBar>
      {children}
      <Footer></Footer>
    </body>
      
    </html>
  );
}
