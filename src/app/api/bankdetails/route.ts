import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let res: any;

  try {
    const bankDetailData = await prisma.bankdetails.findMany({
      orderBy: {
        bankaccountid: "desc", // Order by the "name" field in ascending order
      },
    });

    res = { message: "SUCCESS", bankDetailData };
  } catch (error) {
    console.error("Error Bank details:", error);
    res = { message: "FAIL" };
  }

  return NextResponse.json(res);
}

export async function POST(request: Request) {
  const {
    bankname,
    accountname,
    branchname,
    ibanno,
    bankbic,
    branchbic,
    accountno,
    sort,
  } = await request.json();
  let message: string = "SUCCESS";
  try {
    await prisma.$transaction(async (tx) => {
      // 1. addnew category for geader table.
      const newBankdetails = await tx.bankdetails.create({
        data: {
          bankname,
          accountname,
          branchname,
          ibanno,
          bankbic,
          branchbic,
          accountno,
          sort,
        },
      });

      return "";
    });
  } catch (error) {
    console.error("Error adding new Bank details", error);
    message = "FAIL";
  }
  return NextResponse.json(message);
}

export async function PUT(request: Request) {
  const {
    bankaccountid,
    bankname,
    accountname,
    branchname,
    ibanno,
    bankbic,
    branchbic,
    accountno,
    sort,
  } = await request.json();
  let message: string = "SUCCESS";
  try {
    await prisma.$transaction(async (tx) => {
      // 1. addnew category for geader table.
      const newBankdetails = await tx.bankdetails.updateMany({
        where: { bankaccountid: parseInt(bankaccountid) },
        data: {
          bankname,
          accountname,
          branchname,
          ibanno,
          bankbic,
          branchbic,
          accountno,
          sort,
        },
      });

      return "";
    });
  } catch (error) {
    console.error("Error updating Bank details", error);
    message = "FAIL";
  }
  return NextResponse.json(message);
}

export async function DELETE(request: Request) {
  const { bankaccountid } = await request.json();

  let message: string = "SUCCESS";

  try {
    await prisma.$transaction(async (tx) => {
      // 1. delete category.
      await tx.bankdetails.delete({
        where: {
          bankaccountid,
        },
      });

      return "";
    });
  } catch (error) {
    console.error("Error deleting Bank details", error);
    message = "FAIL";
  }

  return NextResponse.json(message);
}
