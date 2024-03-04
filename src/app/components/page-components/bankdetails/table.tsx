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
import NewBankDetail from "./addnew";

export const BankDetailTable = ({
  bankdetailsRowData,
  setReloadTable,
}: {
  bankdetailsRowData?: any[];
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
    "Bank A/C ID",
    "ibanno",
    "Bank Name",
    "Bank BIC",
    "Account Name",
    "Branch Name",
    "Branch BIC",
    "Account No",
    "Sort code",
    "",
  ];

  // const editItem = async (itemcode: any) => {
  //   router.push("/home/items");
  // };

  const handleDelete = async (bankaccountid: any) => {
    // Display a toast notification with a confirmation message.
    toast.warning("Are you sure you want to delete this item?", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false, // This ensures the notification doesn't auto-close
      closeOnClick: false, // This prevents the notification from closing when clicked
      closeButton: (
        <div>
          <Button
            color="default"
            onClick={() => confirmDelete(bankaccountid)}
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

  const confirmDelete = async (bankaccountid: any) => {
    if (bankaccountid) {
      const response = await fetch(pathname + "/api/bankdetails", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bankaccountid }),
      });

      const res = await response.json();
      if (res == "SUCCESS") {
        if (setReloadTable) {
          setReloadTable();
        }
        toast.dismiss();
        toast.success("Bank details deleted successfully!", {
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
      router.push("/home/bankdetails");
    }
  };
  return (
    <div className="md:px-2 py-2 sm:w-5/5 w-full">
      <div className="shadow rounded border-b border-gray-200 w-full">
        <Table isStriped aria-label="Example static collection table">
          <TableHeader>
            {tableHeads.map((head) => (
              <TableColumn key={head}>{head}</TableColumn>
            ))}
          </TableHeader>
          <TableBody>
            {bankdetailsRowData?.map((tableRow: any, index: number) => (
              <TableRow
                key={tableRow.bankaccountid}
                className="bg-purple-gray-300"
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{tableRow.bankaccountid}</TableCell>
                <TableCell>{tableRow.bankname}</TableCell>
                <TableCell>{tableRow.accountname}</TableCell>
                <TableCell>{tableRow.branchname}</TableCell>
                <TableCell>{tableRow.ibanno}</TableCell>
                <TableCell>{tableRow.bankbic}</TableCell>
                <TableCell>{tableRow.branchbic}</TableCell>
                <TableCell>{tableRow.accountno}</TableCell>
                <TableCell>{tableRow.sort}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <NewBankDetail
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
                        onClick={() => handleDelete(tableRow.bankaccountid)}
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
