import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let res: any;

  try {
    const fabricData = await prisma.fabrics.findMany({
      orderBy: {
        fabricid: "desc", // Order by the "name" field in ascending order
      },
    });

    res = { message: "SUCCESS", fabricData };
  } catch (error) {
    console.error("Error fabric:", error);
    res = { message: "FAIL" };
  }

  return NextResponse.json(res);
}

export async function POST(request: Request) {
  const { fabricname } = await request.json();
  let res: any;
  try {
    await prisma.$transaction(async (tx) => {
      // 1. addnew category for geader table.
      const newFabric = await tx.fabrics.create({
        data: {
          fabricname,
        },
      });
      res = { message: "SUCCESS", newFabric };
      return "";
    });
  } catch (error) {
    console.error("Error adding new Fabric item", error);
    res = { message: "FAIL" };
  }
  return NextResponse.json(res);
}

export async function PUT(request: Request) {
  const { fabricid, fabricname } = await request.json();
  let message: string = "SUCCESS";
  try {
    await prisma.$transaction(async (tx) => {
      // 1. addnew category for geader table.
      const newFabrics = await tx.fabrics.updateMany({
        where: { fabricid: parseInt(fabricid) },
        data: {
          fabricname,
        },
      });

      return "";
    });
  } catch (error) {
    console.error("Error updating Fabric item", error);
    message = "FAIL";
  }
  return NextResponse.json(message);
}

export async function DELETE(request: Request) {
  const { fabricid } = await request.json();

  let message: string = "SUCCESS";

  try {
    await prisma.$transaction(async (tx) => {
      // 1. delete category.
      await tx.fabrics.delete({
        where: {
          fabricid,
        },
      });

      return "";
    });
  } catch (error) {
    console.error("Error deleting fabric item", error);
    message = "FAIL";
  }

  return NextResponse.json(message);
}
