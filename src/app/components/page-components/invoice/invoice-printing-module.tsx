// components/PrintableComponent.js

import { Button } from "@nextui-org/react";
import React from "react";
import { BsPrinterFill } from "react-icons/bs";
import { gdiv, gspan } from "../purchaseorder/utils";

const InvoicePrintableComponent = ({
  invoiceHeaderData,
  invoiceDetailData,
}: {
  invoiceHeaderData?: any[];
  invoiceDetailData?: any[];
}) => {
  // console.log("invoiceHeaderData", invoiceHeaderData);
  const tmpInvoiceHeaderData = invoiceHeaderData[0];
  const invdetailsHTML = getInvoiceDetailsDiv(invoiceDetailData).innerHTML;

  // const poData = poDataForPrint[0];
  // console.log(poData);
  const sample = "Sample Data";
  const printDiv = () => {
    const newWin = window.open("", "Print-Window");
    newWin.document.open();
    newWin.document.write("<html><head><title>Print</title></head><body>");
    newWin.document.write(`
    <div style=" display:flex; position:absolute;width:490.8px; height:33.6px; top:0px;  left:13px;font-size:26px; font-weight:bold;justify-content:center; align-items:center; " > A AND F SOURCING(FASHIONS) LIMITED</div>
    <div style=" display:flex; position:absolute;width:490.8px; height:15px; top:33.6px;  left:13px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end; " > Unit 02, Maple Grove Business Centre, Lawrence Road, Hounslow TW4 6DR.</div>
    <div style=" display:flex; position:absolute;width:490.8px; height:15px; top:48.6px;  left:13px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end; " > Tel : 44 020 3948 5008 www.aandfsourcing.com</div>
    <div style=" display:flex; position:absolute;width:490.8px; height:15px; top:63.6px;  left:13px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end; " > VAT Registration Number: 273 8855 56</div>
    <div style=" display:flex; position:absolute;width:490.8px; height:14.4px; top:78.6px;  left:13px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end;border-bottom:2px solid black;  " >  </div>
    <div style=" display:flex; position:absolute;width:490.8px; height:15px; top:93px;  left:13px;font-size:14px; font-weight:bold;justify-content:center; align-items:center;  " > Commercial Invoice</div>
    <div style=" display:flex; position:absolute;width:490.8px; height:14.4px; top:108px;  left:13px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end;border-top:2px solid black;  " >  </div>
    <div style=" display:flex; position:absolute;width:51px; height:15px; top:122.4px;  left:13px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-end; " > Bill to:</div>
    <div style=" display:flex; position:absolute;width:74.4px; height:15px; top:122.4px;  left:285.6px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Invoice No:</div>
    <div style=" display:flex; position:absolute;width:145.8px; height:15px; top:122.4px; left:360px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-start; " > ${tmpInvoiceHeaderData.invoiceno
      }</div>
    <div style=" display:flex; position:absolute;width:233.4px; height:14.4px; top:137.4px;  left:13px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-start; " > ${tmpInvoiceHeaderData.customername
      }</div>
    <div style=" display:flex; position:absolute;width:74.4px; height:14.4px; top:137.4px;  left:285.6px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Date:</div>
    <div style=" display:flex; position:absolute;width:145.8px; height:14.4px; top:137.4px; left:360px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-start; " > ${tmpInvoiceHeaderData.date
      }</div>
    <div style=" display:flex; position:absolute;width:233.4px; height:87.6px; top:151.8px;  left:13px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-start; " > ${tmpInvoiceHeaderData.address?.replace(
        /\n/g,
        "<br />"
      )}</div>
    <div style=" display:flex; position:absolute;width:74.4px; height:15px; top:151.8px;  left:285.6px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Payment Terms:</div>
    <div style=" display:flex; position:absolute;width:145.8px; height:15px; top:151.8px; left:360px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${tmpInvoiceHeaderData.paymentterm
      }</div>
    <div style=" display:flex; position:absolute;width:490.8px; height:14.4px; top:239.4px;  left:13px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end;border-bottom:2px solid black;  " >  </div>
    <div style=" display:flex; position:absolute;width:490.8px; height:14.4px; top:253.8px;  left:13px;font-size:12px; font-weight:bold;justify-content:center; align-items:center;   " > Quantities and Descriptions</div>
    <div style=" display:flex; position:absolute;width:490.8px; height:14.4px; top:268.2px;  left:13px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end;border-top:2px solid black;  " >  </div>
    <div style=" display:flex; position:absolute;width:490.8px; height:28.8px; top:282.6px;  left:13px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-start; " > ${invdetailsHTML}</div>
    <div style=" display:flex; position:absolute;width:51px; height:14.4px; top:484.2px;  left:13px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-end; " > Remarks:</div>
    <div style=" display:flex; position:absolute;width:490.8px; height:43.2px; top:498.6px;  left:13px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-start; " > ${tmpInvoiceHeaderData.remark?.replace(
        /\n/g,
        "<br />"
      )}</div>
    <div style=" display:flex; position:absolute;width:500px; height:14.4px; top:541.8px;  left:13px;font-size:12px; font-weight:normal;justify-content:left; align-items:flex-end;   " > Bank Details</div>
    <div style=" display:flex; position:absolute;width:490.8px; height:14.4px; top:556.2px;  left:13px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end;border-top:2px solid black;  " >  </div>
    <div style=" display:flex; position:absolute;width:51px; height:14.4px; top:570.6px;  left:13px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-start; " > Bank:</div>
    <div style=" display:flex; position:absolute;width:200px; height:14.4px; top:585px;  left:13px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-start; " > Account Name/ Beneficiary Name:</div>
    <div style=" display:flex; position:absolute;width:279px; height:14.4px; top:585px; left:174px;font-size:11px; font-weight:bold;justify-content:flex-start; align-items:flex-start; " > ${tmpInvoiceHeaderData.accountname
      }</div>
    <div style=" display:flex; position:absolute;width:150px; height:14.4px; top:599.4px;  left:13px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-end; " > Account Number:</div>
    <div style=" display:flex; position:absolute;width:279px; height:14.4px; top:599.4px;  left:174px;font-size:11px; font-weight:bold;justify-content:flex-start; align-items:flex-start; " > ${tmpInvoiceHeaderData.accountno
      }</div>
    <div style=" display:flex; position:absolute;width:150px; height:14.4px; top:613.8px;  left:13px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-end; " > Sort Code:</div>
    <div style=" display:flex; position:absolute;width:279px; height:14.4px; top:613.8px;  left:174px;font-size:11px; font-weight:bold;justify-content:flex-start; align-items:flex-start; " > ${tmpInvoiceHeaderData.sort
      }</div>
    <div style=" display:flex; position:absolute;width:150px; height:14.4px; top:628.2px;  left:13px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-end; " > IBAN A/C NO:</div>
    <div style=" display:flex; position:absolute;width:279px; height:14.4px; top:628.2px;  left:174px;font-size:11px; font-weight:bold;justify-content:flex-start; align-items:flex-start; " > ${tmpInvoiceHeaderData.ibanno
      }</div>
    <div style=" display:flex; position:absolute;width:150px; height:14.4px; top:642.6px;  left:13px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-end; " > Bank BIC:</div>
    <div style=" display:flex; position:absolute;width:279px; height:14.4px; top:642.6px;  left:174px;font-size:11px; font-weight:bold;justify-content:flex-start; align-items:flex-start; " > ${tmpInvoiceHeaderData.bankbic
      }</div>
    <div style=" display:flex; position:absolute;width:150px; height:14.4px; top:657px;  left:13px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-end; " > Branch BIC:</div>
    <div style=" display:flex; position:absolute;width:279px; height:14.4px; top:657px;  left:174px;font-size:11px; font-weight:bold;justify-content:flex-start; align-items:flex-start; " > ${tmpInvoiceHeaderData.branchbic
      }</div>`);
    //   newWin.document.write(`
    //   <table style="position: absolute; bottom: 20px; border-collapse: collapse; width: 100%;">
    //   <tr>
    //     <th style="border: 1px solid black; padding: 5px;">Header 1</th>
    //     <th style="border: 1px solid black; padding: 5px;">Header 2</th>
    //     <th style="border: 1px solid black; padding: 5px;">Header 3</th>
    //   </tr>
    //   <tr>
    //     <td style="border: 1px solid black; padding: 5px;">Data 1</td>
    //     <td style="border: 1px solid black; padding: 5px;">Data 2</td>
    //     <td style="border: 1px solid black; padding: 5px;">Data 3</td>
    //   </tr>
    //   <!-- Add more rows as needed -->
    // </table>
    //   `);
    newWin.document.write("</body></html>");
    newWin.document.close();

    //add details table div
    // const d2 = newWin.document.getElementById("po-table1");
    // const d3 = getSizeQtyTable(poDataForPrint);
    // d2.appendChild(d3);

    // //add details table div
    // const d = newWin.document.getElementById("po-table2");
    // const d1 = getPackingListTable(poDataForPrint);
    // d.appendChild(d1);

    newWin.print();
    newWin.close();
  };

  return (
    <div id="invoicePrintableContent">
      <Button
        color="default"
        startContent={<BsPrinterFill />}
        onClick={printDiv}
      >
        Print
      </Button>
    </div>
  );
};

