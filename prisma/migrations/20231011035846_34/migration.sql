-- CreateTable
CREATE TABLE "invoice" (
    "invoiceid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "invoiceno" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "paymentterm" TEXT NOT NULL,
    "customerid" INTEGER NOT NULL,
    "bankaccountid" INTEGER NOT NULL,
    "totalqty" INTEGER NOT NULL DEFAULT 0,
    "totalvalue" INTEGER NOT NULL DEFAULT 0,
    "currency" TEXT NOT NULL,
    "remark" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "invoicedetails" (
    "invoicedetailid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "invoiceid" INTEGER NOT NULL,
    "purchaseorderid" INTEGER NOT NULL
);
