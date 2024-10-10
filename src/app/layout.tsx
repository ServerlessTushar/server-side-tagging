import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
//import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //     /api/gtm         /js/gtm.js
  return (
    <html lang="en">
       <head>
        {/* Add the GTM script here */}
        <Script
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            '/js/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T9BNSS83');`,
          }}></Script>
          
      {/* <GoogleTagManager gtmId={'GTM-T9BNSS83'} serverSideContainerUrl={'https://localhost:3003/api/gtm'}/> */}
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe 
            src="https://server-side-tagging-plum.vercel.app/api/gtm/ns.html?id=GTM-T9BNSS83" 
            height="0" 
            width="0" 
            style={{ display:'none', visibility:'hidden' }}
          >
          </iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
