"use client";

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
import SideNavbar from "../components/sidenav-bar/sidenav-bar";
const inter = Inter({ subsets: ["latin"] });

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-slate-200 pt-2">
      <div className="flex">
        <SideNavbar />
      </div>
      <div className="flex overflow-auto w-full">{children}</div>
    </div>
  );
}
