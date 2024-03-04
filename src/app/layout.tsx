import { Metadata } from "next";

import "./globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { GlobalContextProvider } from "./globalContext/store";
import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";
// import { AuthProvider } from "./providers";
// import { Provider } from "react-redux";
// import store from "@/store/store";

import { Inter } from "next/font/google";
import LayoutClientComponent from "./layout-client";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CeyInfo ProTrack",
  description: "Next Generation Project Monitoring Web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-200 text-slate-800 container min-h-screen mx-auto p-4`}
      >
        <LayoutClientComponent>{children}</LayoutClientComponent>
      </body>
    </html>
  );
}
