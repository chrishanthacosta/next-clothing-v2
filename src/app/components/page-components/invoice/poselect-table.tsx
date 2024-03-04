"use client";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { InvoiceDetailTableRow } from "./invoicedetails-tablerow";
import { AiFillPlusCircle, AiOutlineUndo } from "react-icons/ai";
import { setPoDetailTableData } from "@/store/purchaseorder/po-slice";
import { Button, Tooltip } from "@nextui-org/react";
import {
  setNewSeletcedPoDataList,
  setSelectedPoList,
} from "@/store/invoice/invoice-slice";

export const PoSelectTable = ({ closePopup }: { closePopup: () => void }) => {
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

  const allPoDataList = useSelector(
    (state: any) => state.invoiceReducer.allPoDataList
  );

  const selectedPoDataList = useSelector(
    (state: any) => state.invoiceReducer.selectedPoDataList
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const [tableData, setTableData] = useState([]);
  const [selectedTableData, setSelectedTableData] = useState([]);

  useEffect(() => {
    let q = [...allPoDataList];

    setTableData(q);
  }, []);
  // useEffect(() => {
  //   let q = [...allPoDataList];

  //   for (let i = 0; i < q.length; i++) {
  //     let element = q[i];
  //     let tmpObj = selectedPoDataList.find(
  //       (t) => t.purchaseorderid === element.purchaseorderid
  //     );

  //     if (tmpObj) {
  //       // Create a new object with 'selected' property added
  //       q[i] = { ...element, selected: true };
  //     } else {
  //       // Create a new object with 'selected' property added
  //       q[i] = { ...element, selected: false };
  //     }
  //   }
  //   setTableData(q);
  // }, [selectedPoDataList]);

  // useEffect(() => {
  //   const tmpArray = tableData.filter((t) => t.selected == true);
  //   dispatch(setSelectedPoList(tmpArray));
  // }, [tableData]);

  const updateSelectedRowArray = (poid: any, checked: any) => {
    const tmpTableData = [...tableData];
    const tmpIndex = tmpTableData.findIndex((t) => t.purchaseorderid === poid);

    if (tmpIndex !== -1) {
      // Create a new object with the selected property added
      const updatedRow = Object.assign({}, tmpTableData[tmpIndex], {
        selected: checked,
      });

      tmpTableData[tmpIndex] = updatedRow;
      setTableData(tmpTableData);
    }
  };

  const addEvent = () => {
    const tmpArray = tableData.filter((t) => t.selected == true);

    // dispatch(setSelectedPoList(tmpArray));
    dispatch(setNewSeletcedPoDataList(tmpArray));
    closePopup();
  };

  return (
    <div className="md:px-2 py-1 sm:w-3/3 w-full bg-slate-200">
      {/* {JSON.stringify(selectedPoDataList)} */}

      <div className="shadow rounded-lg border-b border-gray-200 w-full">
        <table className="min-w-full bg-white">
          <thead className="border-b-2 text-black border-purple-400">
            <tr>
              <th className={"text-center py-1 text-sm font-bold w-10"}>#</th>
              <th className={"text-center py-1 text-sm font-bold w-10"}>
                Select
              </th>
              <th className={"text-center py-1 text-sm font-bold w-40"}>
                Description
              </th>
              <th className={"text-center py-1 text-sm font-bold w-40"}>
                Customer PONo
              </th>
              <th className={"text-center py-1 text-sm font-bold w-40"}>
                Style No
              </th>
              <th className={"text-center py-1 text-sm font-bold w-40"}>
                Colour
              </th>
              <th className={"text-center py-1 text-sm font-bold w-40"}>Qty</th>
              <th className={"text-center py-1 text-sm font-bold w-40"}>
                Unit price
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {tableData?.length === 0 ? (
              <tr>
                <td className="text-center py-1 px-4" colSpan={8}>
                  No Data Found
                </td>
              </tr>
            ) : (
              tableData?.map((tableRow: any, index: number) => (
                <tr className="even:bg-purple-gray-50/50">
                  <td className="text-center py-1 px-4">{index + 1}</td>
                  <td className="text-center py-1 px-4">
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        id="cb1"
                        value="cb1"
                        checked={tableRow.selected}
                        onChange={(e) =>
                          updateSelectedRowArray(
                            tableRow.purchaseorderid,
                            e.target.checked
                          )
                        }
                        className="form-checkbox h-5 w-5 text-orange-600"
                      />
                    </div>
                  </td>
                  <td className="text-center py-1 px-4">
                    {tableRow.description}
                  </td>
                  <td className="text-center py-1 px-4">
                    {tableRow.customerpo}
                  </td>
                  <td className="text-center py-1 px-4">{tableRow.style}</td>
                  <td className="text-center py-1 px-4">{tableRow.colour}</td>
                  <td className="text-center py-1 px-4">{tableRow.totalqty}</td>
                  <td className="text-center py-1 px-4">
                    {tableRow.sellingprice}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="flex justify-end mt-2">
          <Button color="primary" onClick={addEvent}>
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};
