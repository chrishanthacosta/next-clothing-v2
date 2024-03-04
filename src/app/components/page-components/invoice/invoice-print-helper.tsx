// import { gdiv, gspan } from "../../utils/js-utils/jsutils-creation";

import { gdiv, gspan } from "../purchaseorder/utils";

export const getInvoicePrintHTMLTemplate = (data) => {
  const {
    id,
    customername,
    date,
    customeraddress,
    payementterms,

    remarks,

    accountname,
    accountno,
    sortcode,
    ibanno,
    bankbic,
    branchbic,
  } = data;
  const invoiceno = new Date(date).getFullYear() + "-" + id;
  console.log("id:", data);
  const invdetailsHTML = getInvoiceDetailsDiv(data).innerHTML;
  // const packingdetails = getPackingListTable(data).innerHTML;
  const a = document.createElement("template");
  a.innerHTML = `
<div style=" display:flex; position:absolute;width:490.8px; height:33.6px; top:0px; left:80px;font-size:26px; font-weight:bold;justify-content:center; align-items:center; " > A AND F SOURCING(FASHIONS) LIMITED</div>
<div style=" display:flex; position:absolute;width:490.8px; height:15px; top:33.6px; left:80px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end; " > Unit 150, 981 Great West Road, Brenford, TW8 9DN</div>
<div style=" display:flex; position:absolute;width:490.8px; height:15px; top:48.6px; left:80px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end; " > Tel : +44 020 3948 5008 / +44 020 3883 9577 /www.aandfsourcing.com</div>
<div style=" display:flex; position:absolute;width:490.8px; height:15px; top:63.6px; left:80px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end; " > VAT Registration Number: 273 8855 56</div>
<div style=" display:flex; position:absolute;width:490.8px; height:14.4px; top:78.6px; left:80px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end;border-bottom:2px solid black;  " >  </div>
<div style=" display:flex; position:absolute;width:490.8px; height:15px; top:93px; left:80px;font-size:14px; font-weight:bold;justify-content:center; align-items:center;  " > Commercial Invoice</div>
<div style=" display:flex; position:absolute;width:490.8px; height:14.4px; top:108px; left:80px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end;border-top:2px solid black;  " >  </div>
<div style=" display:flex; position:absolute;width:51px; height:15px; top:122.4px; left:80px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-end; " > Bill to:</div>
<div style=" display:flex; position:absolute;width:74.4px; height:15px; top:122.4px; left:350.6px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Invoice No:</div>
<div style=" display:flex; position:absolute;width:145.8px; height:15px; top:122.4px; left:425px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-start; " > ${invoiceno}</div>
<div style=" display:flex; position:absolute;width:233.4px; height:14.4px; top:137.4px; left:80px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-start; " > ${customername}</div>
<div style=" display:flex; position:absolute;width:74.4px; height:14.4px; top:137.4px; left:350.6px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Date:</div>
<div style=" display:flex; position:absolute;width:145.8px; height:14.4px; top:137.4px; left:425px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-start; " > ${date}</div>
<div style=" display:flex; position:absolute;width:233.4px; height:87.6px; top:151.8px; left:80px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-start; " > ${customeraddress}</div>
<div style=" display:flex; position:absolute;width:74.4px; height:15px; top:151.8px; left:350.6px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Payment Terms:</div>
<div style=" display:flex; position:absolute;width:145.8px; height:15px; top:151.8px; left:425px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${payementterms}</div>
<div style=" display:flex; position:absolute;width:490.8px; height:14.4px; top:239.4px; left:80px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end;border-bottom:2px solid black;  " >  </div>
<div style=" display:flex; position:absolute;width:490.8px; height:14.4px; top:253.8px; left:80px;font-size:12px; font-weight:bold;justify-content:center; align-items:center;   " > Quantities and Descriptions</div>
<div style=" display:flex; position:absolute;width:490.8px; height:14.4px; top:268.2px; left:80px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end;border-top:2px solid black;  " >  </div>
<div style=" display:flex; position:absolute;width:490.8px; height:28.8px; top:282.6px; left:80px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-start; " > ${invdetailsHTML}</div>
<div style=" display:flex; position:absolute;width:51px; height:14.4px; top:484.2px; left:80px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-end; " > Remarks:</div>
<div style=" display:flex; position:absolute;width:490.8px; height:43.2px; top:498.6px; left:80px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-start; " > ${remarks}</div>
<div style=" display:flex; position:absolute;width:500px; height:14.4px; top:541.8px; left:80px;font-size:12px; font-weight:normal;justify-content:left; align-items:flex-end;   " > Bank Details</div>
<div style=" display:flex; position:absolute;width:490.8px; height:14.4px; top:556.2px; left:80px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end;border-top:2px solid black;  " >  </div>
<div style=" display:flex; position:absolute;width:51px; height:14.4px; top:570.6px; left:80px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-start; " > Bank:</div>
<div style=" display:flex; position:absolute;width:200px; height:14.4px; top:585px; left:80px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-start; " > Account Name/ Beneficiary Name:</div>
<div style=" display:flex; position:absolute;width:279px; height:14.4px; top:585px; left:239px;font-size:11px; font-weight:bold;justify-content:flex-start; align-items:flex-start; " > ${accountname}</div>
<div style=" display:flex; position:absolute;width:150px; height:14.4px; top:599.4px; left:80px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-end; " > Account Number:</div>
<div style=" display:flex; position:absolute;width:279px; height:14.4px; top:599.4px; left:239px;font-size:11px; font-weight:bold;justify-content:flex-start; align-items:flex-start; " > ${accountno}</div>
<div style=" display:flex; position:absolute;width:150px; height:14.4px; top:613.8px; left:80px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-end; " > Sort Code:</div>
<div style=" display:flex; position:absolute;width:279px; height:14.4px; top:613.8px; left:239px;font-size:11px; font-weight:bold;justify-content:flex-start; align-items:flex-start; " > ${sortcode}</div>
<div style=" display:flex; position:absolute;width:150px; height:14.4px; top:628.2px; left:80px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-end; " > IBAN A/C NO:</div>
<div style=" display:flex; position:absolute;width:279px; height:14.4px; top:628.2px; left:239px;font-size:11px; font-weight:bold;justify-content:flex-start; align-items:flex-start; " > ${ibanno}</div>
<div style=" display:flex; position:absolute;width:150px; height:14.4px; top:642.6px; left:80px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-end; " > Bank BIC:</div>
<div style=" display:flex; position:absolute;width:279px; height:14.4px; top:642.6px; left:239px;font-size:11px; font-weight:bold;justify-content:flex-start; align-items:flex-start; " > ${bankbic}</div>
<div style=" display:flex; position:absolute;width:150px; height:14.4px; top:657px; left:80px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-end; " > Branch BIC:</div>
<div style=" display:flex; position:absolute;width:279px; height:14.4px; top:657px; left:239px;font-size:11px; font-weight:bold;justify-content:flex-start; align-items:flex-start; " > ${branchbic}</div>
`;

  return a;
};

