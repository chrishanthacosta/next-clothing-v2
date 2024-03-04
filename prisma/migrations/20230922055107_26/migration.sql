/*
  Warnings:

  - You are about to drop the `brands` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subcategories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `units` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "brands";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "categories";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "items";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "subcategories";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "units";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "purchaseorders" (
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
    "supplierprice" TEXT NOT NULL,
    "sellingprice" TEXT NOT NULL,
    "colourcode" TEXT NOT NULL,
    "remark" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "orderstatus" TEXT NOT NULL,
    "samplestatus" TEXT NOT NULL
);
