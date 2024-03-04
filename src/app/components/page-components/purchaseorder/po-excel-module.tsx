import React from "react";
import ExcelJS from "exceljs";
import { Button } from "@nextui-org/react";
import { RiFileExcel2Fill } from "react-icons/ri";

const PoExcelPage = ({ poRowObjectsIn }: { poRowObjectsIn?: any[] }) => {
  const generateExcelFile = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet 1");

    // Add data to the worksheet
    worksheet.addRow([
      "PO Number",
      "Customer",
      "Department",
      "Customer PO",
      "Customer style name",
      "Style",
      "Description",
      "Colour",
      "Ex-fty",
      "Total qty",
      "Customer DC date",
      "Ship mode",
      "Order status",
      "Price",
      "Factory",
      "Sample status",
      "Customer price",
      "Currency",
    ]);

    // const arrayKeys = Object.keys(poRowObjectsIn[0]);
    const arrayKeysWithWidth = [
      { name: "purchaseorderid", width: 15 },
      { name: "customername", width: 15 },
      { name: "department", width: 15 },
      { name: "customerpo", width: 15 },
      { name: "customerstylename", width: 15 },
      { name: "style", width: 15 },
      { name: "description", width: 15 },
      { name: "colour", width: 15 },
      { name: "exfactorydate", width: 15 },
      { name: "totalqty", width: 15 },
      { name: "date", width: 15 },
      { name: "shippingmode", width: 15 },
      { name: "orderstatus", width: 15 },
      { name: "supplierprice", width: 15 },
      { name: "suppliername", width: 15 },
      { name: "samplestatus", width: 15 },
      { name: "sellingprice", width: 15 },
      { name: "currency", width: 15 },
    ];

    // const arrayKeys = [
    //   "purchaseorderid",
    //   "customername",
    //   "department",
    //   "customerpo",
    //   "customerstylename",
    //   "style",
    //   "description",
    //   "colour",
    //   "exfactorydate",
    //   "totalqty",
    //   "date",
    //   "shippingmode",
    //   "orderstatus",
    //   "supplierprice",
    //   "suppliername",
    //   "samplestatus",
    //   "sellingprice",
    //   "currency",
    // ];

    poRowObjectsIn.forEach((row) => {
      const rowData = arrayKeysWithWidth.map((header) => {
        const value = row[header.name];
        if (
          header.name === "shippingmode" ||
          header.name === "samplestatus" ||
          header.name === "orderstatus" ||
          header.name === "currency"
        ) {
          return value == "0" ? "-" : value;
        }
        return value;
      });
      worksheet.addRow(rowData);
    });

    // worksheet.addRow(["John", 30]);
    // worksheet.addRow(["Alice", 25]);
    arrayKeysWithWidth.forEach((column, index) => {
      worksheet.getColumn(index + 1).width = column.width;
    });
    // worksheet.getColumn(1).width = 15; // Set the width of the first column to 15
    // worksheet.getColumn(2).width = 10; //

    // Get the header row
    const headerRow = worksheet.getRow(1);

    // Apply cell styling to the header row (bold text and borders)
    headerRow.eachCell((cell) => {
      cell.font = { bold: true };
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });

    // Apply cell styling to all rows (borders)
    worksheet.eachRow((row, rowNumber) => {
      row.eachCell((cell) => {
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });
    });

    // Generate an Excel file
    const buffer = await workbook.xlsx.writeBuffer();

    // Create a Blob from the buffer
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Create a URL for the Blob
    const url = window.URL.createObjectURL(blob);

    const currentDateTime = new Date().toLocaleString().replace(/:/g, "-"); // Get the current date and time as a string
    const filename = `PO_Details_${currentDateTime}.xlsx`;
    // Create a link to download the Excel file
    const a = document.createElement("a");
    a.href = url;
    // a.download = "example.xlsx";
    a.download = filename;
    a.click();

    // Clean up
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <Button
        color="default"
        onClick={generateExcelFile}
        startContent={<RiFileExcel2Fill />}
      >
        Download Excel
      </Button>
      {/* <button onClick={generateExcelFile}>Generate Excel</button> */}
    </div>
  );
};

export default PoExcelPage;
