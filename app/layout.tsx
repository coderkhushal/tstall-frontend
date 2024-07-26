
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileNavigation from "@/components/web/navigation/mobile_navigation";

import ArticleState from "@/context/ArticlesContext";
import AuthState from "@/context/AuthContext";
import FeedState from "@/context/FeedContext";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import WebsocketState from "@/context/websocketContext";


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
    <WebsocketState>


    <html lang="en">
      <body className="cantata-one-regular overflow-x-hidden">
        
        <Toaster />
        {children}
        <MobileNavigation />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5202156720176142"
        crossOrigin="anonymous"
        />
        </body>
    </html>
        </WebsocketState>
      </FeedState>
      </ArticleState>
      </AuthState>
  
  );
}
