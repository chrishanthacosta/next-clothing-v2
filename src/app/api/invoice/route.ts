import { prisma } from "@/db";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let res: any;

  try {
    const rawQuery = Prisma.sql`select i.*,c.customername from invoice as i join customers as c on i.customerid = c.customerid order by i.invoiceid desc`;
    const invoiceData = await prisma.$queryRaw(rawQuery);
    res = { message: "SUCCESS", invoiceData };
  } catch (error) {
    console.error("Error invoice:", error);
    res = { message: "FAIL" };
  }

  return NextResponse.json(res);
}

export async function POST(request: Request) {
  const { formData, customerid, bankaccountid, currency, selectedPoDataList } =
    await request.json();
  let res: any;
  let headerId: number = formData.invoiceid;

  try {
    await prisma.$transaction(async (tx) => {
      if (formData.invoiceid) {
        await tx.invoice.updateMany({
          where: { invoiceid: parseInt(formData.invoiceid) },
          data: {
            invoiceno: formData.invoiceno,
            date: formData.date,
            paymentterm: formData.paymentterm,
            customerid: parseInt(customerid),
            bankaccountid: parseInt(bankaccountid),
            totalqty: parseInt(formData.totalqty),
            totalvalue: parseFloat(formData.totalvalue),
            currency,
            remark: formData.remark,
          },
        });
        await tx.invoicedetails.deleteMany({
          where: { invoiceid: parseInt(formData.invoiceid) },
        });
      } else {
        const newInvoice = await tx.invoice.create({
          data: {
            invoiceno: formData.invoiceno,
            date: formData.date,
            paymentterm: formData.paymentterm,
            customerid: parseInt(customerid),
            bankaccountid: parseInt(bankaccountid),
            totalqty: parseInt(formData.totalqty),
            totalvalue: parseFloat(formData.totalvalue),
            currency,
            remark: formData.remark,
          },
        });
        if (!newInvoice.invoiceid) {
          throw new Error(`PO not enterd`);
        }
        headerId = newInvoice.invoiceid;
      }

      for (let i = 0; i < selectedPoDataList.length; i++) {
        const element = selectedPoDataList[i];
        await tx.invoicedetails.create({
          data: {
            invoiceid: headerId,
            purchaseorderid: element.purchaseorderid,
            description: element.description,
            customerpo: element.customerpo,
            style: element.style,
            colour: element.colour,
            totalqty: parseInt(element.totalqty),
            sellingprice: parseFloat(element.sellingprice),
          },
        });
      }

      res = { message: "SUCCESS" };

      return "";
    });
  } catch (error) {
    console.error("Error adding new invoice", error);
    res = { message: "FAIL" };
  }
  return NextResponse.json(res);
}

export async function PUT(request: Request) {
  const { supplierid, suppliercode, suppliername, email, phone, address } =
    await request.json();
  let message: string = "SUCCESS";
  try {
    await prisma.$transaction(async (tx) => {
      // 1. addnew category for geader table.
      const newFabrics = await tx.suppliers.updateMany({
        where: { supplierid: parseInt(supplierid) },
        data: {
          suppliercode,
          suppliername,
          email,
          phone,
          address,
        },
      });

      return "";
    });
  } catch (error) {
    console.error("Error updating Supplier", error);
    message = "FAIL";
  }
  return NextResponse.json(message);
}

export async function DELETE(request: Request) {
  const { invoiceid } = await request.json();

  let message: string = "SUCCESS";

  try {
    await prisma.$transaction(async (tx) => {
      // 1. delete category.
      await tx.invoice.delete({
        where: {
          invoiceid: parseInt(invoiceid),
        },
      });
      await tx.invoicedetails.deleteMany({
        where: {
          invoiceid: parseInt(invoiceid),
        },
      });
      return "";
    });
  } catch (error) {
    console.error("Error deleting Invoice", error);
    message = "FAIL";
  }

  return NextResponse.json(message);
}
