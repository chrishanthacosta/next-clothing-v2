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
import NewCustomer from "./addnew";

export const CustomerTable = ({
  customerRowData,
  setReloadTable,
}: {
  customerRowData?: any[];
  setReloadTable?: () => void;
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
    "Customer ID",
    // "Customer Code",
    "Customer Name",
    "Email",
    "Phone",
    "Address",
    "",
  ];

  // const editItem = async (itemcode: any) => {
  //   router.push("/home/items");
  // };

  const handleDelete = async (customerid: any) => {
    // Display a toast notification with a confirmation message.
    toast.warning("Are you sure you want to delete this item?", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false, // This ensures the notification doesn't auto-close
      closeOnClick: false, // This prevents the notification from closing when clicked
      closeButton: (
        <div>
          <Button
            color="default"
            onClick={() => confirmDelete(customerid)}
            className="mb-1"
          >
            Yes
          </Button>
          <Button
            color="danger"
            onClick={() => {
              toast.dismiss();
            }}
          >
            No
          </Button>
        </div>
      ),
    });
  };

  const confirmDelete = async (customerid: any) => {
    if (customerid) {
      const response = await fetch(pathname + "/api/customers", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerid }),
      });

      const res = await response.json();
      if (res == "SUCCESS") {
        if (setReloadTable) {
          setReloadTable();
        }
        toast.dismiss();
        toast.success("Customer deleted successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("Error!", {
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
    } else {
      if (setReloadTable) {
        setReloadTable();
      }
      router.push("/home/customers");
    }
  };
  return (
    <div className="md:px-2 py-2 sm:w-4/5 w-full">
      <div className="shadow rounded border-b border-gray-200 w-full">
        <Table isStriped aria-label="Example static collection table">
          <TableHeader>
            {tableHeads.map((head) => (
              <TableColumn key={head}>{head}</TableColumn>
            ))}
          </TableHeader>
          <TableBody>
            {customerRowData?.map((tableRow: any, index: number) => (
              <TableRow
                key={tableRow.customerid}
                className="bg-purple-gray-300"
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{tableRow.customerid}</TableCell>
                {/* <TableCell>{tableRow.customercode}</TableCell> */}
                <TableCell>{tableRow.customername}</TableCell>
                <TableCell>{tableRow.email}</TableCell>
                <TableCell>{tableRow.phone}</TableCell>
                <TableCell>{tableRow.address}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <NewCustomer
                      type="edit"
                      setReloadTable={setReloadTable}
                      data={tableRow}
                    />
                    <Button
                      isIconOnly
                      color="warning"
                      variant="faded"
                      aria-label="Create Item"
                    >
                      <RiDeleteBin5Line
                        onClick={() => handleDelete(tableRow.customerid)}
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