export default InvoicePrintableComponent;

const getInvoiceDetailsDiv = (invoicedetails) => {
  const odiv = gdiv([], {
    css: {
      display: "flex",
      flexDirection: "column",
      border: "1px solid black",
      width: "90%",
    },
  });
  const hRowDiv = getHeaderRowDiv();
  odiv.appendChild(hRowDiv);

  let totalqty = 0;
  let totalvalue = 0;
  //rows
  invoicedetails.forEach((row) => {
    const cdiv = gdiv([], {
      css: {
        display: "flex",

        // flex: "1 1 5%",
        //border: "1px solid black",
        // width: "30px",
      },
    });

    addSpanToDiv(row.description, cdiv, 40);
    addSpanToDiv(row.customerpo, cdiv, 20);
    addSpanToDiv(row.style, cdiv, 20);
    addSpanToDiv(row.colour, cdiv, 20);
    addSpanToDiv(row.totalqty, cdiv, 10, "flex-end");
    const v = parseFloat(row.sellingprice).toFixed(2);
    addSpanToDiv(v, cdiv, 20, "flex-end");
    const val = parseFloat(row.sellingprice) * parseInt(row.totalqty);
    const valStr = val.toFixed(2);
    addSpanToDiv(valStr, cdiv, 20, "flex-end", true);

    odiv.appendChild(cdiv);

    totalqty += parseFloat(row.totalqty);
    totalvalue += parseFloat(valStr);
  });

  // add footer row
  odiv.appendChild(getTableFooterRow(totalqty, totalvalue));

  const d = gdiv();
  d.appendChild(odiv);

  return d;
};

