
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileNavigation from "@/components/web/navigation/mobile_navigation";

import ArticleState from "@/context/ArticlesContext";
import AuthState from "@/context/AuthContext";
import FeedState from "@/context/FeedContext";
import { Toaster } from "@/components/ui/toaster";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tstall",
  description: "A one Stop application for all your news needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <AuthState>
      <ArticleState>
      <FeedState>


    <html lang="en">
      <body className="cantata-one-regular overflow-x-hidden">
        
        <Toaster />
        {children}
        <MobileNavigation />
        </body>
    </html>
      </FeedState>
      </ArticleState>
      </AuthState>
  
  );
}
