// // components/PrintableComponent.js

// import { Button } from "@nextui-org/react";
// import React from "react";
// import { BsPrinterFill } from "react-icons/bs";

// const PoPrintableComponent = ({
//   poDataForPrint,
// }: {
//   poDataForPrint: any[];
// }) => {
//   const printDiv = () => {
//     const divToPrint = document.getElementById("printableContent");
//     const newWin = window.open("", "Print-Window");
//     newWin.document.open();
//     newWin.document.write("<html><head><title>Print</title></head><body>");
//     newWin.document
//       .write(`<div style=" display:flex; position:absolute;width:473.4px; height:33.6px; top:0px; left:80px;font-size:26px; font-weight:bold;justify-content:center; align-items:center; " > A AND F SOURCING(FASHIONS) LIMITED</div>
//     <div style=" display:flex; position:absolute;width:473.4px; height:15px; top:33.6px; left:80px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end; " > Unit 150, 981 Great West Road, Brenford, TW8 9DN</div>
//     <div style=" display:flex; position:absolute;width:473.4px; height:15px; top:48.6px; left:80px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end; " > Tel : +44 020 3948 5008 / +44 020 3883 9577 /www.aandfsourcing.com</div>
//     <div style=" display:flex; position:absolute;width:473.4px; height:15px; top:63.6px; left:80px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end; " > VAT Registration Number: 459 0807 69</div>
//     `);
//     newWin.document.write("</body></html>");
//     newWin.document.close();
//     newWin.print();
//     newWin.close();
//   };

//   return (
//     <div id="printableContent">
//       <Button
//         color="default"
//         startContent={<BsPrinterFill />}
//         onClick={printDiv}
//       >
//         Print
//       </Button>
//     </div>
//   );
// };

// export default PoPrintableComponent;

// {
//   /* <div>
// <div className="flex absolute w-[473.4px] h-[33.6px] top-0 left-80 text-2xl font-bold justify-center items-center">
//   A AND F SOURCING(FASHIONS) LIMITED
// </div>
// <div className="flex absolute w-[473.4px] h-[15px] top-[33.6px] left-80 text-xs font-normal justify-center items-end">
//   Unit 150, 981 Great West Road, Brenford, TW8 9DN
// </div>
// <div className="flex absolute w-[473.4px] h-[15px] top-[48.6px] left-80 text-xs font-normal justify-center items-end">
//   Tel : +44 020 3948 5008 / +44 020 3883 9577 / www.aandfsourcing.com
// </div>
// <div className="flex absolute w-[473.4px] h-[15px] top-[63.6px] left-80 text-xs font-normal justify-center items-end">
//   VAT Registration Number: 459 0807 69
// </div>
// </div> */
// }
