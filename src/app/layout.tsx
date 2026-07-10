import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Certifique-se de carregar o Tailwind aqui

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "CKS Sistemas | Sistemas Personalizados e Sites de Alta Performance",
  description:
    "Desenvolvimento de software sob medida para pequenas e médias empresas. Automatize processos, crie sites profissionais e escale seu negócio com a CKS Sistemas.",
  keywords: [
    "desenvolvimento de sistemas personalizados",
    "criação de sites profissionais",
    "software para pequenas e médias empresas",
    "ERP customizado",
    "CRM para PMEs",
    "CKS Sistemas",
  ],
  authors: [{ name: "Cristiano Silva" }, { name: "Kaleb Silva" }],
  openGraph: {
    title: "CKS Sistemas | Tecnologia sob medida para PMEs",
    description:
      "Transformamos a rotina da sua empresa em sistemas inteligentes e sites que vendem.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-[#0B0F19] text-gray-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
