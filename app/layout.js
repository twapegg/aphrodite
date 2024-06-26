import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";
import Footer from "@/components/Footer";

const inter = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Aphrodite",
  description: "Jewelry Brand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main>
            {children}
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
}
