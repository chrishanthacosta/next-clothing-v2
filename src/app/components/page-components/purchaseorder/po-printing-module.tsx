// components/PrintableComponent.js

import { Button } from "@nextui-org/react";
import React from "react";
import { BsPrinterFill } from "react-icons/bs";
import { getPackingListTable, getSizeQtyTable } from "./utils";

const formattArea = (formattedText) => {

      // Replace tab characters with spaces (customize the number of spaces)
      //formattedText = formattedText.replace(/\t/g, '    '); // Replace with four spaces

      // Replace line breaks with <br> for HTML rendering
      formattedText = formattedText.replace(/\n/g, '<br>');

      // Basic formatting 
      formattedText = formattedText.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
      formattedText = formattedText.replace(/\*([^\*]+)\*/g, '<em>$1</em>');
      formattedText = formattedText.replace(/\s/g, '&nbsp;');



     return formattedText;
} ;


const PoPrintableComponent = ({
      poDataForPrint,
}: {
      poDataForPrint: any[];
}) => {
      const poData = poDataForPrint[0];
      // console.log(poData);
      const sample = "Sample Data";
      const printDiv = () => {
            const divToPrint = document.getElementById("printableContent");
            const newWin = window.open("", "Print-Window");
            newWin.document.open();
            newWin.document.write("<html><head><title>Print</title></head><body>");
            newWin.document.write(`
      <div style=" display:flex; position:absolute;width:475.2px; height:33.6px; top:0px; left:13px;font-size:20px; font-weight:bold;justify-content:center; align-items:center; " > A AND F SOURCING(FASHIONS) LIMITED</div>
<div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:33.6px; left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end; " > Unit 02, Maple Grove Business Centre, Lawrence Road, Hounslow TW4 6DR.</div>
<div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:48px; left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end; " > Tel : 44 020 3948 5008 www.aandfsourcing.com</div>
<div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:62.4px; left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end; " > VAT Registration Number: 459 0807 69</div>

<div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:73.6px; left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end;border-bottom:2px solid black;  " >  </div>
<div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:91.2px; left:13px;font-size:14px; font-weight:bold;justify-content:center; align-items:center; " > Purchase Order</div>
<div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:108px; left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end;border-top:2px solid black;  " >  </div>

<div style=" display:flex; position:absolute;width:51px; height:14.4px; top:120px; left:13px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > PO#:</div>
<div style=" display:flex; position:absolute;width:18.6px; height:14.4px; top:120px; left:64px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > ${poData.purchaseorderid
                  }</div>
<div style=" display:flex; position:absolute;width:74.4px; height:14.4px; top:120px; left:283.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > PO Date:</div>
<div style=" display:flex; position:absolute;width:93px; height:14.4px; top:120px; left:376.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${poData.date
                  }</div>
<div style=" display:flex; position:absolute;width:51px; height:14.4px; top:148.8px; left:13px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > Customer:</div>
<div style=" display:flex; position:absolute;width:182.4px; height:14.4px; top:148.8px; left:82.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${poData.customername
                  }</div>
<div style=" display:flex; position:absolute;width:93px; height:14.4px; top:148.8px; left:283.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Customer PO #:</div>
<div style=" display:flex; position:absolute;width:93px; height:14.4px; top:148.8px; left:376.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${poData.customerpo
                  }</div>
<div style=" display:flex; position:absolute;width:51px; height:14.4px; top:177.6px; left:13px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > Factory:</div>
<div style=" display:flex; position:absolute;width:301px; height:14.4px; top:177.6px; left:82.6px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > ${poData.suppliername
                  }</div>
<div style=" display:flex; position:absolute;width:201px; height:57.6px; top:192px; left:82.6px;font-size:14px; font-weight:normal;line-height: 1rem;justify-content:flex-start; align-items:flex-start; " > ${poData.address?.replace(
                        /\n/g,
                        "<br />"
                  )}</div>

<div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:260.6px; left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end;border-bottom:2px solid black;  " >  </div>
<div style=" display:flex; position:absolute;width:69.6px; height:14.4px; top:285.4px; left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Style #:</div>
<div style=" display:flex; position:absolute;width:182.4px; height:14.4px; top:285.4px; left:82.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${poData.style
                  }</div>
<div style=" display:flex; position:absolute;width:100px; height:14.4px; top:285.4px; left:273.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Customer Style#:</div>
<div style=" display:flex; position:absolute;width:111.6px; height:14.4px; top:285.4px; left:376.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${poData.customerstylename
                  }</div>
<div style=" display:flex; position:absolute;width:69.6px; height:14.4px; top:307.2px; left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Fabric:</div>
<div style=" display:flex; position:absolute;width:182.4px; height:14.4px; top:307.2px; left:82.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${poData.fabricname
                  }</div>
<div style=" display:flex; position:absolute;width:18.6px; height:14.4px; top:307.2px; left:273.6px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > Colour:</div>
<div style=" display:flex; position:absolute;width:93px; height:14.4px; top:307.2px; left:376.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${poData.colour
                  }</div>
<div style=" display:flex; position:absolute;width:69.6px; height:14.4px; top:336px; left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Ex-Fty:</div>
<div style=" display:flex; position:absolute;width:163.8px; height:14.4px; top:336px; left:82.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${poData.exfactorydate
                  }</div>
<div style=" display:flex; position:absolute;width:74.4px; height:14.4px; top:336px; left:273.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Dept:</div>
<div style=" display:flex; position:absolute;width:93px; height:14.4px; top:336px; left:376.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${poData.department
                  }</div>
<div style=" display:flex; position:absolute;width:69.6px; height:14.4px; top:364.8px; left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Ship Mode:</div>
<div style=" display:flex; position:absolute;width:163.8px; height:14.4px; top:364.8px; left:82.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${poData.shippingmode
                  }</div>
<div style=" display:flex; position:absolute;width:93px; height:14.4px; top:364.8px; left:273.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Ship Method:</div>
<div style=" display:flex; position:absolute;width:93px; height:14.4px; top:364.8px; left:376.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${poData.shippingmethod
                  }</div>

<div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:387.6px; left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end;border-bottom:2px solid black;  " >  </div>
<div style=" display:flex; position:absolute;width:71px; height:14.4px; top:408px; left:13px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > Price ${poData.currency
                  }: </div>
<div style=" display:flex; position:absolute;width:44.4px; height:14.4px; top:408px; left:74px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${poData.supplierprice
                  }</div>
<div style=" display:flex; position:absolute;width:65.8px; height:14.4px; top:408px; left:153.4px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Total Qty:</div>
<div style=" display:flex; position:absolute;width:55.8px; height:14.4px; top:408px; left:213.2px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${poData.totalqty
                  }</div>
<div style=" display:flex; position:absolute;width:103px; height:14.4px; top:408px; left:263.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Total Value ${poData.currency
                  }:</div>
<div style=" display:flex; position:absolute;width:93px; height:14.4px; top:408px; left:383.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${poData.totalvalue
                  }</div>
<div style=" display:flex; position:absolute;width:456.6px; height:28.8px; top:436.8px; left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-start; " id="po-table1" ></div>

<div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:476.6px; left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end;border-bottom:2px solid black;  " >  </div>

<div style=" display:flex; position:absolute;width:51px; height:14.4px; top:494.4px; left:13px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > Note:</div>
<div style=" display:flex; position:absolute;width:252px; height:14.4px; top:508.8px; left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Please see how to pack as below</div>
<div style=" display:flex; position:absolute;width:456.6px; height:43.2px; top:530px; left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-start; " id="po-table2"> </div>

<div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:625.6px; left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end;border-bottom:2px solid black;  " >  </div>


<div style=" display:flex; position:absolute;width:79.6px; height:14.4px; top:645.4px; left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Colour Code:</div>
<div style=" display:flex; position:absolute;width:89.4px; height:14.4px; top:645.4px; left:93.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${poData.colourcode
                  }</div>
<div style=" display:flex; position:absolute;width:18.6px; height:14.4px; top:645.4px; left:172px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > DEPT:</div>
<div style=" display:flex; position:absolute;width:93px; height:14.4px; top:645.4px; left:213.2px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${poData.department
                  }</div>
<div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:650.6px; left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end;border-bottom:2px solid black;  " >  </div>
<div style=" display:flex; position:absolute;width:93px; height:14.4px; top:672.4px; left:13px;font-size:16px; font-weight:bold;justify-content:flex-start; align-items:flex-end; " > Remark:</div>
<div id="remark" style=" display:flex; position:absolute;width:475.2px; top:690.4px; left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " ></div>`);
            //    ${poData.remark}  newWin.document.write(`
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
            const d2 = newWin.document.getElementById("po-table1");
            const d3 = getSizeQtyTable(poDataForPrint);
            d2.appendChild(d3);

            //add details table div
            const d = newWin.document.getElementById("po-table2");
            const d1 = getPackingListTable(poDataForPrint);
            d.appendChild(d1);

            //add remark
            const d4 = newWin.document.getElementById("remark");
            d4.innerHTML = formattArea( poData.remark);      
            newWin.print();
            newWin.close();
      };

      return (
            <div id="printableContent">
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

export default PoPrintableComponent;

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
      VAT Registration Number: 459 0807 69
    </div>
    </div> */
}

// `<div style=" display:flex; position:absolute;width:475.2px; height:33.6px; top:0px; left:13px;font-size:26px; font-weight:bold;justify-content:center; align-items:center; " > A & F Sourcing Limited</div>
// <div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:33.6px; left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end; " > Unit 150, 981 Great West Road, Brenford, TW8 9DN</div>
// <div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:48px; left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end; " > Tel : +44 020 3948 5008 / +44 020 3883 9577 /www.aandfsourcing.com</div>
// <div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:62.4px; left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end; " > VAT Registration Number: 459 0807 69</div>

// <div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:73.6px; left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end;border-bottom:2px solid black;  " >  </div>
// <div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:91.2px; left:13px;font-size:14px; font-weight:bold;justify-content:center; align-items:center; " > Purchase Order</div>
// <div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:108px; left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end;border-top:2px solid black;  " >  </div>

// <div style=" display:flex; position:absolute;width:51px; height:14.4px; top:120px; left:13px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > PO#:</div>
// <div style=" display:flex; position:absolute;width:18.6px; height:14.4px; top:120px; left:64px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > ${id}</div>
// <div style=" display:flex; position:absolute;width:74.4px; height:14.4px; top:120px; left:283.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > PO Date:</div>
// <div style=" display:flex; position:absolute;width:93px; height:14.4px; top:120px; left:376.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${date}</div>
// <div style=" display:flex; position:absolute;width:51px; height:14.4px; top:148.8px; left:13px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > Customer:</div>
// <div style=" display:flex; position:absolute;width:182.4px; height:14.4px; top:148.8px; left:82.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${customername}</div>
// <div style=" display:flex; position:absolute;width:93px; height:14.4px; top:148.8px; left:283.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Customer PO #:</div>
// <div style=" display:flex; position:absolute;width:93px; height:14.4px; top:148.8px; left:376.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${customerpono}</div>
// <div style=" display:flex; position:absolute;width:51px; height:14.4px; top:177.6px; left:13px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > Factory:</div>
// <div style=" display:flex; position:absolute;width:301px; height:14.4px; top:177.6px; left:82.6px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > ${suppliername}</div>
// <div style=" display:flex; position:absolute;width:201px; height:57.6px; top:192px; left:82.6px;font-size:14px; font-weight:normal;line-height: 1rem;justify-content:flex-start; align-items:flex-start; " > ${supplieraddress}</div>

// <div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:260.6px; left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end;border-bottom:2px solid black;  " >  </div>
// <div style=" display:flex; position:absolute;width:69.6px; height:14.4px; top:285.4px; left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Style #:</div>
// <div style=" display:flex; position:absolute;width:182.4px; height:14.4px; top:285.4px; left:82.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${stylename}</div>
// <div style=" display:flex; position:absolute;width:100px; height:14.4px; top:285.4px; left:273.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Customer Style#:</div>
// <div style=" display:flex; position:absolute;width:111.6px; height:14.4px; top:285.4px; left:376.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${customerstylename}</div>
// <div style=" display:flex; position:absolute;width:69.6px; height:14.4px; top:307.2px; left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Fabric:</div>
// <div style=" display:flex; position:absolute;width:182.4px; height:14.4px; top:307.2px; left:82.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${fabricname}</div>
// <div style=" display:flex; position:absolute;width:18.6px; height:14.4px; top:307.2px; left:273.6px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > Colour:</div>
// <div style=" display:flex; position:absolute;width:93px; height:14.4px; top:307.2px; left:376.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${colorname}</div>
// <div style=" display:flex; position:absolute;width:69.6px; height:14.4px; top:336px; left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Ex-Fty:</div>
// <div style=" display:flex; position:absolute;width:163.8px; height:14.4px; top:336px; left:82.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${exfactorydate}</div>
// <div style=" display:flex; position:absolute;width:74.4px; height:14.4px; top:336px; left:273.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Dept:</div>
// <div style=" display:flex; position:absolute;width:93px; height:14.4px; top:336px; left:376.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${departmentcode}</div>
// <div style=" display:flex; position:absolute;width:69.6px; height:14.4px; top:364.8px; left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Ship Mode:</div>
// <div style=" display:flex; position:absolute;width:163.8px; height:14.4px; top:364.8px; left:82.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${shippingmode}</div>
// <div style=" display:flex; position:absolute;width:93px; height:14.4px; top:364.8px; left:273.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Ship Method:</div>
// <div style=" display:flex; position:absolute;width:93px; height:14.4px; top:364.8px; left:376.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${shippingmethod}</div>

// <div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:387.6px; left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end;border-bottom:2px solid black;  " >  </div>
// <div style=" display:flex; position:absolute;width:71px; height:14.4px; top:408px; left:13px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > Price USD:</div>
// <div style=" display:flex; position:absolute;width:44.4px; height:14.4px; top:408px; left:141px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${priceperitemm}</div>
// <div style=" display:flex; position:absolute;width:65.8px; height:14.4px; top:408px; left:220.4px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Total Qty:</div>
// <div style=" display:flex; position:absolute;width:55.8px; height:14.4px; top:408px; left:280.2px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${totalqty}</div>
// <div style=" display:flex; position:absolute;width:103px; height:14.4px; top:408px; left:330.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Total Value USD:</div>
// <div style=" display:flex; position:absolute;width:93px; height:14.4px; top:408px; left:450.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${totalvalue}</div>
// <div style=" display:flex; position:absolute;width:456.6px; height:28.8px; top:436.8px; left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-start; " > ${sizeqty}</div>

// <div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:476.6px; left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end;border-bottom:2px solid black;  " >  </div>

// <div style=" display:flex; position:absolute;width:51px; height:14.4px; top:494.4px; left:13px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > Rermarks:</div>
// <div style=" display:flex; position:absolute;width:252px; height:14.4px; top:508.8px; left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Please see how to pack as below</div>
// <div style=" display:flex; position:absolute;width:456.6px; height:43.2px; top:530px; left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-start; " > ${packingdetails}</div>

// <div style=" display:flex; position:absolute;width:475.2px; height:14.4px; top:625.6px; left:13px;font-size:14px; font-weight:normal;justify-content:center; align-items:flex-end;border-bottom:2px solid black;  " >  </div>

// <div style=" display:flex; position:absolute;width:79.6px; height:14.4px; top:645.4px; left:13px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Colour Code:</div>
// <div style=" display:flex; position:absolute;width:89.4px; height:14.4px; top:645.4px; left:160.6px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${colorcode}</div>
// <div style=" display:flex; position:absolute;width:18.6px; height:14.4px; top:645.4px; left:239px;font-size:14px; font-weight:normal;justify-content:left; align-items:flex-end; " > DEPT:</div>
// <div style=" display:flex; position:absolute;width:93px; height:14.4px; top:645.4px; left:280.2px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${departmentcode}</div>
// <div style=" display:flex; position:absolute;width:93px; height:14.4px; top:645.4px; left:380.8px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > Selling Price:</div>
// <div style=" display:flex; position:absolute;width:93px; height:14.4px; top:645.4px; left:460.8px;font-size:14px; font-weight:normal;justify-content:flex-start; align-items:flex-end; " > ${customerpriceperitemm}</div>`;
