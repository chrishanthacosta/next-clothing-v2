"use client";

import NewCustomer from "@/app/components/page-components/customers/addnew";
import { CustomerTable } from "@/app/components/page-components/customers/table";
import NewFabric from "@/app/components/page-components/fabrics/addnew";
import { FabricTable } from "@/app/components/page-components/fabrics/table";
import NewSupplier from "@/app/components/page-components/suppliers/addnew";
import { SupplierTable } from "@/app/components/page-components/suppliers/table";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Customers() {
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
  const [customerRowData, setCustomerRowData] = useState<any[]>([]);
  const [reloadTable, setReloadTable] = useState(false);

  useEffect(() => {
    fetchFabricData();
  }, [reloadTable]);

  const fetchFabricData = async () => {
    const response = await fetch(pathname + "/api/customers");
    const res = await response.json();
    setCustomerRowData(res.customerData);
  };

  const toggleReloadTable = () => {
    setReloadTable((prv: boolean) => !prv);
  };

  return (
    <div className="flex ml-3 flex-col bg-slate-200 w-full">
      <span className="text-3xl font-black leading-none text-gray-900 select-none">
        Custom<span className="text-indigo-600">ers</span>
      </span>
      <div className="justify-end w-full flex mt-3">
        <NewCustomer type="new" setReloadTable={toggleReloadTable} />
      </div>
      <div className="flex w-full mt-3 item-center justify-center">
        <CustomerTable
          customerRowData={customerRowData}
          setReloadTable={toggleReloadTable}
        />
      </div>
    </div>
  );
}
