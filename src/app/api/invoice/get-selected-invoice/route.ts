import { prisma } from "@/db";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const invoiceid: any = searchParams.get("invoiceid");
  // console.log("invoiceid", invoiceid);
  let res: any;
  try {
    await prisma.$transaction(async (tx) => {
      // let invoiceData = await tx.invoice.findMany({
      //   where: {
      //     invoiceid: parseInt(invoiceid),
      //   },
      // });
      const rawQuery = Prisma.sql`
                    SELECT i.*, c.customername, c.address,b.*
                    FROM invoice i
                    JOIN customers c ON i.customerid = c.customerid JOIN bankdetails as b ON i.bankaccountid = b.bankaccountid
                    WHERE i.invoiceid = ${parseInt(invoiceid)}
                  `;
      const invoiceData = await tx.$queryRaw(rawQuery);
      let invoiceDetailData = await tx.invoicedetails.findMany({
        where: {
          invoiceid: parseInt(invoiceid),
        },
      });
      // console.log("invoiceData", invoiceData);
      // const rawQuery = Prisma.sql`select p.*,c.customername,s.*,f.fabricname from purchaseorders as p
      // left join customers as c on p.customerid = c.customerid
      // left join suppliers as s on p.supplierid = s.supplierid
      // left join fabrics as f on p.fabricid = f.fabricid where purchaseorderid=${purchaseorderid}`;
      // const poData = await tx.$queryRaw(rawQuery);

      // console.log("tmpInvoiceData",tmpInvoiceData,)
      // const tmpArray = tmpInvoiceData;
      // const invoiceData = tmpArray.map((y) => ({
      //   invoiceid: y.invoiceid,
      //   invoiceno: y.invoiceno,
      //   date: y.date,
      //   paymentterm: y.paymentterm,
      //   totalqty: y.totalqty,
      //   totalvalue: y.totalvalue,
      //   remark: y.remark,
      // }));

      // const poDetailData = await tx.purchaseorderdetails.findMany({
      //   where: {
      //     purchaseorderid: parseInt(purchaseorderid),
      //   },
      //   orderBy: {
      //     rowindex: "asc", // Replace 'yourPropertyName' with the actual property name
      //   },
      // });

      // poData["poDetailData"] = poDetailData;
      // console.log("poDetailData", poData);
      // res = { message: "SUCCESS", poData, poDetailData };
      res = { message: "SUCCESS", invoiceData, invoiceDetailData };
      return "";
    });
  } catch (error) {
    console.error("Error items", error);
    res = { message: "FAIL" };
  }

  return NextResponse.json(res);
}
