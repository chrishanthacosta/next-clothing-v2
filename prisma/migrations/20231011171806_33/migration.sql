/*
  Warnings:

  - You are about to alter the column `sellingprice` on the `invoicedetails` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `totalqty` on the `invoicedetails` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

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
    "totalqty" INTEGER NOT NULL,
    "sellingprice" INTEGER NOT NULL
);
INSERT INTO "new_invoicedetails" ("colour", "customerpo", "description", "invoicedetailid", "invoiceid", "purchaseorderid", "sellingprice", "style", "totalqty") SELECT "colour", "customerpo", "description", "invoicedetailid", "invoiceid", "purchaseorderid", "sellingprice", "style", "totalqty" FROM "invoicedetails";
DROP TABLE "invoicedetails";
ALTER TABLE "new_invoicedetails" RENAME TO "invoicedetails";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
