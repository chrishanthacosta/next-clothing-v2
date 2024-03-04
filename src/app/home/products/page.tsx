"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import TextInputField from "@/app/components/input-fields/text-input-fields";
import { FaSearch } from "react-icons/fa";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
// import { ItemTable } from "@/app/components/items/table";
import { Input, Pagination } from "@nextui-org/react";
// import ProductSize from './components/ProductSize'

// import shoe from "@/public/images/shoe.webp";

export default function Products() {
  let pathname: string = "";

  try {
    pathname = window.location.href;
  } catch (error) {}

  if (pathname) {
    const r: number = pathname.indexOf("/", 9);
    if (r !== -1) {
      pathname = pathname.substring(0, r);
    }
  }

  const [search, setSearch] = useState("");
  const router = useRouter();
  const [itemRowObjects, setItemRowObjects] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItemCount, setTotalItemCount] = useState(1);

  const itemCallback = async () => {
    // window.location.href = "/home/items";
    router.push("/home/items");
  };

  const getAllItemDetails = async () => {
    // declare the data fetching function

    const fetchData = async () => {
      console.log("search", search);
      const reponse = await fetch(
        pathname +
          "/api/items?currentPage=" +
          currentPage +
          "&searchValue=" +
          (search ?? "-1")
      );
      const res = await reponse.json();
      setItemRowObjects(res.items);

      const tmpCount = Math.ceil(res.itemCount / 10);
      setTotalItemCount(tmpCount);
      console.log("res.items", res.items);
    };

    // call the function
    fetchData().catch(console.error);
  };

  useEffect(() => {
    getAllItemDetails();
  }, [currentPage, search]);

  return (
    <div className="flex flex-col ml-3 w-full bg-slate-200">
      <span className="text-3xl font-black leading-none text-gray-900 select-none pt-2">
        Prod<span className="text-indigo-600">ucts</span>
      </span>
      <div className="w-full flex items-center mt-4 sm:w-1/2">
        <Button
          isIconOnly
          color="warning"
          variant="light"
          aria-label="Create Item"
        >
          <BsFillPlusCircleFill
            onClick={itemCallback}
            className="inline-block h-6 w-6 text-indigo-700 hover:text-indigo-500 cursor-pointer"
          />
        </Button>
        {/* <div className="flex items-center w-full ml-2 rounded-lg border border-[#e0e0e0] bg-white py-2 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"> */}
        <Input
          autoFocus
          isClearable
          startContent={
            <FaSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          color="primary"
          label="Search"
          placeholder="Type to search..."
          variant="flat"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClear={() => setSearch("")}
        />
        {/* <span className="text-gray-500 pr-2">
            <FaSearch className="inline-block h-5 w-5" />
          </span>

          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            autoComplete=""
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white text-base font-medium text-[#6B7280] outline-none"
          /> */}
        {/* </div> */}
      </div>
      <div className="mt-4 w-fit">
        {/* <ItemTable itemRowObjects={itemRowObjects} /> */}
        <div className="md:px-2 mt-3">
          <Pagination
            isCompact
            showControls
            total={totalItemCount}
            page={currentPage}
            onChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
