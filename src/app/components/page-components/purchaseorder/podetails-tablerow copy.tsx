// "use client";

// import { Button } from "@nextui-org/react";
// import { useEffect, useState } from "react";
// import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

// export const PoDetailTableRow = ({
//   index,
//   tableRowIn,
//   onAddRow,
//   onRemoveRow,
//   updateTableRows,
// }: {
//   index: any;
//   tableRowIn: any;
//   onAddRow: any;
//   onRemoveRow: any;
//   updateTableRows: (taskRow: any) => void;
// }) => {
//   const [tableRow, setTableRow] = useState(tableRowIn);

//   useEffect(() => {
//     const q = { ...tableRowIn };
//     setTableRow(q);
//   }, [tableRowIn]);

//   const updateData = (newObject: any) => {
//     setTableRow(newObject);
//     updateTableRows(newObject);
//   };
//   return (
//     <tr className="even:bg-purple-gray-50/50">
//       <td className="text-center py-1 px-4">
//         <Button
//           isIconOnly
//           color="warning"
//           variant="light"
//           aria-label="Create Item"
//         >
//           <AiFillPlusCircle
//             onClick={() => onAddRow(tableRow)}
//             className="inline-block h-6 w-6 text-indigo-700 hover:text-indigo-500 cursor-pointer"
//           />
//         </Button>
//       </td>
//       <td className="text-center py-1 px-4">{index}</td>
//       <td className="text-center py-1 px-4">{tableRow.id}</td>
//       <td className="text-center py-1 px-4">
//         <input
//           id="size"
//           name="size"
//           type="text"
//           autoComplete=""
//           className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
//           value={tableRow.size}
//           onChange={(e) => updateData({ ...tableRow, size: e.target.value })}
//         />
//       </td>
//       <td className="text-center py-1 px-4">
//         <input
//           id="ratiopack"
//           name="ratiopack"
//           type="number"
//           autoComplete=""
//           className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
//           value={tableRow.ratiopack}
//           onChange={(e) =>
//             updateData({ ...tableRow, ratiopack: e.target.value })
//           }
//         />
//       </td>
//       <td className="text-center py-1 px-4">
//         {" "}
//         <input
//           id="single"
//           name="single"
//           type="number"
//           autoComplete=""
//           className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
//           value={tableRow.single}
//           onChange={(e) =>
//             updateData({ ...tableRow, single: e.target.value })
//           }
//         />
//       </td>
//       <td className="text-center py-1 px-4">{tableRow.total}</td>
//       <td className="text-center py-1 px-4">
//         <Button
//           isIconOnly
//           color="warning"
//           variant="light"
//           aria-label="Create Item"
//         >
//           <AiFillMinusCircle
//             onClick={() => onRemoveRow(tableRow, index)}
//             className="inline-block h-6 w-6 text-red-700 hover:text-red-500 cursor-pointer"
//           />
//         </Button>
//       </td>
//     </tr>
//   );
// };
