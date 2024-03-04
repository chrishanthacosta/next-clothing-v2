// "use client";

// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { InvoiceDetailTableRow } from "./invoicedetails-tablerow";
// import { AiFillPlusCircle, AiOutlineUndo } from "react-icons/ai";
// import { setPoDetailTableData } from "@/store/purchaseorder/po-slice";
// import { Button } from "@nextui-org/react";
// import SelectPoScreen from "./selectpo-screen";
// import { setSelectedPoList } from "@/store/invoice/invoice-slice";

// export const InvoiceDetailTable = ({
//   currency,
//   savedPoDetails,
// }: {
//   currency: any;
//   savedPoDetails?: any;
// }) => {
//   let pathname: string = "";

//   try {
//     pathname = window.location.href;
//   } catch (error) {}

//   if (pathname) {
//     const r: number = pathname.indexOf("/", 9);
//     if (r !== -1) {
//       pathname = pathname.substring(0, r);
//     }
//   }

//   const selectedPoDataList = useSelector(
//     (state: any) => state.invoiceReducer.selectedPoDataList
//   );

//   const dispatch = useDispatch();

//   const [tableData, setTableData] = useState([]);
//   const [tableUpdate, setTableUpdate] = useState(false);

//   useEffect(() => {
//     const q = [...tableData, ...selectedPoDataList];

//     const updatedTableData = q?.map((item, index) => ({
//       ...item,
//       totalvalue: item.totalqty * item.sellingprice,
//       rowindex: index,
//     }));
//     setTableData(updatedTableData);
//   }, [selectedPoDataList]);

//   useEffect(() => {
//     const q = [...tableData];
//     dispatch(setSelectedPoList(q));
//   }, [tableUpdate]);

//   const [tableUpdate1, setTableUpdate1] = useState(false);

//   // useEffect(() => {
//   //   const q = [...selectedPoDataList];
//   //   const updatedTableData = q?.map((item) => ({
//   //     ...item,
//   //     totalvalue: item.totalqty * item.sellingprice,
//   //   }));
//   //   setTableData(updatedTableData);
//   //   setTableUpdate1((prv: boolean) => !prv);
//   // }, [selectedPoDataList]);

//   // useEffect(() => {
//   //   const q = [...tableData];
//   //   const tmpArray = q.filter((t) => t.rowstatus != "d" && t.rowstatus != "r");
//   //   dispatch(setSelectedPoList(tmpArray));
//   // }, [tableUpdate]);

//   // useEffect(() => {
//   //   const q = [...tableData];
//   //   dispatch(setSelectedPoList(q));
//   // }, [tableUpdate1]);

//   const removeRow = (rowIndex) => {
//     const updatedTableData = [...tableData];
//     updatedTableData.splice(rowIndex, 1);
//     setTableData(updatedTableData);
//     setTableUpdate((prv: boolean) => !prv);
//   };

//   // const removeRow = (rowData, rowIndex) => {
//   //   const updatedTableData = tableData.map((row, index) => {
//   //     if (index === rowIndex) {
//   //       if (row.purchaseorderdetailid) {
//   //         return { ...row, rowstatus: "d" };
//   //       } else {
//   //         return { ...row, rowstatus: "r" };
//   //       }
//   //     }
//   //     return row;
//   //   });

//   //   // Store the removed row and its original index
//   //   setTableData(updatedTableData);
//   //   setTableUpdate((prv: boolean) => !prv);
//   // };

//   const updateTableRows = (newVal: any) => {
//     const updatedArray = tableData.map((r, index) =>
//       r.rowindex === newVal.rowindex ? newVal : r
//     );
//     setTableData(updatedArray);
//     setTableUpdate((prv: boolean) => !prv);
//   };

//   return (
//     <div className="md:px-2 py-1 sm:w-3/3 w-full">
//       {/* Data - {JSON.stringify(tableData)} */}
//       <div className="shadow rounded-lg border-b border-gray-200 w-full">
//         <table className="min-w-full bg-white">
//           <thead className="border-b-2 text-black border-purple-400">
//             <tr>
//               <th
//                 className={"text-center py-1 uppercase text-sm font-bold w-10"}
//               >
//                 <SelectPoScreen />
//               </th>
//               <th className={"text-center py-1 text-sm font-bold w-40"}>
//                 Description
//               </th>
//               <th className={"text-center py-1 text-sm font-bold w-40"}>
//                 Customer PONo
//               </th>
//               <th className={"text-center py-1 text-sm font-bold w-40"}>
//                 Style No
//               </th>
//               <th className={"text-center py-1 text-sm font-bold w-40"}>
//                 Colour
//               </th>
//               <th className={"text-center py-1 text-sm font-bold w-40"}>Qty</th>
//               <th className={"text-center py-1 text-sm font-bold w-40"}>
//                 Unit price ({currency})
//               </th>
//               <th className={"text-center py-1 text-sm font-bold w-40"}>
//                 Value ({currency})
//               </th>
//               <th
//                 className={"text-center py-1 uppercase text-sm font-bold w-10"}
//               >
//                 {/* <div
//                   className={`${
//                     lastRemovedRow ? "" : "pointer-events-none opacity-50"
//                   }`}
//                 >
//                   <Button
//                     isIconOnly
//                     color="warning"
//                     variant="light"
//                     aria-label="Create Item"
//                   >
//                     <AiOutlineUndo
//                       onClick={undoRemove}
//                       className="inline-block h-6 w-6 text-indigo-700 hover:text-indigo-500 cursor-pointer"
//                     />
//                   </Button>
//                 </div> */}
//               </th>
//             </tr>
//           </thead>
//           <tbody className="text-gray-700">
//             {tableData?.length === 0 ? (
//               <tr>
//                 <td className="text-center py-1 px-4" colSpan={8}>
//                   No Data Found
//                 </td>
//               </tr>
//             ) : (
//               tableData?.map((tableRow: any, index: number) =>
//                 tableRow?.rowstatus == "r" ||
//                 tableRow?.rowstatus == "d" ? null : (
//                   <InvoiceDetailTableRow
//                     key={tableRow.rowindex}
//                     index={index}
//                     tableRowIn={tableRow}
//                     onRemoveRow={() => removeRow(index)}
//                     updateTableRows={updateTableRows}
//                   />
//                 )
//               )
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
