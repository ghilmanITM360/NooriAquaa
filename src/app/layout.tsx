import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noori Aqua — Premium Water Delivery Karachi",
  description:
    "Noori Aqua provides premium 19L water bottle delivery across Karachi for homes, restaurants, offices, hotels, weddings, conferences, and events.",
  keywords:
    "water delivery Karachi, 19L bottle delivery, office water supply, event water Karachi, bulk water delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
