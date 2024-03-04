"use client";

import Modal from "react-modal";

import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import TextInputField from "../input-fields/text-input-fields";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Button, Input } from "@nextui-org/react";
// import { toast } from "react-toastify";
import { BiSolidUser } from "react-icons/bi";
import { AiFillUnlock } from "react-icons/ai";

const LoginPage = () => {
  const router = useRouter();

  //get pathname
  let pathname: string = "";

  try {
    pathname = window.location.href;
    // console.log("pathname1", window.location.href);
  } catch (error) {}

  if (pathname) {
    const r: number = pathname.indexOf("/", 9);
    if (r !== -1) {
      pathname = pathname.substring(0, r);
    }
    // console.log("pathname", pathname);
  }

  const [isOpen, setIsOpen] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: 50,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "transparent",
    },
  };

  const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });
      if (response?.error) {
        toast.error("Username or Password Incorrect!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }
      toast.success("Logged in successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.push("/home");
    } catch (error) {
      console.log("System error please reload!", error);
      toast.error("error", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="flex flex-col md:flex-row h-screen items-center w-full">
      <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
      >
        <div className="w-full h-100">
          <div className="flex justify-center items-center">
            <span className="text-2xl font-black leading-none text-gray-900 select-none flex item-center">
              A & F Sour<span className="text-indigo-600">cing</span>
            </span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Log in to your account
          </h1>

          <div className="mt-6">
            <div className="flex flex-col mb-6">
              <label
                htmlFor="email"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Username:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <BiSolidUser className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                </div>
                <input
                  id="username"
                  type="text"
                  name="username"
                  className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Password:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <AiFillUnlock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                </div>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >
                Forgot Password?
              </a>
            </div> */}

            <button
              onClick={login}
              className="flex mt-3 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
            >
              <span className="mr-2 uppercase">Login</span>
              <span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </button>
          </div>

          <hr className="my-6 border-gray-300 w-full" />
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
