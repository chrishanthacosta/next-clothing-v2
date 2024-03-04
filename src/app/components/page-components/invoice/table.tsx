"use client";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { MdOutlineEditNote } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { fetchSelPoDataForEdit } from "@/store/purchaseorder/utils";
import { handleDelete } from "@/app/home/invoice/newinvoice/utils";

export const InvoiceTable = ({
  invoiceRowObjects,
}: {
  invoiceRowObjects: any[];
}) => {
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

  const dispatch = useDispatch();
  const router = useRouter();

  const tableHeads = [
    "#",
    "Invoice Id",
    "Invoice No",
    "Date",
    "Customer",
    "Remark",
    "",
  ];

  const editInvoice = (invoiceid: any) => {
    router.push("/home/invoice/newinvoice?invoiceid=" + invoiceid);
  };

  return (
    <div className="md:px-2 py-2 w-full sm:w-5/5 flex">
      <div className="shadow rounded border-b border-gray-200 w-full">
        <Table isStriped aria-label="Example static collection table">
          <TableHeader>
            {tableHeads.map((head) => (
              <TableColumn key={head}>{head}</TableColumn>
            ))}
          </TableHeader>
          <TableBody>
            {invoiceRowObjects?.map((tableRow: any, index: number) => (
              <TableRow key={tableRow.invoiceid} className="bg-purple-gray-300">
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {tableRow.invoiceid ? tableRow.invoiceid : "-"}
                </TableCell>
                <TableCell>
                  {tableRow.invoiceno ? tableRow.invoiceno : "-"}
                </TableCell>
                <TableCell>{tableRow.date ? tableRow.date : "-"}</TableCell>
                <TableCell>
                  {tableRow.customername ? tableRow.customername : "-"}
                </TableCell>
                <TableCell>{tableRow.remark ? tableRow.remark : "-"}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button
                      isIconOnly
                      color="warning"
                      variant="light"
                      aria-label="Create Item"
                    >
                      <MdOutlineEditNote
                        onClick={() => editInvoice(tableRow.invoiceid)}
                        className="inline-block h-6 w-6 text-indigo-700 hover:text-indigo-500 cursor-pointer"
                      />
                    </Button>
                    <Button
                      isIconOnly
                      color="warning"
                      variant="light"
                      aria-label="Create Item"
                    >
                      <RiDeleteBin5Line
                        onClick={() =>
                          handleDelete(pathname, tableRow.invoiceid)
                        }
                        className="inline-block h-6 w-6 text-red-700 hover:text-red-500 cursor-pointer"
                      />
                    </Button>
                    
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