const getTableFooterRow = (qty, value) => {
  const odiv = gdiv([], {
    css: {
      display: "flex",
      // border: "1px solid black",
      width: "100%",
    },
  });

  addSpanToDiv("Total", odiv, 103.5, "center", false, "bold");
  addSpanToDiv(qty, odiv, 10, "flex-end", false, "bold");
  addSpanToDiv(" ", odiv, 20, "flex-end", false, "bold");
  addSpanToDiv(value, odiv, 20, "flex-end", true, "bold");
  return odiv;
};
const getHeaderRowDiv = () => {
  // const ratiopackcount = data.ratiopackcount ?? 0;
  const odiv = gdiv([], {
    css: {
      display: "flex",
      // border: "1px solid black",
      width: "100%",
    },
  });
  // let cdivh = gdiv([], {
  //   css: {
  //     display: "flex",
  //     flex: "1 1 20%",
  //     //border: "1px solid black",
  //   },
  // });20
  addSpanToHDiv("Description", odiv, 40);
  addSpanToHDiv("Po No", odiv, 20);
  addSpanToHDiv("Style No", odiv, 20);
  addSpanToHDiv("Colour", odiv, 20);
  addSpanToHDiv("Qty", odiv, 10);
  addSpanToHDiv("Unit Price (USD)", odiv, 20);
  addSpanToHDiv("Value              (USD)", odiv, 20, true);

  return odiv;
};

const addSpanToHDiv = (title, cdiv, widthPercentage, noRightBorder = false) => {
  let borderRight;
  if (noRightBorder) {
    borderRight = "";
  } else {
    borderRight = "1px solid black";
  }

  let cdivh = gdiv([], {
    css: {
      display: "flex",
      justifyContent: "center",
      flex: "1 1 " + widthPercentage + "%",
      borderRight,
      borderBottom: "1px solid black",
      paddingRight: "3px",
    },
  });
  const sp = gspan(title, [], {
    //borderBottom: "1px solid black",
    textAlign: "center",
    paddingTop: "3px",
    minHeight: "1rem",
    fontWeight: "bold",
  });
  cdivh.appendChild(sp);
  cdiv.appendChild(cdivh);
};

