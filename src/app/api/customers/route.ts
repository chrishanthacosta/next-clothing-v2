import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let res: any;

  try {
    const customerData = await prisma.customers.findMany({
      orderBy: {
        customerid: "desc", // Order by the "name" field in ascending order
      },
    });

    res = { message: "SUCCESS", customerData };
  } catch (error) {
    console.error("Error Customer:", error);
    res = { message: "FAIL" };
  }

  return NextResponse.json(res);
}

export async function POST(request: Request) {
  const { customercode, customername, email, phone, address } =
    await request.json();
  let res: any;

  try {
    await prisma.$transaction(async (tx) => {
      // 1. addnew category for geader table.
      const newCustomer = await tx.customers.create({
        data: {
          customercode,
          customername,
          email,
          phone,
          address,
        },
      });
      res = { message: "SUCCESS", newCustomer };

      return "";
    });
  } catch (error) {
    console.error("Error adding new Customer", error);
    res = { message: "FAIL" };
  }
  return NextResponse.json(res);
}

export async function PUT(request: Request) {
  const { customerid, customercode, customername, email, phone, address } =
    await request.json();
  let message: string = "SUCCESS";
  try {
    await prisma.$transaction(async (tx) => {
      // 1. addnew category for geader table.
      const newFabrics = await tx.customers.updateMany({
        where: { customerid: parseInt(customerid) },
        data: {
          customercode,
          customername,
          email,
          phone,
          address,
        },
      });

      return "";
    });
  } catch (error) {
    console.error("Error updating Customer", error);
    message = "FAIL";
  }
  return NextResponse.json(message);
}

export async function DELETE(request: Request) {
  const { customerid } = await request.json();

  let message: string = "SUCCESS";

  try {
    await prisma.$transaction(async (tx) => {
      // 1. delete category.
      await tx.customers.delete({
        where: {
          customerid,
        },
      });

      return "";
    });
  } catch (error) {
    console.error("Error deleting Customer", error);
    message = "FAIL";
  }

  return NextResponse.json(message);
}
