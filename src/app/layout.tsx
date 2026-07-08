import type { Metadata } from "next";
import "./globals.css";
import { Geist, Cormorant_Garamond } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Bookdrop",
  description: "Curated weekly book recommendations delivered straight to your inbox.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(geist.variable, cormorant.variable)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
