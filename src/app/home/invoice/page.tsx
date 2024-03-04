"use client";

import { InvoiceTable } from "@/app/components/page-components/invoice/table";
import NewSupplier from "@/app/components/page-components/suppliers/addnew";
import { SupplierTable } from "@/app/components/page-components/suppliers/table";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { VscNewFile } from "react-icons/vsc";

export default function Invoice() {
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
  const [invoiceRowObjects, setInvoiceRowObjects] = useState<any[]>([]);
  // const [reloadTable, setReloadTable] = useState(false);

  useEffect(() => {
    fetchInvoiceData();
  }, []);

  const fetchInvoiceData = async () => {
    const response = await fetch(pathname + "/api/invoice");
    const res = await response.json();
    setInvoiceRowObjects(res.invoiceData);
  };

  // const toggleReloadTable = () => {
  //   setReloadTable((prv: boolean) => !prv);
  // };

  const createNewInvoice = () => {
    router.push("/home/invoice/newinvoice");
  };

  return (
    <div className="flex ml-3 flex-col bg-slate-200 w-full">
      <span className="text-3xl font-black leading-none text-gray-900 select-none">
        Invoi<span className="text-indigo-600">ce</span>
      </span>
      <div className="justify-end w-full flex mt-3">
        <Button
          color="primary"
          onClick={createNewInvoice}
          startContent={<VscNewFile />}
        >
          Create New
        </Button>
      </div>
      <div className="flex w-full mt-3 item-center justify-center">
        <InvoiceTable invoiceRowObjects={invoiceRowObjects} />
      </div>
    </div>
  );
}
