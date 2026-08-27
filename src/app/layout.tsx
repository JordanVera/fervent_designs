import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { COMPANY } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: `${COMPANY.name} — Houston Wedding Planner & Event Designer`,
  description:
    "Fervent Designs is an award-winning full-service wedding planning and event design company in Houston, TX — your one-stop shop for weddings and destination celebrations.",
  keywords:
    "Fervent Designs Houston, wedding planner Houston, event designer Houston, destination wedding planner, Richandra wedding planner",
  openGraph: {
    title: `${COMPANY.name} | ${COMPANY.tagline}`,
    description:
      "Full-service wedding planning and event design in Houston and destination weddings abroad.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
