"use client";

import { toast } from "react-toastify";

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
import { handleDelete } from "@/app/home/purchaseorder/newpurchaseorder/utils";

export const PoTable = ({ poRowObjects }: { poRowObjects: any[] }) => {
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
    "Customer",
    "Supplier",
    "Order status",
    "Customer PO",
    "Style",
    "",
  ];

  // const tableHeads = [
  //   { label: "#", px: 1 },
  //   { label: "", px: 1 },
  //   { label: "", px: 1 },
  //   { label: "Customer", px: 2 },
  //   { label: "Supplier", px: 1 },
  //   { label: "Supplier", px: 1 },
  //   { label: "Supplier", px: 1 },
  //   { label: "Date", px: 2 },
  //   { label: "Fabric", px: 2 },
  //   { label: "Style", px: 2 },
  //   { label: "Style", px: 2 },
  // ];

  // const editItem = async (itemcode: any) => {
  //   // dispatch(fetchSelItemDataForEdit({ apiUrl: pathname, itemcode }));
  //   router.push("/home/items");
  // };
  const editPo = (purchaseorderid: any) => {
    dispatch(fetchSelPoDataForEdit({ apiUrl: pathname, purchaseorderid }));
    router.push("/home/purchaseorder/newpurchaseorder");
  };

  // const handleDelete = async (purchaseorderid: any) => {
  //   // Display a toast notification with a confirmation message.
  //   toast.warning("Are you sure you want to delete this Po?", {
  //     position: toast.POSITION.TOP_CENTER,
  //     autoClose: false, // This ensures the notification doesn't auto-close
  //     closeOnClick: false, // This prevents the notification from closing when clicked
  //     closeButton: (
  //       <div>
  //         <Button
  //           color="default"
  //           onClick={() => confirmDelete(purchaseorderid)}
  //           className="mb-1"
  //         >
  //           Yes
  //         </Button>
  //         <Button
  //           color="danger"
  //           onClick={() => {
  //             toast.dismiss();
  //           }}
  //         >
  //           No
  //         </Button>
  //       </div>
  //     ),
  //   });
  // };

  // const confirmDelete = async (purchaseorderid: any) => {
  //   await deletePo(pathname, purchaseorderid);
  //   toast.dismiss();
  //   // router.push("/home/products");
  // };
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
            {poRowObjects?.map((tableRow: any, index: number) => (
              <TableRow
                key={tableRow.purchaseorderid}
                className="bg-purple-gray-300"
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {tableRow.customername ? tableRow.customername : "-"}
                </TableCell>
                <TableCell>
                  {tableRow.suppliername ? tableRow.suppliername : "-"}
                </TableCell>
                <TableCell>
                  {tableRow.orderstatus != "0" ? tableRow.orderstatus : "-"}
                </TableCell>
                <TableCell>
                  {tableRow.customerpo ? tableRow.customerpo : "-"}
                </TableCell>
                <TableCell>{tableRow.style ? tableRow.style : "-"}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button
                      isIconOnly
                      color="warning"
                      variant="light"
                      aria-label="Create Item"
                    >
                      <MdOutlineEditNote
                        onClick={() => editPo(tableRow.purchaseorderid)}
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
                          handleDelete(pathname, tableRow.purchaseorderid)
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
