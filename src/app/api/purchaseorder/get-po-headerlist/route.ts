import { prisma } from "@/db";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const customerid: string = searchParams.get("customerid");
  // console.log("customerid",customerid,)
  let res: any;
  try {
    await prisma.$transaction(async (tx) => {
      const rawQuery = Prisma.sql`select p.*,c.customername,s.suppliername,f.fabricname from purchaseorders as p 
      left join customers as c on p.customerid = c.customerid
      left join suppliers as s on p.supplierid = s.supplierid
      left join fabrics as f on p.fabricid = f.fabricid where p.customerid = ${parseInt(
        customerid
      )} order by p.purchaseorderid desc`;
      const poData = await tx.$queryRaw(rawQuery);

      res = { message: "SUCCESS", poData };

      return "";
    });
  } catch (error) {
    console.error("Error purchase order:", error);
    res = { message: "FAIL" };
  }

  return NextResponse.json(res);
}
