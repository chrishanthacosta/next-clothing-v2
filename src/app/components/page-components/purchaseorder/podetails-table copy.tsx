// "use client";

// import { toast } from "react-toastify";
// import {
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableColumn,
//   TableHeader,
//   TableRow,
// } from "@nextui-org/react";
// import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { useEffect, useState } from "react";
// import { PoDetailTableRow } from "./podetails-tablerow";
// import { AiFillPlusCircle, AiOutlineUndo } from "react-icons/ai";
// import { setPoDetailTableData } from "@/store/purchaseorder/po-slice";

// export const PoDetailTable = ({
//   rationpacksizeIn,
//   poDetailsRowsIn,
// }: {
//   rationpacksizeIn: number;
//   poDetailsRowsIn?: any[];
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

//   const dispatch = useDispatch();
//   const router = useRouter();

//   const tableHeads = [
//     { label: "#", px: "1" },
//     { label: "Id", px: "1" },
//     { label: "Size", px: "1" },
//     { label: "Ratio pack", px: "2" },
//     { label: "Single", px: "2" },
//     { label: "Total", px: "2" },
//   ];

//   const [tableData, setTableData] = useState([]);
//   // const [tableData, setTableData] = useState([
//   //   { id: 1, size: "Data 1", ratiopack: 2, single: 2, total: 0 },
//   //   { id: 2, size: "Data 2", ratiopack: 3, single: 3, total: 0 },
//   //   { id: 3, size: "Data 3", ratiopack: 4, single: 4, total: 0 },
//   //   { id: 4, size: "Data 4", ratiopack: 5, single: 5, total: 0 },
//   // ]);

//   const [lastRemovedRow, setLastRemovedRow] = useState(null);
//   const [tableUpdate, setTableUpdate] = useState(false);

//   useEffect(() => {
//     const updatedTableData = tableData.map((item) => ({
//       ...item,
//       total: item.ratiopack * rationpacksizeIn + 1 * item.single,
//     }));

//     // Update the state with the calculated tableData
//     setTableData(updatedTableData);
//   }, [tableUpdate, rationpacksizeIn]);

//   useEffect(() => {
//     dispatch(setPoDetailTableData(tableData));
//   }, [tableData]);

//   useEffect(() => {
//     setTableData(poDetailsRowsIn)
//   }, [poDetailsRowsIn]);

//   const addRow1 = () => {
//     // Generate a unique ID for the new row
//     // const index = Math.max(...tableData.map((row) => row.id), 0) + 1;
//     const newRowId = Math.max(...tableData.map((row) => row.id), 0) + 1;
//     // Create the new empty row object
//     const newEmptyRow = {
//       id: newRowId,
//       size: "",
//       ratiopack: 0,
//       single: 0,
//       total: 0,
//     };

//     // Update the table data state with the new empty row
//     setTableData([...tableData, newEmptyRow]);
//   };

//   const addRow = (rowData: any) => {
//     const newRowId = Math.max(...tableData.map((row) => row.id), 0) + 1;
//     const rowIndex = tableData.findIndex((row) => row.id === rowData.id);

//     const newEmptyRow = {
//       id: newRowId,
//       size: "",
//       ratiopack: 0,
//       single: 0,
//       total: 0,
//     };
//     const updatedTableData = [...tableData];
//     updatedTableData.splice(rowIndex + 1, 0, newEmptyRow);
//     setTableData(updatedTableData);
//   };

//   const removeRow = (rowData, rowIndex) => {
//     const updatedTableData = tableData.filter((row) => row.id !== rowData.id);

//     // Store the removed row and its original index
//     setLastRemovedRow({ rowData, rowIndex });

//     setTableData(updatedTableData);
//   };

//   const undoRemove = () => {
//     if (!lastRemovedRow) return;

//     const updatedTableData = [...tableData];
//     updatedTableData.splice(lastRemovedRow.rowIndex, 0, lastRemovedRow.rowData);
//     setTableData(updatedTableData);

//     // Clear the lastRemovedRow variable
//     setLastRemovedRow(null);
//   };

//   const updateTableRows = (newVal: any) => {
//     const updatedArray = tableData.map((r) =>
//       r.id === newVal.id ? newVal : r
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
//                 className={
//                   "text-center py-1 uppercase text-sm font-bold px-1/2"
//                 }
//               >
//                 <Button
//                   isIconOnly
//                   color="warning"
//                   variant="light"
//                   aria-label="Create Item"
//                 >
//                   <AiFillPlusCircle
//                     onClick={addRow1}
//                     className="inline-block h-6 w-6 text-indigo-700 hover:text-indigo-500 cursor-pointer"
//                   />
//                 </Button>
//               </th>
//               {tableHeads.map((head) => (
//                 <th
//                   key={head.label}
//                   className={
//                     "text-center py-1 uppercase text-sm font-bold px-" + head.px
//                   }
//                 >
//                   {head.label}
//                 </th>
//               ))}
//               <th
//                 className={
//                   "text-center py-1 uppercase text-sm font-bold px-1/2"
//                 }
//               >
//                 <div
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
//                 </div>
//               </th>
//             </tr>
//           </thead>
//           <tbody className="text-gray-700">
//             {tableData.length === 0 ? (
//               <tr>
//                 <td className="text-center py-1 px-4" colSpan={8}>
//                   No Data Found
//                 </td>
//               </tr>
//             ) : (
//               tableData.map((tableRow: any, index: number) => (
//                 <PoDetailTableRow
//                   key={tableRow.id}
//                   index={index}
//                   tableRowIn={tableRow}
//                   onAddRow={() => addRow(tableRow)}
//                   onRemoveRow={() => removeRow(tableRow, index)}
//                   updateTableRows={updateTableRows}
//                 />
//               ))
//             )}
//           </tbody>
//         </table>
//         {/* <div>
//           <h3>Removed Row</h3>
//           {lastRemovedRow && (
//             <div>
//               {lastRemovedRow.rowData.data1}, {lastRemovedRow.rowData.data2}
//               {lastRemovedRow.rowData.data3}
//               <button onClick={undoRemove}>Undo</button>
//             </div>
//           )}
//         </div> */}
//       </div>
//     </div>
//   );
// };
