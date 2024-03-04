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
// import { RiDeleteBin5Line } from "react-icons/ri";
// import { useDispatch } from "react-redux";
// import { BsFillPlusCircleFill } from "react-icons/bs";
// import { useState } from "react";

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

//   const tableHeads = ["#", "Size", "Ratio pack", "Single", "Total"];

//   const [tableData, setTableData] = useState([
//     { id: 1, size: "Data 1", ratiopack: "Data 2", single: "Data 3", total: 5 },
//   ]);

//   const addRow = () => {
//     // Generate a unique ID for the new row
//     const index = Math.max(...tableData.map((row) => row.id), 0) + 1;

//     // Create the new empty row object
//     const newEmptyRow = {
//       id: index,
//       size: "",
//       ratiopack: "",
//       single: "",
//       total: 0,
//     };

//     // Update the table data state with the new empty row
//     setTableData([...tableData, newEmptyRow]);
//   };

//   return (
//     <div className="md:px-2 py-2 sm:w-3/3 w-full">
//       <div className="shadow rounded border-b border-gray-200 w-full">
//         <Table isStriped aria-label="Example static collection table">
//           <TableHeader>
//             <TableColumn width={1}>
//               <Button
//                 isIconOnly
//                 color="warning"
//                 variant="light"
//                 aria-label="Create Item"
//               >
//                 <BsFillPlusCircleFill
//                   onClick={addRow}
//                   className="inline-block h-6 w-6 text-indigo-700 hover:text-indigo-500 cursor-pointer"
//                 />
//               </Button>
//             </TableColumn>
//             <TableColumn maxWidth={2}>#</TableColumn>
//             <TableColumn maxWidth={2}>Size</TableColumn>
//             <TableColumn maxWidth={2}>Ratio pack</TableColumn>
//             <TableColumn maxWidth={2}>Single</TableColumn>
//             <TableColumn maxWidth={2}>Total</TableColumn>
//           </TableHeader>
//           <TableBody>
//             {tableData?.map((tableRow: any, index: number) => (
//               <TableRow key={tableRow.id} className="bg-purple-gray-300">
//                 <TableCell>{index + 1}</TableCell>
//                 <TableCell>{index + 1}</TableCell>
//                 <TableCell>{tableRow.size}</TableCell>
//                 <TableCell>{tableRow.ratiopack}</TableCell>
//                 <TableCell>{tableRow.single}</TableCell>
//                 <TableCell>{tableRow.total}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// };
