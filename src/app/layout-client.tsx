"use client";

import { ToastContainer } from "react-toastify";
// import TopNavbar from "./components/navbar";
// import { ThemeSwitcher } from "./components/theme-switcher";
// import { Provider } from "react-redux";
import { AuthProvider } from "./providers/auth/auth-provider";
// import { ToastContainer } from "react-toastify";
// import store from "@/store/store";
// import { NextUIProvider } from "@nextui-org/react";
import NextThemeProviders from "./providers/nextui/nextui-provider";
// import ThemeSwitcher from "./components/theme-switcher";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function LayoutClientComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <NextThemeProviders>
        <Provider store={store}>
          {/* <header className="py-1">
        <TopNavbar/>
        </header> */}
          {children}
          <ToastContainer />
        </Provider>
      </NextThemeProviders>
    </AuthProvider>
  );
}

// <AuthProvider>
// <Provider store={store}>
{
  /* <ToastContainer /> */
}
// </Provider>
// </AuthProvider>
{
  /* <AuthProvider>
<NextThemeProviders>
  <header className="py-6">
  <ThemeSwitcher />
  {/* <Navbar/> */
}
{
  /* <nav className="container flex items-center justify-between">
      <ul></ul>
      <ThemeSwitcher />
    </nav> */
}
//   </header>
//   <main>{children}</main>
// </NextThemeProviders>
// </AuthProvider> */}
