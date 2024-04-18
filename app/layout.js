import { Inter } from "next/font/google";
import "./globals.css";
import NavMenu from "./components/NavMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GG.Life",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      {/* <body className="h-screen bg-gradient-to-b from-gray-900 to-gray-300"> */}
      <body className="h-screen bg-gray-200">
        {children}
      </body>

    </html>
  );
}
