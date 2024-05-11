import { Faustina } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const font = Faustina({ subsets: ["latin"] });

export const metadata = {
  title: "Aphrodite",
  description: "Jewelry Brand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
