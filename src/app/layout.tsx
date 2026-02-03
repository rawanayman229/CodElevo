import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodElevo",
  description: "CodElevo | Elevating Ideas Into Digital Reality",
  openGraph: {
    title: "CodElevo",
    description: "Digital solutions for your business",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}