const getInvoiceDetailsDiv = (data) => {
  const odiv = gdiv([], {
    css: {
      display: "flex",
      flexDirection: "column",
      border: "1px solid black",
      width: "100%",
    },
  });
  const hRowDiv = getHeaderRowDiv();
  odiv.appendChild(hRowDiv);

  let totalqty = 0;
  let totalvalue = 0;
  //rows
  data.invoicedetails.forEach((row) => {
    const cdiv = gdiv([], {
      css: {
        display: "flex",

        // flex: "1 1 5%",
        //border: "1px solid black",
        // width: "30px",
      },
    });

    addSpanToDiv(row.description, cdiv, 40);
    addSpanToDiv(row.customerpono, cdiv, 20);
    addSpanToDiv(row.styleno, cdiv, 20);
    addSpanToDiv(row.colour, cdiv, 20);
    addSpanToDiv(row.qty, cdiv, 20, "flex-end");
    const v = parseFloat(row.unitprice).toFixed(2);
    addSpanToDiv(v, cdiv, 20, "flex-end");
    const val = parseFloat(row.unitprice) * parseInt(row.qty);
    const valStr = val.toFixed(2)
    addSpanToDiv(valStr, cdiv, 20, "flex-end", true);

    odiv.appendChild(cdiv);

    totalqty += parseFloat(row.qty);
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


  addSpanToDiv("Total", odiv, 101.5, "center", false, "bold");
  addSpanToDiv(qty, odiv, 20, "flex-end", false, "bold");
  addSpanToDiv(" ", odiv, 20, "flex-end", false, "bold");
  addSpanToDiv(value, odiv, 20, "flex-end", true, "bold");
  return odiv;
}
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
  addSpanToHDiv("Qty", odiv, 20);
  addSpanToHDiv("Unit Price (USD)", odiv, 20);
  addSpanToHDiv("Value              (USD)", odiv, 20, true);

  return odiv;
};

const addSpanToHDiv = (title, cdiv, widthPercentage, noRightBorder = false) => {
  let borderRight;
  if (noRightBorder) {
    borderRight = "";
  } else {
    borderRight = "1px solid black"
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
  noRightBorder = false, fontWeight = "normal"
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