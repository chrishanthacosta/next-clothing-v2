/*
  Warnings:

  - Added the required column `colour` to the `invoicedetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerpo` to the `invoicedetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `invoicedetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellingprice` to the `invoicedetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `style` to the `invoicedetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalqty` to the `invoicedetails` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_invoicedetails" (
    "invoicedetailid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "invoiceid" INTEGER NOT NULL,
    "purchaseorderid" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "customerpo" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "colour" TEXT NOT NULL,
    "totalqty" TEXT NOT NULL,
    "sellingprice" TEXT NOT NULL
);
INSERT INTO "new_invoicedetails" ("invoicedetailid", "invoiceid", "purchaseorderid") SELECT "invoicedetailid", "invoiceid", "purchaseorderid" FROM "invoicedetails";
DROP TABLE "invoicedetails";
ALTER TABLE "new_invoicedetails" RENAME TO "invoicedetails";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
