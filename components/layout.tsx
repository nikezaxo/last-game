// /components/RootLayout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { useEffect, useState } from "react";
import "./globals.css"; // Make sure this path is correct

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Telegram Mini App',
  description: 'A simple Telegram Mini App using Next.js 14',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    // Ensure Telegram Web App SDK is loaded
    const script = document.createElement('script');
    script.src = "https://telegram.org/js/telegram-web-app.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Telegram?.WebApp?.initDataUnsafe?.user?.username) {
        setUsername(window.Telegram.WebApp.initDataUnsafe.user.username);
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Additional meta tags or links can be added here */}
      </head>
      <body className={inter.className}>
        {/* Clone children and pass the username as a prop */}
        {React.cloneElement(children as React.ReactElement, { username })}
      </body>
    </html>
  );
}
