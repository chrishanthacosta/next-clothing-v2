-- CreateTable
CREATE TABLE "customers" (
    "customerid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customercode" TEXT NOT NULL,
    "customername" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL
);
