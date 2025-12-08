import type { Metadata } from "next";
import { Titillium_Web, Archivo } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-heading",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "StackNothing | Intelligent Digital Realities",
  description: "We merge unconventional creativity with cutting-edge AI to craft digital experiences that think, adapt, and outperform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${titillium.variable} antialiased bg-background text-foreground flex flex-col min-h-screen font-body`}
      >
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
