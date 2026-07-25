import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Serif_4, Inter, Josefin_Sans, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* Keep legacy fonts for inner pages that still use .font-lato / .font-josefin */
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-josefin",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Virtually Safe | Online Safety for Young People",
    template: "%s | Virtually Safe",
  },
  description:
    "Virtually Safe equips young people, parents, and educators with the resources they need to foster a culture of digital safety and well-being in Nigeria.",
  keywords: ["online safety", "internet safety", "digital safety", "Nigeria", "young people", "cyberbullying"],
  icons: {
    icon: [{ url: "/favicon-shield.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${sourceSerif.variable} ${inter.variable} ${josefinSans.variable} ${lato.variable}`}
    >
      <head>
        <link href="https://fonts.cdnfonts.com/css/nouvel-r" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
