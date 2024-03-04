"use client";

import NewFabric from "@/app/components/page-components/fabrics/addnew";
import { FabricTable } from "@/app/components/page-components/fabrics/table";
import PoExcelPage from "@/app/components/page-components/purchaseorder/po-excel-module";
import TableTranspose from "@/app/components/page-components/purchaseorder/sample";
// import PoPrintingTemplate from "@/app/components/page-components/purchaseorder/po-printing-temp";
import { PoTable } from "@/app/components/page-components/purchaseorder/table";
import { Button, Input, Pagination } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { VscNewFile } from "react-icons/vsc";

export default function PurchaseOrder() {
  const router = useRouter();

  //get pathname
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
  const [poRowObjects, setPoRowObjects] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPoCount, setTotalPoCount] = useState(1);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleKeyPress = async (event: any) => {
    if (event.key === "F2" || event.keyCode === 113) {
      createNewPo();
    }
  };

  useEffect(() => {
    getAllPoDetails();
  }, [currentPage, search]);

  const createNewPo = () => {
    router.push("/home/purchaseorder/newpurchaseorder");
  };

  const getAllPoDetails = async () => {
    const fetchData = async () => {
      setSearch(search.trim());
      const reponse = await fetch(
        pathname +
          "/api/purchaseorder?currentPage=" +
          currentPage +
          "&searchValue=" +
          (search ? search : "-1")
      );
      const res = await reponse.json();
      setPoRowObjects(res.poData);

      const tmpCount = Math.ceil(res.poCount / 10);
      setTotalPoCount(tmpCount);
      console.log("res.items", res.poData);
    };

    // call the function
    await fetchData().catch(console.error);
    // const tmpCount = Math.ceil(res.itemCount / 10);
    // setTotalItemCount(tmpCount);
  };
  // const handlePrint = () => {
  //   window.print();
  // };
  const originalData = [
    { name: 'A', age: 25, city: 'New York' },
    { name: 'B', age: 30, city: 'Los Angeles' },
    { name: 'C', age: 22, city: 'Chicago' },
  ];
  return (
    <div className="flex ml-3 flex-col bg-slate-200 w-full">
      <span className="text-3xl font-black leading-none text-gray-900 select-none">
        Purchase or<span className="text-indigo-600">der</span>
      </span>
      {/* <button onClick={handlePrint}>Print</button> */}
      <div className="flex w-full m-1">
        <div className="w-full flex items-center mt-4 sm:w-1/2">
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
        </div>
        <div className="justify-end w-full mt-3 flex items-center mr-3 gap-1">
          <PoExcelPage poRowObjectsIn={poRowObjects} />
          {/* <button
            onClick={createNewPo}
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Create New - F2
          </button> */}
          <Button
            color="primary"
            onClick={createNewPo}
            startContent={<VscNewFile />}
          >
            Create New - F2
          </Button>
        </div>
        {/* <div className="justify-end w-full mt-3 flex items-center mr-3">
          <button
            onClick={createNewPo}
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Create New - F2
          </button>
        </div> */}
      </div>
      <div className="flex w-full mt-3 item-center justify-center">
        <div className="flex flex-col w-full">
          <PoTable poRowObjects={poRowObjects} />
          <div className="md:px-2 mt-3">
            <Pagination
              isCompact
              showControls
              total={totalPoCount}
              page={currentPage}
              onChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mt-3 item-center justify-center">
        {/* <TableTranspose data={originalData} /> */}
      </div>
    </div>
  );
}
