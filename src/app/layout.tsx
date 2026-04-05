import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noori Aqua — Custom Branded Water Bottles Karachi",
  description:
    "Noori Aqua manufactures custom branded water bottles for restaurants, hotels, weddings, conferences, corporate events, schools, and MUNs across Karachi.",
  keywords:
    "custom branded water bottles Karachi, custom label water bottles, branded bottle manufacturer, corporate water bottles, event water bottles Karachi",
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
