import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
