import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/molecules/navBar/navBar";
import NavBarBtn from "@/components/atoms/navBarBtn/navBarBtn";
import NavBarWrapper from "@/components/molecules/navBarWrapper/navBarWrapper";
import { AccountProvider } from "@/context/accountProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Career Navigator",
  description: "Navigator for You're Career",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <AccountProvider>
          {/* <NavBar />
          <NavBarBtn /> */}
          <NavBarWrapper />

          {children}
        </AccountProvider>
      </body>
    </html>
  );
}
