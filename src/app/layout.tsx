import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Granit173 — Памятники из гранита в Ульяновске",
  description:
  "Изготовление и продажа памятников из гранита в Ульяновске. Каталог моделей, индивидуальные заказы, монтаж и гравировка. Тел.: 8 927 805-11-00, 8 927 989-70-00",
  metadataBase: new URL("https://granit173.ru"),
  openGraph: {
    title: "Granit173 — Памятники из гранита в Ульяновске",
    description:
    "Каталог памятников, наши работы и контакты. Индивидуальные проекты и монтаж под ключ.",
    url: "https://granit173.ru",
    siteName: "Granit173",
    locale: "ru_RU",
    type: "website"
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({
  children


}: {children: React.ReactNode;}) {
  return (
    <html lang="ru" data-oid="_vxh101">
      <body
        className="min-h-screen bg-zinc-50 text-zinc-900 antialiased"
        data-oid="7w5tf6t">

        <div className="relative flex min-h-screen flex-col" data-oid="4:pn-vs">
          <Navbar data-oid="cz7ufxp" />
          <main className="flex-1" data-oid="rjufobc">
            {children}
          </main>
          <Footer data-oid="4x8ehw:" />
        </div>

        <Script
          src="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/client/public/onlook-preload-script.js"
          strategy="afterInteractive"
          type="module"
          id="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/client/public/onlook-preload-script.js"
          data-oid="iud32in">
        </Script>
      </body>
    </html>);

}