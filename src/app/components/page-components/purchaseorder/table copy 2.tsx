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
// import { useState } from "react";
// import { PoDetailTableRow } from "./tablerow";
// import { AiFillPlusCircle } from "react-icons/ai";

// export const PoDetailTable = () => {
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
//     { label: "", px: "2" },
//   ];

//   const [tableData, setTableData] = useState([
//     { id: 1, size: "Data 1", ratiopack: "Data 2", single: "Data 3", total: 5 },
//     { id: 2, size: "Data 2", ratiopack: "Data 3", single: "Data 4", total: 10 },
//     { id: 3, size: "Data 3", ratiopack: "Data 4", single: "Data 5", total: 10 },
//     { id: 4, size: "Data 4", ratiopack: "Data 5", single: "Data 6", total: 10 },
//   ]);

//   const [removedRows, setRemovedRows] = useState([]);
  
//   const addRow1 = () => {
//     // Generate a unique ID for the new row
//     // const index = Math.max(...tableData.map((row) => row.id), 0) + 1;
//     const newRowId = Math.max(...tableData.map((row) => row.id), 0) + 1;
//     // Create the new empty row object
//     const newEmptyRow = {
//       id: newRowId,
//       size: "",
//       ratiopack: "",
//       single: "",
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
//       ratiopack: "",
//       single: "",
//       total: 0,
//     };
//     const updatedTableData = [...tableData];
//     updatedTableData.splice(rowIndex + 1, 0, newEmptyRow);
//     setTableData(updatedTableData);
//   };

//   const removeRow = (rowData: any) => {
//     const updatedTableData = tableData.filter((row) => row.id !== rowData.id);
//     setTableData(updatedTableData);
//   };

//   return (
//     <div className="md:px-2 py-1 sm:w-3/3 w-full">
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
//             </tr>
//           </thead>
//           <tbody className="text-gray-700">
//             {tableData.map((tableRow: any, index: number) => (
//               <PoDetailTableRow
//                 key={tableRow.id}
//                 index={index}
//                 tableRowIn={tableRow}
//                 onAddRow={() => addRow(tableRow)}
//                 onRemoveRow={() => removeRow(tableRow)}
//               />
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
