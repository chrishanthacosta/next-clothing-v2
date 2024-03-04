/*
  Warnings:

  - You are about to alter the column `sellingprice` on the `purchaseorders` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `supplierprice` on the `purchaseorders` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `totalvalue` on the `purchaseorders` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `sellingprice` on the `invoicedetails` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `totalvalue` on the `invoice` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_purchaseorders" (
    "purchaseorderid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customerid" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "supplierid" INTEGER NOT NULL,
    "customerpo" TEXT NOT NULL,
    "exfactorydate" TEXT NOT NULL,
    "shippingmode" TEXT NOT NULL,
    "customerstylename" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "shippingmethod" TEXT NOT NULL,
    "fabricid" INTEGER NOT NULL,
    "rationpacksize" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "colour" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "supplierprice" REAL NOT NULL,
    "sellingprice" REAL NOT NULL,
    "colourcode" TEXT NOT NULL,
    "remark" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "orderstatus" TEXT NOT NULL,
    "samplestatus" TEXT NOT NULL,
    "totalqty" INTEGER NOT NULL DEFAULT 0,
    "totalvalue" REAL NOT NULL DEFAULT 0.00,
    "dcdate" TEXT NOT NULL DEFAULT '2023-02-12'
);
INSERT INTO "new_purchaseorders" ("colour", "colourcode", "currency", "customerid", "customerpo", "customerstylename", "date", "dcdate", "department", "description", "exfactorydate", "fabricid", "orderstatus", "purchaseorderid", "rationpacksize", "remark", "samplestatus", "sellingprice", "shippingmethod", "shippingmode", "style", "supplierid", "supplierprice", "totalqty", "totalvalue") SELECT "colour", "colourcode", "currency", "customerid", "customerpo", "customerstylename", "date", "dcdate", "department", "description", "exfactorydate", "fabricid", "orderstatus", "purchaseorderid", "rationpacksize", "remark", "samplestatus", "sellingprice", "shippingmethod", "shippingmode", "style", "supplierid", "supplierprice", "totalqty", "totalvalue" FROM "purchaseorders";
DROP TABLE "purchaseorders";
ALTER TABLE "new_purchaseorders" RENAME TO "purchaseorders";
CREATE TABLE "new_invoicedetails" (
    "invoicedetailid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "invoiceid" INTEGER NOT NULL,
    "purchaseorderid" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "customerpo" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "colour" TEXT NOT NULL,
    "totalqty" INTEGER NOT NULL,
    "sellingprice" REAL NOT NULL
);
INSERT INTO "new_invoicedetails" ("colour", "customerpo", "description", "invoicedetailid", "invoiceid", "purchaseorderid", "sellingprice", "style", "totalqty") SELECT "colour", "customerpo", "description", "invoicedetailid", "invoiceid", "purchaseorderid", "sellingprice", "style", "totalqty" FROM "invoicedetails";
DROP TABLE "invoicedetails";
ALTER TABLE "new_invoicedetails" RENAME TO "invoicedetails";
CREATE TABLE "new_invoice" (
    "invoiceid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "invoiceno" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "paymentterm" TEXT NOT NULL,
    "customerid" INTEGER NOT NULL,
    "bankaccountid" INTEGER NOT NULL,
    "totalqty" INTEGER NOT NULL DEFAULT 0,
    "totalvalue" REAL NOT NULL DEFAULT 0.00,
    "currency" TEXT NOT NULL,
    "remark" TEXT NOT NULL
);
INSERT INTO "new_invoice" ("bankaccountid", "currency", "customerid", "date", "invoiceid", "invoiceno", "paymentterm", "remark", "totalqty", "totalvalue") SELECT "bankaccountid", "currency", "customerid", "date", "invoiceid", "invoiceno", "paymentterm", "remark", "totalqty", "totalvalue" FROM "invoice";
DROP TABLE "invoice";
ALTER TABLE "new_invoice" RENAME TO "invoice";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
