import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/componentes/NavBar"
import Footer from "@/componentes/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech e-commerce",
  description: "",
  icons: {
    icon: "/images/logo.png", 
  },
  
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex flex-grow justify-center">{children}</main> 
      <Footer/> 
      </div>
       </body>
    </html>

  );
}


