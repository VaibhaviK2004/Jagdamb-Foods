import type { Metadata } from "next";
import "./globals.css";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Jagdamb Foods | Authentic Indian Fruit Bars, Candies & Confectionery",
  description: "Manufacturer of premium Fruit Bar Toffees made with real fruit taste and traditional Maharashtrian recipes. Flavours include Mango, Raw Kacchi Keri, Imli, Strawberry, Guava & more. Bulk orders & direct factory supply.",
  keywords: "Jagdamb Foods, Fruit Bar, Aam Papad, Imli Candy, Tamarind Burfi, Mango Candy, Toffee, Peth Naka Confectionery, Wholesale Candies India",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Jagdamb Foods - Sweetness with Traditional Taste",
    description: "Premium Indian Fruit Bars, Tamarind Candies, and Traditional Toffees crafted in Maharashtra.",
    url: "https://jagdamb-foods.vercel.app",
    siteName: "Jagdamb Foods",
    images: [
      {
        url: "https://jagdamb-foods.vercel.app/images/fruite.jpeg",
        width: 1200,
        height: 630,
        alt: "Jagdamb Foods Confectionery",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600&family=Jost:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FAF5EC] text-[#1F1F1F] font-sans antialiased selection:bg-heritage-crimson selection:text-white flex flex-col">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
