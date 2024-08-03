import { Inter } from "next/font/google";
import "./globals.css";
import TopHeader from "./components/TopHeader";
import BottomHeader from "./components/BottomHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WeOutside.ng",
  description: "Travel, Home and Car Rentals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div >
          <TopHeader />
          <BottomHeader />
        </div>
        {children}
      </body>
    </html>
  );
}
