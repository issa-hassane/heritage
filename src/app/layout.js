import "bootstrap/dist/css/bootstrap.css";
// import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapClient from "@/app/components/BootstrapClient";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Heritage Haven",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bodyFontFamily"}>{children}</body>
      <BootstrapClient />
    </html>
  );
}
