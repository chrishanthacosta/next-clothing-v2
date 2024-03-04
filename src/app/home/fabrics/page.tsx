"use client";

import NewFabric from "@/app/components/page-components/fabrics/addnew";
import { FabricTable } from "@/app/components/page-components/fabrics/table";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Fabrics() {
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
  const [fabricRowData, setFabricRowData] = useState<any[]>([]);
  const [reloadTable, setReloadTable] = useState(false);

  useEffect(() => {
    fetchFabricData();
  }, [reloadTable]);

  const fetchFabricData = async () => {
    const response = await fetch(pathname + "/api/fabrics");
    const res = await response.json();
    setFabricRowData(res.fabricData);
  };

  const toggleReloadTable = () => {
    setReloadTable((prv: boolean) => !prv);
  };

  return (
    <div className="flex ml-3 flex-col bg-slate-200 w-full">
      <span className="text-3xl font-black leading-none text-gray-900 select-none">
        Fabri<span className="text-indigo-600">cs</span>
      </span>
      <div className="justify-end w-full flex mt-3">
        <NewFabric type="new" setReloadTable={toggleReloadTable}/>
      </div>
      <div className="flex w-full mt-3 item-center justify-center">
        <FabricTable fabricRowData={fabricRowData} setReloadTable={toggleReloadTable}/>
      </div>
    </div>
  );
}
