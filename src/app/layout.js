import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Make & Acessorios",
  description: "Make & Acessorios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
      </body>
      <div id="contato">
        <Footer />
      </div>
    </html>
  );
}
