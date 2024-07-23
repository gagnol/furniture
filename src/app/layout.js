"use client"
import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { THEME, MODE } from "@/constant/products"; 

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [accentColor, setAccentColor] = useState(THEME[0].accent);
  const [appearance, setAppearance] = useState(MODE[0].appearance);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance={appearance} accentColor={accentColor}>
          <Header 
          accentColor={accentColor} 
          setAccentColor={setAccentColor} 
          appearance={appearance}
          setAppearance={setAppearance}
          />
          {children}
          <Footer/>
        </Theme>
      </body>
    </html>
  );
}
