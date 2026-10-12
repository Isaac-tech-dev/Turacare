import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/config/site";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-quicksand" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "TuraCare: made from nature, made for you", template: "%s | TuraCare" },
  description: site.description,
  openGraph: { title: "TuraCare", description: site.description, type: "website", images: ["/brand/logo-vertical.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-gable focus:px-3 focus:py-2 focus:text-cream">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
