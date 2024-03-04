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
import NewFabric from "./addnew";

export const FabricTable = ({
  fabricRowData,
  setReloadTable,
}: {
  fabricRowData?: any[];
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

  const tableHeads = ["#", "Fabric ID", "Fabric Name", ""];

  // const editItem = async (itemcode: any) => {
  //   router.push("/home/items");
  // };

  const handleDelete = async (fabricid: any) => {
    // Display a toast notification with a confirmation message.
    toast.warning("Are you sure you want to delete this item?", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false, // This ensures the notification doesn't auto-close
      closeOnClick: false, // This prevents the notification from closing when clicked
      closeButton: (
        <div>
          <Button
            color="default"
            onClick={() => confirmDelete(fabricid)}
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

  const confirmDelete = async (fabricid: any) => {
    if (fabricid) {
      const response = await fetch(pathname + "/api/fabrics", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fabricid }),
      });

      const res = await response.json();
      if (res == "SUCCESS") {
        if (setReloadTable) {
          setReloadTable();
        }
        toast.dismiss();
        toast.success("Fabric item deleted successfully!", {
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
      router.push("/home/fabrics");
    }
  };
  return (
    <div className="md:px-2 py-2 sm:w-2/3 w-full">
      <div className="shadow rounded border-b border-gray-200 w-full">
        <Table isStriped aria-label="Example static collection table">
          <TableHeader>
            {tableHeads.map((head) => (
              <TableColumn key={head}>{head}</TableColumn>
            ))}
          </TableHeader>
          <TableBody>
            {fabricRowData?.map((tableRow: any, index: number) => (
              <TableRow key={tableRow.fabricid} className="bg-purple-gray-300">
                <TableCell>{index + 1}</TableCell>
                <TableCell>{tableRow.fabricid}</TableCell>
                <TableCell>{tableRow.fabricname}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <NewFabric
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
                        onClick={() => handleDelete(tableRow.fabricid)}
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
