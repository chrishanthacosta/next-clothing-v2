import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let res: any;

  try {
    const supplierData = await prisma.suppliers.findMany({
      orderBy: {
        supplierid: "desc", // Order by the "name" field in ascending order
      },
    });

    res = { message: "SUCCESS", supplierData };
  } catch (error) {
    console.error("Error suppliers:", error);
    res = { message: "FAIL" };
  }

  return NextResponse.json(res);
}

export async function POST(request: Request) {
  const { suppliercode, suppliername, email, phone, address } =
    await request.json();
  let res: any;

  try {
    await prisma.$transaction(async (tx) => {
      // 1. addnew category for geader table.
      const newSupplier = await tx.suppliers.create({
        data: {
          suppliercode,
          suppliername,
          email,
          phone,
          address,
        },
      });
      res = { message: "SUCCESS", newSupplier };

      return "";
    });
  } catch (error) {
    console.error("Error adding new supplier", error);
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
  const { supplierid } = await request.json();

  let message: string = "SUCCESS";

  try {
    await prisma.$transaction(async (tx) => {
      // 1. delete category.
      await tx.suppliers.delete({
        where: {
          supplierid,
        },
      });

      return "";
    });
  } catch (error) {
    console.error("Error deleting Supplier", error);
    message = "FAIL";
  }

  return NextResponse.json(message);
}
