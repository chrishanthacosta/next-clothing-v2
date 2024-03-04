import { prisma } from "@/db";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const purchaseorderid: any = searchParams.get("purchaseorderid");
  let res: any;
  try {
    await prisma.$transaction(async (tx) => {
      // let poData = await tx.purchaseorders.findMany({
      //   where: {
      //     purchaseorderid: parseInt(purchaseorderid),
      //   },
      // });
      const rawQuery = Prisma.sql`select p.*,c.customername,s.*,f.fabricname from purchaseorders as p 
      left join customers as c on p.customerid = c.customerid
      left join suppliers as s on p.supplierid = s.supplierid
      left join fabrics as f on p.fabricid = f.fabricid where purchaseorderid=${purchaseorderid}`;
      const poData = await tx.$queryRaw(rawQuery);

      const poDetailData = await tx.purchaseorderdetails.findMany({
        where: {
          purchaseorderid: parseInt(purchaseorderid),
        },
        orderBy: {
          rowindex: "asc", // Replace 'yourPropertyName' with the actual property name
        },
      });

      // poData["poDetailData"] = poDetailData;
      // console.log("poDetailData", poData);
      res = { message: "SUCCESS", poData, poDetailData };
      return "";
    });
  } catch (error) {
    console.error("Error items", error);
    res = { message: "FAIL" };
  }

  return NextResponse.json(res);
}
