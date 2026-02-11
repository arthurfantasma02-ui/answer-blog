import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter, Space_Grotesk} from "next/font/google";

const interFont = Inter({ subsets: ["latin"] });
const spaceGroteskFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
});



export const metadata: Metadata = {
  title: "Answer Blog",
  description: "Reviews, opiniões e descobertas da música japonesa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