const addSpanToDiv = (
  value,
  cdiv,
  widthPercentage,
  justifyContent = "center",
  noRightBorder = false,
  fontWeight = "normal"
) => {
  let borderRight;
  if (noRightBorder) {
    borderRight = "";
  } else {
    borderRight = "1px solid black";
  }
  let cdivi = gdiv([], {
    css: {
      display: "flex",
      justifyContent,
      flex: "1 1 " + widthPercentage + "%",
      borderRight,
      borderBottom: "1px solid black",
      paddingRight: "3px",
    },
  });

  const sp = gspan(value, [], {
    //borderBottom: "1px solid black",
    display: "inline-block",
    textAlign: "center",
    paddingTop: "3px",
    // borderLeft: "1px solid black",
    minHeight: "1rem",
    fontWeight,
  });
  cdivi.appendChild(sp);
  cdiv.appendChild(cdivi);
};

{
  /* <div>
<div className="flex absolute w-[473.4px] h-[33.6px] top-0 left-80 text-2xl font-bold justify-center items-center">
  A AND F SOURCING(FASHIONS) LIMITED
</div>
<div className="flex absolute w-[473.4px] h-[15px] top-[33.6px] left-80 text-xs font-normal justify-center items-end">
  Unit 150, 981 Great West Road, Brenford, TW8 9DN
</div>
<div className="flex absolute w-[473.4px] h-[15px] top-[48.6px] left-80 text-xs font-normal justify-center items-end">
  Tel : +44 020 3948 5008 / +44 020 3883 9577 / www.aandfsourcing.com
</div>
<div className="flex absolute w-[473.4px] h-[15px] top-[63.6px] left-80 text-xs font-normal justify-center items-end">
  VAT Registration Number: 273 8855 56
</div>
</div> */
}

// `<div style=" display:flex; position:absolute;width:475.2px; height:33.6px; top:0px;  left:13px;font-size:26px; font-weight:bold;justify-content:center; align-items:center; " > A & F Sourcing Limited</div>
// <div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:33.6px;  left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end; " > Unit 150, 981 Great West Road, Brenford, TW8 9DN</div>
// <div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:48px;  left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end; " > Tel : +44 020 3948 5008 / +44 020 3883 9577 /www.aandfsourcing.com</div>
// <div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:62.4px;  left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end; " > VAT Registration Number: 273 8855 56</div>

// <div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:73.6px;  left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end;border-bottom:2px solid black;  " >  </div>
// <div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:91.2px;  left:13px;font-size:14px; font-weight:bold;justify-content:center; align-items:center; " > Purchase Order</div>
// <div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:108px;  left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end;border-top:2px solid black;  " >  </div>

// <div style=" display:flex; position:absolute;width:51px; height:14.4px; top:120px;  left:13px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > PO#:</div>
// <div style=" display:flex; position:absolute;width:18.6px; height:14.4px; top:120px; left:131px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > ${id}</div>
// <div style=" display:flex; position:absolute;width:74.4px; height:14.4px; top:120px;  left:285px.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > PO Date:</div>
// <div style=" display:flex; position:absolute;width:93px; height:14.4px; top:120px; left:443.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${date}</div>
// <div style=" display:flex; position:absolute;width:51px; height:14.4px; top:148.8px;  left:13px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > Customer:</div>
// <div style=" display:flex; position:absolute;width:182.4px; height:14.4px; top:148.8px; left:149.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${customername}</div>
// <div style=" display:flex; position:absolute;width:93px; height:14.4px; top:148.8px;  left:285px.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Customer PO #:</div>
// <div style=" display:flex; position:absolute;width:93px; height:14.4px; top:148.8px; left:443.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${customerpono}</div>
// <div style=" display:flex; position:absolute;width:51px; height:14.4px; top:177.6px;  left:13px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > Factory:</div>
// <div style=" display:flex; position:absolute;width:301px; height:14.4px; top:177.6px; left:149.6px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > ${suppliername}</div>
// <div style=" display:flex; position:absolute;width:201px; height:57.6px; top:192px; left:149.6px;font-size:14px; font-weight:normal;line-height: 1rem;justify-content:flex-start; align-items:flex-start; " > ${supplieraddress}</div>

