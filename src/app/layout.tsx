import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AxeReporter from "../utils/AxeReporter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desenvolvendo uma web acessivel | Rocketseat Blog",
  description:
    "Aprenda as melhores praticas para desenvolver aplicacoes mais acessiveis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        {children}
        <AxeReporter />
      </body>
    </html>
  );
}