// <div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:260.6px;  left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end;border-bottom:2px solid black;  " >  </div>
// <div style=" display:flex; position:absolute;width:69.6px; height:14.4px; top:285.4px;  left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Style #:</div>
// <div style=" display:flex; position:absolute;width:182.4px; height:14.4px; top:285.4px; left:149.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${stylename}</div>
// <div style=" display:flex; position:absolute;width:100px; height:14.4px; top:285.4px; left:340.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Customer Style#:</div>
// <div style=" display:flex; position:absolute;width:111.6px; height:14.4px; top:285.4px; left:443.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${customerstylename}</div>
// <div style=" display:flex; position:absolute;width:69.6px; height:14.4px; top:307.2px;  left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Fabric:</div>
// <div style=" display:flex; position:absolute;width:182.4px; height:14.4px; top:307.2px; left:149.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${fabricname}</div>
// <div style=" display:flex; position:absolute;width:18.6px; height:14.4px; top:307.2px; left:340.6px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > Colour:</div>
// <div style=" display:flex; position:absolute;width:93px; height:14.4px; top:307.2px; left:443.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${colorname}</div>
// <div style=" display:flex; position:absolute;width:69.6px; height:14.4px; top:336px;  left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Ex-Fty:</div>
// <div style=" display:flex; position:absolute;width:163.8px; height:14.4px; top:336px; left:149.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${exfactorydate}</div>
// <div style=" display:flex; position:absolute;width:74.4px; height:14.4px; top:336px; left:340.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Dept:</div>
// <div style=" display:flex; position:absolute;width:93px; height:14.4px; top:336px; left:443.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${departmentcode}</div>
// <div style=" display:flex; position:absolute;width:69.6px; height:14.4px; top:364.8px;  left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Ship Mode:</div>
// <div style=" display:flex; position:absolute;width:163.8px; height:14.4px; top:364.8px; left:149.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${shippingmode}</div>
// <div style=" display:flex; position:absolute;width:93px; height:14.4px; top:364.8px; left:340.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Ship Method:</div>
// <div style=" display:flex; position:absolute;width:93px; height:14.4px; top:364.8px; left:443.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${shippingmethod}</div>

// <div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:387.6px;  left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end;border-bottom:2px solid black;  " >  </div>
// <div style=" display:flex; position:absolute;width:71px; height:14.4px; top:408px;  left:13px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > Price USD:</div>
// <div style=" display:flex; position:absolute;width:44.4px; height:14.4px; top:408px; left:141px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${priceperitemm}</div>
// <div style=" display:flex; position:absolute;width:65.8px; height:14.4px; top:408px; left:220.4px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Total Qty:</div>
// <div style=" display:flex; position:absolute;width:55.8px; height:14.4px; top:408px; left:280.2px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${totalqty}</div>
// <div style=" display:flex; position:absolute;width:103px; height:14.4px; top:408px; left:330.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Total Value USD:</div>
// <div style=" display:flex; position:absolute;width:93px; height:14.4px; top:408px; left:450.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${totalvalue}</div>
// <div style=" display:flex; position:absolute;width:456.6px; height:28.8px; top:436.8px;  left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-start; " > ${sizeqty}</div>

// <div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:476.6px;  left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end;border-bottom:2px solid black;  " >  </div>

// <div style=" display:flex; position:absolute;width:51px; height:14.4px; top:494.4px;  left:13px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > Rermarks:</div>
// <div style=" display:flex; position:absolute;width:252px; height:14.4px; top:508.8px;  left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Please see how to pack as below</div>
// <div style=" display:flex; position:absolute;width:456.6px; height:43.2px; top:530px;  left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-start; " > ${packingdetails}</div>

// <div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:625.6px;  left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end;border-bottom:2px solid black;  " >  </div>

// <div style=" display:flex; position:absolute;width:79.6px; height:14.4px; top:645.4px;  left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Colour Code:</div>
// <div style=" display:flex; position:absolute;width:89.4px; height:14.4px; top:645.4px; left:160.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${colorcode}</div>
// <div style=" display:flex; position:absolute;width:18.6px; height:14.4px; top:645.4px;  left:174px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > DEPT:</div>
// <div style=" display:flex; position:absolute;width:93px; height:14.4px; top:645.4px; left:280.2px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${departmentcode}</div>
// <div style=" display:flex; position:absolute;width:93px; height:14.4px; top:645.4px; left:380.8px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Selling Price:</div>
// <div style=" display:flex; position:absolute;width:93px; height:14.4px; top:645.4px; left:460.8px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${customerpriceperitemm}</div>`;
